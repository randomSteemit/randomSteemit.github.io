var app = angular.module('app', ['ngMaterial', 'ui.bootstrap', 'ui.navbar']);


app.controller('mainCtrl', ['$scope', '$timeout', function ($scope, $timeout) {

    steem.api.getAccountCount(function (err, result) {
        $scope.totalAccounts = result;
        $scope.$apply();
    });

    setTimeout(function () {
        // Call the page load data handler and set the data
        getRandomArticle(handleDataTimeout);
        getRandomSteemian(steemianOnClick);
    }, 800);

    // Set a timeout to countdown a scoped var
    // For the "Seconds Left" on index.html
    setTimeout(countDown, 1000);
    var timerSeconds = 8;

    function countDown() {
        timerSeconds--;
        if (timerSeconds > 0) {
            setTimeout(countDown, 1000)
        }
        $scope.timer = timerSeconds;
        $scope.$apply();
    }

    // Data handler for page load
    function handleDataTimeout(articleUrl) {
        $scope.randomArticleUrl = "http://steemit.com" + articleUrl;
        openPageDelayed();
    }

    // Receiving Data
    function getRandomArticle(callback) {
        var stateObject = [
            {
                id: 0,
                state: "/created"
            },
            {
                id: 1,
                state: "/hot"
            },
            {
                id: 2,
                state: "/trending"
            },
            {
                id: 3,
                state: "/trending30"
            },
            {
                id: 4,
                state: "/active"
            },
        ];

        var randomState = Math.floor(Math.random() * (4 - 0 + 1)) + 0;

        steem.api.getState(stateObject[randomState].state, function (err, results) {
            var randomArray = [];
            var randomNumber = Math.floor(Math.random() * 20) + 1;
            console.log("Random Number: " + randomNumber);
            console.log(results);

            for (var item in results.content) {
                randomArray.push(item)
            }

            var randomArticleTitle = randomArray[randomNumber];
            var articleUrl = results.content[randomArticleTitle].url;
            console.log("Article URL: " + articleUrl);
            callback(articleUrl);
        })
    }

    function getRandomSteemian(callback) {
        console.log("Total Steemians: " + $scope.totalAccounts);

        steem.api.lookupAccounts("", $scope.totalAccounts, function (err, result) {
            var randomNumber = Math.floor(Math.random() * ($scope.totalAccounts - 0 + 1)) + 0;
            var randomSteemian = result[randomNumber];
            console.log("Random Steemian: @" + randomSteemian);
            callback(randomSteemian);
        })
    }

    // Function to open the article after 8 seconds
    // This happens immediatly when you hit the website
    function openPageDelayed() {
        //Set the page countdown to open the article
        setTimeout(function () {
            var win = window.open($scope.randomArticleUrl, '_blank');
            win.focus();
        }, 8000)
    }

    // Data handler for button click
    function articleOnClick(articleUrl) {
        $scope.randomArticleUrl = "http://steemit.com" + articleUrl;
    }

    // Data handler for button click
    function steemianOnClick(steemian) {
        $scope.randomSteemianUrl = "https://steemit.com/@" + steemian;
    }

    // Function to generate a new random article with no delay
    // This happens when you click the "Here" button
    $scope.generateNewArticle = function () {
        ga('send', {
            hitType: 'event',
            eventCategory: 'New Article',
            eventAction: 'click',
            eventLabel: 'New Article'
        });
        getRandomArticle(articleOnClick);
    };

    $scope.generateNewSteemian = function () {
        ga('send', {
            hitType: 'event',
            eventCategory: 'New Article',
            eventAction: 'click',
            eventLabel: 'New Steemian'
        });
        getRandomSteemian(steemianOnClick);
    };

}]);
