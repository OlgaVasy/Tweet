angular.module('tweetModule')

.controller('profileSubpageController', ['profileSubpageService',function(subpageService) {
  this.profileSubpageService = subpageService

}])
