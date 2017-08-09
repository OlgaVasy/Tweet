angular.module('tweetModule')

.service('followingService', ['$http',function(http) {

  this.getFollowing = (username) => {
    username = 'lion'
    http.get('http://localhost:8080/user/users/@'+username+'/following').then(
      (successResponse)=> {
        this.userFollowing = successResponse.data
      },
      (failureResponse) => {
      (this.userFollowing=failureResponse.data)
      }

   );
  }
  }])
