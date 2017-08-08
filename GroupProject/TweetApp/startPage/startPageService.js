angular.module('tweetModule')

.service('startPageService', ['$http',function(http) {

this.getTweet = (id) =>
   http.get('http://localhost:8080/tweet/' + id)
   .then((resp) => { return resp.data })

 this.getTweets = () => {
   http.get('http://localhost:8080/tweet').then(
     (successResponse)=> {
       this.tweets = successResponse.data;
     },
     (failureResponse) => {

     }

   );
}
}])
