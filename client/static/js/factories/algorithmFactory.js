algorithmApp.factory('algorithmFactory', function($http){
  var arrays =[];
  var strings =[];
  var slls =[];
  var bsts =[];

  var factory = {};

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
    $http.get('/getBst').success(function(result){
      bstms = result;
      callback(bsts);
    });
  }




  return factory;
})
