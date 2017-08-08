angular.module('tweetModule')

.service('profileService', ['$http',function(http) {

  this.getProfile = (id) =>
    http.get('http://localhost:8080/profile/' + id)
    .then((resp) => { return resp.data })

}])
