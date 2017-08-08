angular.module('tweetModule')

.controller('registrationController', ['registrationService', function(registrationService) {

  this.registrationService = registrationService;

  this.tweet_user = {
    credentials: {
      password: 'password',
      username: 'username'
    },
    profile: {
      email: 'email@email.com'
    }
  }
  this.createUser = () => {
    this.registrationService.createUser(this.tweet_user).then(
      (success) => {
        console.log('user created');
      },
      (failure) => {}
    )
  }
}])
