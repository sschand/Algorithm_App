
algorithmApp.controller('algorithmCtrl', function ($scope, algorithmFactory, userFactory, $routeParams, socket) {
    $scope.users = [];
    $scope.current_algo;
    $scope.num;
    $scope.messages = [];
    var room;

    $scope.getNumber = function(num) {
        return new Array(num);
    }

    $scope.check = function(algo_id,user_id){
        var info = {algo_id: algo_id, solution: $scope.newSolution.solution, user_id: user_id};

        algorithmFactory.check(info, function(data){
            $scope.userSolution = $scope.newSolution.solution;
            $scope.newSolution = {};
            $scope.actualSolution = $scope.current_algo.solution;
            console.log($scope.userSolution, $scope.actualSolution);
        })
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

    $('.btn.red').click(function(){
        $('#solution_form').hide();
        $('#show').show();
    })

    // New user entered algo
    socket.emit("got_new_user", {name: $scope.current_user[0].name});


    // User sends new message
    $scope.sendMessage = function(user_name){
        socket.emit('new_message',  {name: user_name, message: $scope.message.text, room: room});
    };

    socket.on("message_added", function(){
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
    });
});
