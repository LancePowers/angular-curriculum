var app = angular.module('redditClone', ['angularMoment']);
app.controller('RedditController', function ($scope) {
    $scope.data = { 
        availableOptions: [
            {id:'votes', value:'-votes'},
            {id:'date', value:'-date'},
            {id:'title', value:'-title'}
    ],
        selectedOption:{id:'votes', value:'-votes'}
    }
        
    $scope.posts = [
        {
            title: "One title",
            author: "some guy",
            description: "some fancy words about something",
            image: "https://upload.wikimedia.org/wikipedia/commons/6/63/Nice-seafront.jpg",
            comments: [],
            date: Date.now(),
            votes: 0
         },
        {
            title: "Two titles",
            author: "a different guy",
            description: "some other fancy words about something",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Nice-night-view-with-blurred-cars_1200x900.jpg",
            comments: [],
            date: Date.now(),
            votes: 0
         },
        {
            title: "Three titles, hah, hah, hah, hah",
            author: "some other, other guy",
            description: "some fancy words about something",
            image: "https://upload.wikimedia.org/wikipedia/commons/0/02/Nice_view_(3201807289).jpg",
            comments: [],
            date: Date.now(),
            votes: 0
         }
       ];
    $scope.addPost = function () {
        $scope.posts.push({
            'title': $scope.title,
            'author': $scope.author,
            'description': $scope.description,
            'image': $scope.image,
            'comments': [],
            'date': Date.now()
        });
        $scope.title = '';
        $scope.author = '';
        $scope.description = '';
        $scope.image = '';

    };


    $scope.addComment = function () {
        this.post.comments.push({
            author: this.commentAuthor,
            comment: this.commentDescription
        });
        $scope.commentAuthor = '';
        $scope.commentDescription = '';
        console.log($scope.posts);
    };
});