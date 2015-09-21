var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
    console.log($routeProvider);
    $routeProvider
    .when('/',{
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
    })
    .when('/dogs',{
        templateUrl: 'partials/dogs.html',
        controller: 'DogsController'
    })
    .otherwise({
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
    })
})