angular.module('tweetModule')

.service('profileSubpageService', ['$http',function(http) {

  this.getUserAllTweets = (username) => {
    http.get('http://localhost:8080/user/users/@'+username+'/tweets').then(
      (successResponse)=> {
        this.userTweets = successResponse.data
      },
      (failureResponse) => {
      (this.userTweets=failureResponse.data)
      }
   );
  }
  this.getFollowing = (username) => {
    http.get('http://localhost:8080/user/users/@'+username+'/following').then(
      (successResponse)=> {
        this.userFollowing = successResponse.data
      },
      (failureResponse) => {
      (this.userFollowing=failureResponse.data)
      }
   );
  }
  this.getFollowers = (username) => {
    http.get('http://localhost:8080/user/users/@'+username+'/followers').then(
      (successResponse)=> {
        this.userFollowers = successResponse.data
      },
      (failureResponse) => {
      (this.userFollowers=failureResponse.data)
      }
   );
  }
  }])
