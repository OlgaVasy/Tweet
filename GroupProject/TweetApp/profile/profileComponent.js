angular.module('tweetModule')

.component('profileComponent', {
  templateUrl: 'TweetApp/profile/profileTemplate.html',
  bindings: {
    'profile': '='
  }

})
