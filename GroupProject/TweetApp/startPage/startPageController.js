angular.module('tweetModule')

.controller('startPageController', ['startPageService','profileService', function(startService, profileService) {
  this.startPageService = startService
  this.profileService = profileService

}])
