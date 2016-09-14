
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

    $(".pre_tag").hide();

    $('#submit_user_solution').click(function(){
        $('#solution_form').hide();
        $(".pre_tag").show();
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
        if(data.room == room){
            $scope.messages.push(data);
            $scope.num = $scope.messages.length;
        }
        $scope.message = {};
    });
});
