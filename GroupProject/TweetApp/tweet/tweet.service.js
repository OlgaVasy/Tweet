angular.module('tweetModule')
.service('tweetService', ['$http',function(http) {

  this.getTweet = (id) =>
    http.get('http://localhost:8080/tweet/tweets/' + id)
    .then((resp) => { return resp.data })



  this.getTweets = () => {
    http.get('http://localhost:8080/tweet/tweets').then(
      (successResponse)=> {
        this.tweets = successResponse.data;
      },
      (failureResponse) => {
        console.log('Abandon ship!')
      }
    )
  }

  this.postTweet = (tweet) => {
    return http({
      method: 'POST',
      url: 'http://localhost:8080/tweet/tweets/',
      data: tweet
    }).then(
      (success) => {
        this.getTweets()
      },
      (failure) => {}
    )
  }
}])
