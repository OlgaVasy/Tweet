angular.module('tweetModule')

.component('registrationComponent', {

  templateUrl: 'TweetApp/registration/registration.template.html',
  
  bindings: {
    tweet_user: "="
  }

})
