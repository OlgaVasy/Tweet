angular.module('tweetModule')

.controller('feedController', ['feedService',function(feedService) {

 this.feedService = feedService

}])
