algorithmApp.controller('userCtrl', function ($scope, userFactory, $location) {
    $scope.current_user;
    $scope.password_error = '';

    // Register User
    $scope.registerUser = function(){
        // console.log('info', $scope.newUser);

        if($scope.newUser.password !== $scope.newUser.c_password){
            $scope.password_error = "Passwords don't match.";
        }else{
            $scope.password_error = '';

            userFactory.create($scope.newUser, function(data){
                
            });

            // reset user register form $scope.newUser = {};
        }
    }
});
