angular.module('tweetModule')

.controller('profileController', ['profileService',function(manageProfile) {
  this.profileService = manageProfile

}])
