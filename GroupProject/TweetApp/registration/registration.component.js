angular.module('tweetModule')

.component('registrationComponent', {

  templateUrl: 'TweettApp/registration/registration.template.html',

  bindings: {

    'user': '>',

    'show': '='

  }

})
