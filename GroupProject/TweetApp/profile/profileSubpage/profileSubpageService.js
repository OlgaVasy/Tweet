angular.module('tweetModule')

.service('profileSubpageService', ['$http',function(http) {

  this.getUserAllTweets = (username) => {
    username = sessionStorage.getItem('username')
    http.get('http://localhost:8080/user/users/@'+username+'/tweets').then(
      (successResponse)=> {
        this.userTweets = successResponse.data
      },
      (failureResponse) => {
      (this.userTweets=failureResponse.data)
      }

   );
  }
  }])
