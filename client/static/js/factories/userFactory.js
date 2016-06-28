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


    return factory;
});
