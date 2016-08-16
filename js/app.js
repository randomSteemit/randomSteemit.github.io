var app = angular.module('app', ['ngMaterial', 'ui.bootstrap', 'ui.navbar']);


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
        //window.open($scope.randomArticle, '_blank');
        OpenInNewTab($scope.randomArticle);
    }, 8000)

    function OpenInNewTab(url) {
        var win = window.open(url, '_blank');
        win.focus();
    }


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
