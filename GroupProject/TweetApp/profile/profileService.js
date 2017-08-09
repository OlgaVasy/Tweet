angular.module('tweetModule')

.service('profileService', ['$http',function(http) {

  this.getProfile = (username) => {
    username = 'lion'
    http.get('http://localhost:8080/user/users/@'+username).then(
      (successResponse)=> {
        this.userProfile = successResponse.data
      },
      (failureResponse) => {
      (this.userProfile=failureResponse.data)
      }

   );
  }
  }])
