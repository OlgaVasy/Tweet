angular.module('tweetModule')

.component('followersComponent', {
  templateUrl: 'TweetApp/profile/profileSubpage/followMe/followers/followersTemplate.html',
  controller: 'followersController',
  controllerAs: 'followerCtrl',
  bindings: {
    'followers': '='

  }



})
