app.controller('MyController', function ($scope) {
    $scope.greeting = 'hello world'
});

app.controller('HomeController', function($scope){
    $scope.message = 'Welcome home!';
});

app.controller('DogController', function($scope){
    $scope.message = 'I\'m a dog';
})