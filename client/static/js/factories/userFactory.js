algorithmApp.factory('userFactory', function($http){
    var factory = {};

    // Create User
    factory.create = function(userInfo, callback){
        $http.post('/newUser', userInfo).success(function(data){
            console.log('info to create', userInfo);
        });

    };


    return factory;
});
