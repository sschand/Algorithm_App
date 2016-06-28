algorithmApp.factory('userFactory', function($http, $localStorage, $sessionStorage){
    var factory = {};
    var current_user = {};
    $sessionStorage.current_user = {};

    // Create User
    factory.create = function(userInfo, callback){
        $http.post('/newUser', userInfo).success(function(data){
            current_user = userInfo;
            callback(current_user);
        });

    };

    // Login user
    factory.loginUser = function(loginInfo, callback){
        $http.post('/getUser', loginInfo).success(function(data){
            if(!data.login_error){
                $sessionStorage.current_user = data;
            }
            callback(data);
        })
    }

    factory.getUser = function(){
      return $sessionStorage.current_user;
    }


    return factory;
});
