angular.module('tweetModule')

.controller('startPageController', [function(startService) {

  this.startPageService = startService

  this.newTweet = {
    posted: '',
    username: '',
    content: ''
  }




}])
