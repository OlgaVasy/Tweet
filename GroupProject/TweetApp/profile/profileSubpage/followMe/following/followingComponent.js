angular.module('tweetModule')

.component('followingComponent', {
  templateUrl: 'TweetApp/profile/profileSubpage/followMe/following/followingTemplate.html',
  controller: 'followingController',
  controllerAs: 'folCtrl',
  bindings: {
    'following': '='

  }



})
