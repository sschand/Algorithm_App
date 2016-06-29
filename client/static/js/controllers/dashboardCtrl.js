algorithmApp.controller('dashboardCtrl', function ($scope, algorithmFactory, userFactory) {

    $scope.arrays = [];
    $scope.strings = [];
    $scope.slls = [];
    $scope.bsts = [];
    $scope.current_user = userFactory.getUser();




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

    $scope.algoUser = function(algo_id, user){
        algorithmFactory.addUser(algo_id, user, function(data){
            console.log(data);
            $scope.current_user = data.user;
        });

    };
});
