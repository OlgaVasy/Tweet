angular.module('tweetModule')

.controller('profileController', ['profileService','tweetService', function(manageProfile, manageTweet) {
  this.profileService = manageProfile
  this.tweetService = manageTweet

}])
