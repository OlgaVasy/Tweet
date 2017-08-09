angular.module('tweetModule')
.service('loginService', ['$http','$state', function(http, $state) {


  this.getLogin = (creds) => {
    console.log(creds.username)
    if (creds.username !== '' || creds.password !== '') {
    return http({
      method: 'GET',
      params: {password: creds.password},
      url: 'http://localhost:8080/user/validate/credentials/exists/@{' + creds.username + '}'
    }).then(
     (successResponse) => {
       console.log(successResponse.data)
       if (successResponse.data) {
         sessionStorage.setItem('username', creds.username)
         sessionStorage.setItem('password', creds.password)
<<<<<<< HEAD

       $state.go('profileWithTweets',{username: creds.username})}
=======
         $state.go('profileWithTweets', {username: creds.username})
       }
>>>>>>> 7f91e60bd07d2fe852c1785d763661dbeee9af8b
     },
     (failureResponse) => {
       console.log('fail')
     }
   )
 }}
}])
