angular.module('tweetModule')

.component('profileSubpageComponent', {
  templateUrl: 'TweetApp/profile/profileSubpage/profileSubpageTemplate.html',
  controller: 'profileSubpageController',
  controllerAs: 'subCtrl',
  bindings: {
    'tweet': '=',
    'following': '=',
    'follower': '='
   }
})
