var app = angular.module('section7App',[]);

app.controller('RandomNumber', function($scope){
    
});

app.controller('WordReverser', function($scope){
    $scope.word = '';
    $scope.reverseWord = function(){
        var newWord = '';
        for(i = $scope.word.length; i >= 0; i--){
            newWord += $scope.word.charAt(i);
        };
        $scope.word = newWord;
    };
})

app.controller('PingPongScore', function($scope){
    
    $scope.playing = true;
    $scope.p1 = {name: 'one', score: 0, serve: true};
    $scope.p2 = {name: 'two', score: 0, serve: false};
    $scope.point = function(player){
        console.log(this);
        player.score++;
        var totalScore = $scope.p1.score + $scope.p2.score;
        if(totalScore%2 === 0){
            $scope.switchServe($scope.p1.serve);
        }
    };
    $scope.switchServe = function(p1Current){
        $scope.p1.serve = $scope.p2.serve;
        $scope.p2.serve = p1Current;
    }
});

app.controller('ContactList', function($scope){
    
});
