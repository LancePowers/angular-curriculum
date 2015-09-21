var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/home.html',
            controller: 'HomeController'
        })
        .when('/projects', {
            templateUrl: 'partials/projects.html',
            controller: 'ProjectsController'
        }).when('/bio', {
            templateUrl: 'partials/bio.html',
            controller: 'BioController'
        }).when('/resume', {
            templateUrl: 'partials/resume.html',
            controller: 'ResumeController'
        }).when('/calculator/:operator/:num1/:num2', {
            templateUrl: 'partials/calculator.html',
            controller: 'CalculatorController'
        })
        .otherwise({
            templateUrl: 'partials/home.html',
            controller: 'HomeController'
        })
})