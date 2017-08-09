angular.module('tweetModule')
.service('feedService', ['$http',function(http) {
  this.getFeed = (username) => {
    this.user = sessionStorage.getItem('username')
  return http.get('http://localhost:8080/user/users/@'+username+'/feed').then(
    (failure) => {
      console.log('Could not load feed')
    },
    (success) => {
      this.feed = success.data
    }
    )
  }
  }])
