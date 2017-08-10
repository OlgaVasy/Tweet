angular.module('tweetModule')

.controller('startPageController', ['startPageService','profileService', 'loginService', function(startService, profileService, loginService) {
  this.startPageService = startService
  this.profileService = profileService
  this.loginSevice = loginService

}])
