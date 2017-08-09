angular.module('tweetModule')

.service('userAllTweetsService', ['$http',function(http) {

  this.getUserAllTweets = (username) => {
    username = 'lion'
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
