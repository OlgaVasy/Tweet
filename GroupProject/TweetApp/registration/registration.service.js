angular.module('tweetModule')

.service('registrationService', ['$http', function(http) {

  this.createUser = (tweet_user) => {

    return http({

      method: 'POST',

      url: 'http://localhost:8080/users',

      data: tweet_user

    }).then(

      (success) => {

        console.log('User has been created');

      },

      (failure) => {}

    )

  }

}])
