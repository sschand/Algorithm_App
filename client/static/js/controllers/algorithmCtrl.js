
algorithmApp.controller('algorithmCtrl', function ($scope, algorithmFactory, userFactory, $routeParams, socket) {
    $scope.users = [];
    $scope.current_algo;
    $scope.messages = [];
    var room;

    // $scope.users = [];
    $scope.current_user = userFactory.getUser();
    // $scope.users.push($scope.current_user);

    $scope.algo_id = $routeParams.id;

    // Get current algorithm
    algorithmFactory.getCurrentAlgo($scope.algo_id, function(data){
        $scope.current_algo = data;
        room = $scope.current_algo._id;

        console.log('room2b: ', $scope.current_algo._id);

        socket.emit("got_new_user", {name: $scope.current_user[0].name, room: room});
    });

    // $scope.joinRoom = function(){
    //
    //     console.log('room should be: ', room);
    //     socket.emit("got_new_user", {name: $scope.current_user[0].name});
    // }

    // $scope.joinRoom();
    // New user entered algo


    // User sends new message
    $scope.sendMessage = function(user_name){
        // socket.emit("new_message", {name: user_name, message: $scope.message.text});

        socket.emit('new_message',  {name: user_name, message: $scope.message.text, room: room});
    };

    socket.on("message_added", function(){
        $scope.message = {};
    });

    socket.on("new_message_added", function(data){
        $scope.messages.push(data);

        // add messages to algo db
        //  algorithmFactory.addMessages($scope.algo_id, $scope.messages, function(data){
        //     console.log('messages added to db', data);
        // });
    });
});
