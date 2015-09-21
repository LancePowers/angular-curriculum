app.controller('NavController', function ($scope) {
    $scope.navActive = "Home";
    $scope.isActive = function (id) {
        if ($scope.navActive === id) {
            return true;
            console.log($scope.navActive, id)
        } else {
            return false;
        }
    };
});

app.controller('HomeController', function ($scope) {
    $scope.message = 'Welcome home!';
});

app.controller('ResumeController', function ($scope) {
    $scope.message = 'Resume - Coming Soon';
});

app.controller('ProjectsController', function ($scope) {
    $scope.projects = [{
        name: 'Manhattan',
        image: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Manhattan_Project_emblem.png',
        description: 'This shit\'s the bomb'
    }, {
        name: 'Human Genome',
        image: 'http://heroeswiki.com/images/thumb/6/66/Hgp_logo.jpg/250px-Hgp_logo.jpg',
        description: 'I put the oxy in Deoxyribonucleic Acid'
    }, {
        name: 'Volcano',
        image: 'http://rack.3.mshcdn.com/media/ZgkyMDE0LzA5LzE1LzIzL1ZvbGNhbm8yLjE5NzAxLmpwZwpwCXRodW1iCTk1MHg1MzQjCmUJanBn/ca8a29b8/efd/Volcano-2.jpg',
        description: 'Not actually a real volcano'
    }]
});

app.controller('BioController', function ($scope) {
    $scope.name = 'Lance Powers';
    $scope.description = 'Baddest mother-fucker ever. (mic drop)';
});

app.controller('CalculatorController', function ($scope, $route, $routeParams) {
    $scope.num1 = parseInt($routeParams.num1);
    $scope.num2 = parseInt($routeParams.num2);
    $scope.answer = 0;
    if ($routeParams.operator === 'add') {
        $scope.answer = $scope.num1 + $scope.num2
    } else if ($routeParams.operator === 'divide') {
        $scope.answer = $scope.num1 / $scope.num2
    }
})