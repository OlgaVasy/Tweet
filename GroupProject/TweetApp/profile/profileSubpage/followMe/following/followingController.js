angular.module('tweetModule')

.controller('followingController', ['followingService',function(manageFollowing) {
  this.followingService = manageFollowing

}])
