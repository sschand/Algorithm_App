algorithmApp.config(function ($routeProvider) {
  $routeProvider
    .when('/',{
        templateUrl: 'partials/home.html'
    })
    .when('/dashboard',{
        templateUrl: 'partials/dashboard.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
