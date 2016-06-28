algorithmApp.controller('algorithmCtrl', function ($scope, algorithmFactory, userFactory, $localStorage,
    $sessionStorage) {

 $scope.arrays = [];
 $scope.strings = [];
 $scope.slls = [];
 $scope.bsts = [];


 ////////////////////////////////////////////////////////
  //          get current user                         //
 ////////////////////////////////////////////////////////
 $scope.current_user = userFactory.getUser()


console.log($scope);
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



});
