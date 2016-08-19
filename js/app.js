var app = angular.module('app', ['angular-storage', 'ngMaterial', 'ui.bootstrap', 'ui.navbar']);

app.config(function(storeProvider) {
    storeProvider.setStore('sessionStorage');
})

app.controller('mainCtrl', function (store, $scope, $timeout) {

      var randomNumberObject = {};
      randomNumberObject.numbers = [];
      //randomNumberObject.numbers.push("1");
      //randomNumberObject.numbers.push("2");
    store.set('randomNumberObject', randomNumberObject);



    //sessionStorage.randomNumberObject = "2"; //randomNumberObject;


//    var randomNumber = Math.floor(Math.random() * 20) + 1;
//
//
//    randomNumberObject.numbers.forEach(function(number){
//        if(randomNumber == number)
//        {
//            console.log("Match: Random: " + randomNumber + "  Object: " + number);
//        }
//        else
//        {
//            console.log("Not A Match: Random: " + randomNumber + "  Object: " + number);
//        }
//    })




    //randomNuberArray.add("1");
    //sessionStorage.randomNumberArray = randomNumberArray;

    //console.log(randomNumberArray);

//    // Call the page load data handler and set the data
//    getData(handleDataTimeout);
//
//    // Set a timeout to countdown a scoped var
//    // For the "Seconds Left" on index.html
//    setTimeout(countDown, 1000);
//    var timerSeconds = 8;
//    function countDown() {
//        timerSeconds--;
//        if (timerSeconds > 0) {setTimeout(countDown, 1000)}
//        $scope.timer = timerSeconds;
//        $scope.$apply();
//    }
//
//    // Data handler for page load
//    function handleDataTimeout(articleUrl) {
//        $scope.randomArticleUrl = "http://steemit.com" + articleUrl;
//        openPageDelayed();
//    }
//
//    // Receiving Data
//    function getData(callback) {
//        steem.getState("/created", function (err, results) {
//            var randomArray = [];
//            var randomNumber = Math.floor(Math.random() * 20) + 1;
//            console.log("Random Number: " + randomNumber);
//
//            for (var item in results.content) {randomArray.push(item)}
//
//            var randomArticleTitle = randomArray[randomNumber];
//            var articleUrl = results.content[randomArticleTitle].url;
//            console.log("Article URL: " + articleUrl);
//            callback(articleUrl);
//        })
//    }
//
//    // function to actullay open the new article
//    function OpenInNewTab(url) {
//        var win = window.open(url, '_blank');
//        win.focus();
//    }
//
//    // Function to open the article after 8 seconds
//    // This happens immediatly when you hit the website
//    function openPageDelayed(){
//        //Set the page countdown to open the article
//        setTimeout(function () {
//            OpenInNewTab($scope.randomArticleUrl);
//        }, 8000)
//    }
//
//    // Function to open the page without a delay
//    // This happens when you click the "Here" button
//    function openPageNow(){
//        OpenInNewTab($scope.randomArticleUrl);
//    }
//
//    // your data handler for button click
//    function handleDataOnClick(articleUrl) {
//        $scope.randomArticleUrl = "http://steemit.com" + articleUrl;
//        //setTimeout(openPageNow(), 500); // fraction of a second delay
//    }
//
//    // Function to generate a new random article with no delay
//    // This happens when you click the "Here" button
//    $scope.generateNewArticle = function(){
//        getData(handleDataOnClick);
//    };

});










