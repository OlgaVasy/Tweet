angular.module('tweetModule')
.controller('loginController', ['loginService', function(creds) {

  this.loginService = creds;

  this.credentials = {
    username: '',
    password: '',
    newState: 'login'
  }

  this.createUser = () => {
    this.registrationService.createUser(this.user).then(
      (success) => {
        $state.go('login')
      },
      (failure) => {
        alert('invaild information entered')
      }
    )
    }
}])
