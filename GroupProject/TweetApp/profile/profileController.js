angular.module('tweetModule')

.controller('profileController', ['profileService', 'tweetService', function(manageProfile, tweetService) {
  this.profileService = manageProfile
  this.tweetService = tweetService
}])
