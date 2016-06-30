algorithmApp.factory('algorithmFactory', function($http, $localStorage, $sessionStorage){
    var arrays =[];
    var strings =[];
    var slls =[];
    var bsts =[];

    var factory = {};
    var current_algo = [];

    factory.getArray = function(callback){
        $http.get('/array').success(function(result){
            arrays = result;
            callback(arrays);
        });
    }

    factory.getString = function(callback){
        $http.get('/string').success(function(result){
            strings = result;
            callback(strings);
        });
    }

    factory.getSll = function(callback){
        $http.get('/sll').success(function(result){
            slls = result;
            callback(slls);
        });
    }

    factory.getBst = function(callback){
        $http.get('/bst').success(function(result){
            bstms = result;
            callback(bsts);
        });
    }

    factory.getCurrentAlgo = function(algo_id, callback){
        var id = {id: algo_id};

        $http.post('/algo', id).success(function(result){
            current_algo = result;
            callback(result);
        });
    }


    factory.addUser = function(algo_id, user, callback){
        console.log('////////////user/////////');
        console.log(user);
        console.log();
        // for(var i of current_algo.user){
        //     // if( i == user._id ){
        //     //     console.log('exited');
        //     // }
        // }
        var info = {id: algo_id, user: user};

        $http.post('/algoUser', info).success(function(result){
            current_algo = result;
            console.log('//////////////////current user/////////');
            console.log(current_algo.user.algorithms);
            callback(result);
        });
    }

    factory.addMessages = function(algo_id, messages, callback){
        console.log('algo: ', algo_id, 'messages: ', messages);


        // $http.post('/algoMessages', )
        // callback()

    }

    factory.check = function(info){
        console.log('info is: ', info);
        $http.post('/check', info).success(function(output,callback){
            callback(output);
        })
    }

    return factory;
})
