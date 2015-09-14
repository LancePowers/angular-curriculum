var app = angular.module('currencyExample', []);

app.controller('ExampleController', ['$scope', function($scope) {
    $scope.user_input = 'Say it';
    $scope.digits = 0;
    $scope.bill = 10;
    $scope.tip_amount = .15;
  }]);

app.controller('madLibController',['$scope', function($scope){
  $scope.name = null;
  $scope.adjective = null;
  $scope.pluralNoun1 = null;
  $scope.insect = null;
  $scope.pluralNoun2 = null;
  $scope.verb = null;
  $scope.clearAll = function(){
    $scope.name = "";
    $scope.adjective = "";
    $scope.pluralNoun1 = "";
    $scope.insect = "";
    $scope.pluralNoun2 = "";
    $scope.verb = "";
  }
}]);

app.controller('symbolsController',['$scope', function($scope){
  $scope.symbols = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
  $scope.duplicates = [1,1,2,5,6,9,9,9];
}])
