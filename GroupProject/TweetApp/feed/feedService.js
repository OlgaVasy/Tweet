angular.module('tweetModule')
.service('feedService', ['$http',function(http) {
  this.getFeed = (username) =>
  http.get('http://localhost:8080/user/users/@'+username+'/feed')
    .then((success) => {
      console.log(success.data)
      return success.data
    },
    (failure) => {
      console.log(username)
      console.log('Could not load feed.')
    }
    )
  }])
