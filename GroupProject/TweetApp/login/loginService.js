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
<<<<<<< HEAD



       $state.go('profile',{username: creds.username})}

     },






=======
         sessionStorage.setItem('password', creds.password)
         $state.go('profile', {username: creds.username})
       }
         $state.go('profileWithTweets', {username: creds.username})
     },
>>>>>>> 055597a9c2c3208cb94666e0006b81bbba228b3f
     (failureResponse) => {
       console.log('fail')
     }
   )
 }}
}])
