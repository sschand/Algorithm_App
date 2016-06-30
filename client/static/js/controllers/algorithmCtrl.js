
algorithmApp.controller('algorithmCtrl', function ($scope, algorithmFactory, userFactory, $routeParams, socket) {
    $scope.users = [];
    $scope.current_algo;
    $scope.num;
    $scope.messages = [];
    var room;

    $scope.getNumber = function(num) {
        return new Array(num);
    }

    // $scope.users = [];
    $scope.current_user = userFactory.getUser();
    // $scope.users.push($scope.current_user);

    $scope.algo_id = $routeParams.id;

    // Get current algorithm
    algorithmFactory.getCurrentAlgo($scope.algo_id, function(data){
        $scope.current_algo = data;
        room = $scope.current_algo._id;

    });

    // New user entered algo
    socket.emit("got_new_user", {name: $scope.current_user[0].name});


    // User sends new message
    $scope.sendMessage = function(user_name){
        // socket.emit("new_message", {name: user_name, message: $scope.message.text});

        socket.emit('new_message',  {name: user_name, message: $scope.message.text, room: room});
    };

    socket.on("message_added", function(){
        console.log('current messages: ', $scope.messages);
        $scope.message = {};
    });

    socket.on("new_message_added", function(data){
            console.log('senTT message', data);
        if(data.room == room){
            console.log(data);
            $scope.messages.push(data);
            console.log($scope.messages);
            $scope.num = $scope.messages.length;
        }
        $scope.message = {};


        // add messages to algo db
        //  algorithmFactory.addMessages($scope.algo_id, $scope.messages, function(data){
        //     console.log('messages added to db', data);
        // });
    });
});
