angular.module('tweetModule')
.component('tweetElement', {
  templateUrl: 'TweetApp/tweet/tweetElement.template.html',
  bindings: {
    'tweet': '='
  }
})
