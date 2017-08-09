angular.module('tweetModule')

.component('followingComponent', {
  templateUrl: 'TweetApp/profile/profileSubpage/following/followingTemplate.html',
  controller: 'followingController',
  controllerAs: 'folCtrl',
  bindings: {
    'following': '='

  }



})
