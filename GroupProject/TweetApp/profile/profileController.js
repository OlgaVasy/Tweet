angular.module('tweetModule')

<<<<<<< HEAD
.controller('profileController', ['profileService', 'tweetService', function(manageProfile, tweetService) {
  this.profileService = manageProfile
  this.tweetService = tweetService
=======
.controller('profileController', ['profileService','tweetService', function(manageProfile, manageTweet) {
  this.profileService = manageProfile
  this.tweetService = manageTweet

>>>>>>> 8e7e3b53329fbc45a3137b121184aaf96ad994d8
}])
