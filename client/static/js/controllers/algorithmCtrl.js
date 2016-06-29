
algorithmApp.controller('algorithmCtrl', function ($scope, algorithmFactory, userFactory, $routeParams) {
    $scope.users = [];
    $scope.current_algo;
    $scope.current_user = userFactory.getUser();


    $scope.algo_id = $routeParams.id;

    // Get current algorithm
    algorithmFactory.getCurrentAlgo($scope.algo_id, function(data){
        $scope.current_algo = data;
        console.log('current algi is:',$scope.current_algo);
    });




});
