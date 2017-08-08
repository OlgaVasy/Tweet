angular.module('tweetModule')

.service('startPageService', ['$http',function(http) {

this.getTweet = (id) =>
   http.get('http://localhost:8080/tweet/tweets/'+id)
   .then((resp) => { return resp.data })

 this.getTweets = () => {
   http.get('http://localhost:8080/tweet/tweets').then(
     (successResponse)=> {
       this.tweets = successResponse.data
        console.log('Connected!!')      
     },
     (failureResponse) => {
     console.log('Failed to upload data!')
     }

   );
}
}])
