angular.module('tweetModule')
.controller('loginController', ['loginService', function(creds) {

  this.loginService = creds;

  this.credentials = {
    username: 0,
    password: 0
  }
}])
