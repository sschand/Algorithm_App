
algorithmApp.controller('algorithmCtrl', function ($scope, algorithmFactory, userFactory, $routeParams) {
    $scope.users = [];
    $scope.current_algo;

    // $scope.users = [];
    $scope.current_user = userFactory.getUser();
    // $scope.users.push($scope.current_user);

    $scope.algo_id = $routeParams.id;

    // Get current algorithm
    algorithmFactory.getCurrentAlgo($scope.algo_id, function(data){
        $scope.current_algo = data;
        console.log('current algi is:',$scope.current_algo);
    });


            var socket = io.connect();

            var uID;
            // var scope = angular.element("#algorithm_div").scope();
            // var name = ;
            // console.log('user name for chat is: ',scope.current_user);
            // if(!prompt){
            //     console.log('here');
                // User first enters room:
                // name = prompt('What is your name?');
                socket.emit("got_new_user", {name: name});
            // }else{
            //     console.log('not');
            // }



            //Listeners:
            // new user
            socket.on("new_user", function(data){

                var id = JSON.stringify(data.uId);
                var id2 = id.slice(3, -1);

                $(".users").append("<p class="+id2+">"+data.name+"</p>");
            })
            //
            // // existing users
            // socket.on("existing_users", function(data){
            //     for(var key in data.existing_users){
            //         if(data.uID != key){
            //
            //             var id = JSON.stringify(key);
            //             var id2 = id.slice(3,-1);
            //
            //             $(".users").append("<p class='"+id2+"'>"+ data.existing_users[key].name+ "</p>");
            //         }
            //     }
            // })


            $("#message_form").submit(function(e){
                e.preventDefault();
                var userID = $("#userID").val();
                var message = $("#message").val();

                socket.emit("new_message", {userID: userID, name: name, message: message});
            });

            socket.on("message_added", function(){
                $("#message").val('');
            });

            socket.on("new_message_added", function(data){
                $(".chat").html('');
                for (var message in data.messages){
                    $(".chat").append('<div class="row"><div class="two columns">'+ data.messages[message].name +': </div><div class="ten columns">'+data.messages[message].message+'</div></div>');
                }
            });

            // socket.on("disconnect_user", function(data){
            //
            //     var id = JSON.stringify(data.disconnect_id);
            //     var id2 = id.slice(3,-1);
            //
            //     $("."+id2+"").css('color', '#888').css('font-style', 'italic');
            // });


    ////////////////////////////////////////////////////////
    //        getting algorithms from DB                  //
    ////////////////////////////////////////////////////////
    // algorithmFactory.getArray(function(data){
    //   $scope.arrays = data;
    // });
    //
    // algorithmFactory.getString(function(data){
    //   $scope.strings = data;
    // });
    //
    // algorithmFactory.getSll(function(data){
    //   $scope.slls = data;
    // });
    //
    // algorithmFactory.getBst(function(data){
    //   $scope.bsts = data;
    // });



    ////////////////////////////////////////////////////////
    //          get current user                         //
    ////////////////////////////////////////////////////////



});
