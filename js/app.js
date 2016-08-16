var app = angular.module('app', []);


app.controller('mainCtrl', ['$scope', '$timeout', function ($scope, $timeout) {

    steem.getState("/created", function (err, results) {
        var randomArray = [];
        var randomNumber = Math.floor(Math.random() * 20) + 1;

        for (var item in results.content) {
            randomArray.push(item);
        }
        var randomArticle = randomArray[randomNumber];
        var articleUrl = results.content[randomArticle].url;
        $scope.randomArticle = "http://steemit.com" + articleUrl;
        $scope.$apply();
    })

    setTimeout(function () {
        var win = window.open($scope.randomArticle, '_blank');
        if (win) {
            //Browser has allowed it to be opened
            win.focus();
        } else {
            //Browser has blocked it
            alert('Please allow popups for this website to redirect to steemit!');
        }
    }, 8000)


    var n = 8;
    setTimeout(countDown, 1000);

    function countDown() {
        n--;
        if (n > 0) {
            setTimeout(countDown, 1000);
        }
        $scope.timer = n;
        $scope.$apply();
    }


}]);
