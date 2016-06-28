algorithmApp.controller('algorithmCtrl', function ($scope, algorithmFactory) {

 $scope.arrays = [];
 $scope.strings = [];
 $scope.slls = [];
 $scope.bsts = [];

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
