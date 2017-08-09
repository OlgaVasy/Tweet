angular.module('tweetModule')

.component('followingComponent', {
  templateUrl: 'TweetApp/profile/following/followingTemplate.html',
  controller: 'followingController',
  controllerAs: 'folCtrl',
  bindings: {
    'following': '='

  }



})
