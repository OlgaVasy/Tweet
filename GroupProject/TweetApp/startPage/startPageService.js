angular.module('tweetModule')

.service('startPageService', ['$http',function(http) {

this.getTweet = (id) =>
   http.get('http://localhost:8080/tweet/tweets/' + 1)
   .then((resp) => { return resp.data })

//  this.getTweets = () => {
//    http.get('http://localhost:8080/tweet/tweets').then(
//      (successResponse)=> {
//        this.tweets = successResponse.data;
//      },
//      (failureResponse) => {
//
//      }
//
//    );
// }
}])
