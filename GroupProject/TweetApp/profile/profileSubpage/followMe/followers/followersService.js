angular.module('tweetModule')

.service('followersService', ['$http',function(http) {

  this.getFollowers = (username) => {
    username = sessionStorage.getItem('username')
    http.get('http://localhost:8080/user/users/@'+username+'/followers').then(
      (successResponse)=> {
        this.userFollowers = successResponse.data
        console.log(this.userFollowers)
      },
      (failureResponse) => {
      (this.userFollowers=failureResponse.data)
      console.log(this.userFollowers)
      }

   );
  }
  }])
