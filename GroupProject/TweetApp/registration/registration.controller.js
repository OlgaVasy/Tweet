angular.module('tweetModule')

.controller('registrationController', ['registrationService', function(registrationService) {

  this.registrationService = registrationService;

  this.user = {
    credentials: {
      password: 'password',
      username: 'username'
    },
    profile: {
      email: 'Email'
    }
  }
  this.createUser = () => {
    this.registrationService.createUser(this.user).then(
      (success) => {
        console.log('user created');
      },
      (failure) => {}
    )
  }
}])
