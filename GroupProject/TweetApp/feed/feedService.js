angular.module('tweetModule')
.service('feedService', ['$http',function(http) {
  this.getFeed = (username) =>
  http.get('http://localhost:8181/user/users/@'+username+'/feed')
    .then((success) => {
      success
      console.log(success.data)
      return success.data
    },
    (failure) => {
      console.log('Could not load feed.')
    }
    )
  }])
