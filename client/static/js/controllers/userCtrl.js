
algorithmApp.controller('userCtrl', function ($scope, userFactory, $location) {

    $scope.current_user;
    $scope.password_error = '';
    $scope.login_error = '';

    // Register User
    $scope.registerUser = function(){
        if($scope.newUser.password !== $scope.newUser.c_password){
            $scope.password_error = "Passwords don't match.";
        }else{
            $scope.password_error = '';

            userFactory.create($scope.newUser, function(data){
                // $scope.current_user = data;
                $('#register').closeModal();
                alert('You have been registered, please log in to continue');
            });
        }
    }

    // Login user
    $scope.loginUser = function(){
        userFactory.loginUser($scope.login, function(data){
            if(!data.login_error){
                $scope.login_error = '';
                $scope.current_user = data.user;
                $('#login').closeModal();
                $location.url('/dashboard');
            }else{
                $scope.login_error = data.login_error;
            }

        });
    }
});
