angular.module('tweetModule')
<<<<<<< HEAD

.controller('startPageController', ['startPageService','profileService', 'loginService', function(startService, profileService, loginService) {
  this.startPageService = startService
  this.profileService = profileService
  this.loginSevice = loginService
=======
.controller('startPageController', ['startPageService', 'profileService', 'tweetService', function(startService, profileService, tweetService) {
  this.startPageService = startService
  this.profileService = profileService
  this.tweetService = tweetService

  this.newTweet = {
    content: '',
    credentials: {
      password: '',
      username: ''
    }
  }
>>>>>>> 02a681539e8117e0e748a0cbba8214cf7411356b

}])
