angular.module('tweetModule')

.controller('followersController', ['followersService',function(manageFollowers) {
  this.followersService = manageFollowers

}])
