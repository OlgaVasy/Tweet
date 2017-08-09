angular.module('tweetModule')

.controller('userAllTweetsController', ['userAllTweetsService',function(userTweetsService) {
  this.userAllTweetsService = userTweetsService

}])
