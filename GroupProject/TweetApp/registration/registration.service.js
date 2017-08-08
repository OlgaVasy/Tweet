angular.module('tweetModule')

.service('registrationService', ['$http', function(http) {

  this.createUser = (user) => {

    return http({

      method: 'POST',

      url: 'http://localhost:8080/user/users',

      data: user

    }).then(

      (success) => {

        console.log('User has been created');

      },

      (failure) => {}

    )

  }

}])
