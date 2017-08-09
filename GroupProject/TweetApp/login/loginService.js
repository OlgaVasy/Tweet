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


       $state.go('profile',{username: creds.username})}
=======
>>>>>>> c03cfa12c321cf9bb5071e0491c91a35239ffdf2

         $state.go('profile', {username: creds.username})
       }

<<<<<<< HEAD


=======
         $state.go('profileWithTweets', {username: creds.username})
       },
>>>>>>> c03cfa12c321cf9bb5071e0491c91a35239ffdf2
     (failureResponse) => {
       console.log('fail')
     }
   )
 }}
}])
