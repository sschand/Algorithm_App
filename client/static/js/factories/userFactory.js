algorithmApp.factory('userFactory', function($http){
    var factory = {};
    var current_user = {};

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
                current_user = data;
            }
            callback(data);
        })
    }

    // Get current_user from factory for all pages
    factory.getUser = function(callback){
        callback(current_user);
    }

    return factory;
});
