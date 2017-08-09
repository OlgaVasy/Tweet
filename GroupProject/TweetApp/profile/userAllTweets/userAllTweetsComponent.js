angular.module('tweetModule')

.component('userAllTweetsComponent', {
  templateUrl: 'TweetApp/profile/userAllTweets/userAllTweetsTemplate.html',
  controller: 'userAllTweetsController',
  controllerAs: 'userTweetsCtrl',
  bindings: {
    'tweet': '='

  }



})
