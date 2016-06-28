
algorithmApp.controller('algorithmCtrl', function ($scope, algorithmFactory, userFactory, $routeParams) {
    $scope.users = [];
    $scope.current_algo;
    $scope.users = [];
    $scope.current_user = userFactory.getUser();
    $scope.users.push(current_user);

    $scope.algo_id = $routeParams.id;

    // Get current algorithm
    algorithmFactory.getCurrentAlgo($scope.algo_id, function(data){
        $scope.current_algo = data;
    });


    ////////////////////////////////////////////////////////
    //        getting algorithms from DB                  //
    ////////////////////////////////////////////////////////
    // algorithmFactory.getArray(function(data){
    //   $scope.arrays = data;
    // });
    //
    // algorithmFactory.getString(function(data){
    //   $scope.strings = data;
    // });
    //
    // algorithmFactory.getSll(function(data){
    //   $scope.slls = data;
    // });
    //
    // algorithmFactory.getBst(function(data){
    //   $scope.bsts = data;
    // });



    ////////////////////////////////////////////////////////
    //          get current user                         //
    ////////////////////////////////////////////////////////


});
