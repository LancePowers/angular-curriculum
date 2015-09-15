var app = angular.module('cameraDisplay', []);
app.controller('CameraController', ['$scope', function($scope) {
  $scope.cameras = [
    {
      title: "Nikon D3100 DSLR",
      image: "713u2gDQqML",
      rating: 3.4,
      price: 369.99,
      onSale: true
    },
    {
      title: "Canon EOS 70D",
      image: "81U00AkAUWL",
      rating: 2.0,
      price: 1099.0,
      onSale: false
    },
    {
      title: "Nikon D810A",
      image:"91wtXIfLl2L",
      rating: 4.2,
      price: 3796.95,
      onSale: true
    }
  ]
}])
