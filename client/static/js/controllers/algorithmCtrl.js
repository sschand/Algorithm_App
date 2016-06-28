algorithmApp.controller('algorithmCtrl', function ($scope, algorithmFactory, userFactory) {

 $scope.arrays = [];
 $scope.strings = [];
 $scope.slls = [];
 $scope.bsts = [];
 $scope.current_user = [];




 ////////////////////////////////////////////////////////
 //        getting algorithms from DB                  //
 ////////////////////////////////////////////////////////
 algorithmFactory.getArray(function(data){
   $scope.arrays = data;
 });

 algorithmFactory.getString(function(data){
   $scope.strings = data;
 });

 algorithmFactory.getSll(function(data){
   $scope.slls = data;
 });

 algorithmFactory.getBst(function(data){
   $scope.bsts = data;
 });

 ////////////////////////////////////////////////////////
  //          get current user                         //
 ////////////////////////////////////////////////////////
 userFactory.getUser(function(data){
   $scope.current_user = data;
 })

});
