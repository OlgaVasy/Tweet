angular.module('tweetModule')
.service('loginService', ['$http', function(http) {


  this.getLogin = (creds) => {
    console.log(creds.username)
    return http({
      method: 'GET',
      params: {password: creds.username},
      url: 'http://localhost:8080/user/validate/credentials/exists/@{' + creds.username + '}'
    }).then(
     (successResponse) => {
       console.log('success')
       //this.credentials.valid = successResponse
     },
     (failureResponse) => {
       console.log('fail')
     }
   )
  }
}])
