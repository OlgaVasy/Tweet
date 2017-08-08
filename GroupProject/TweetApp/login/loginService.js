angular.module('tweetModule')
.service('loginService', ['$http',function(http) {
  
this.createChair = (login) => {
   return http({
     method: 'POST',
     url: 'http://localhost:8080/chair',
     data: chair
   }).then(
     (success) => {
       this.getChairs()
     },
     (failure) => {}
   )
 }
 }])
