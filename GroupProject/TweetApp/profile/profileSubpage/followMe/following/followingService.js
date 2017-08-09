angular.module('tweetModule')

.service('followingService', ['$http',function(http) {

  this.getFollowing = (username) => {
    username = sessionStorage.getItem('username')
    http.get('http://localhost:8080/user/users/@'+username+'/following').then(
      (successResponse)=> {
        this.userFollowing = successResponse.data
        console.log(this.userFollowing)
      },
      (failureResponse) => {
      (this.userFollowing=failureResponse.data)
      console.log(this.userFollowing)
      }

   );
  }
  }])
