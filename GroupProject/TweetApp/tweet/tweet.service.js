angular.module('tweetModule')
.service('tweetService', ['$http', function(http) {

  this.getTweet = (id) =>
    http.get('http://localhost:8080/tweet/tweets/' + id)
    .then((resp) => { return resp.data })

  this.getTweets = () => {
    http.get('http://localhost:8080/tweet/tweets').then(
      (successResponse) => {
        this.tweets = successResponse.data
      },
      (failureResponse) => {
        console.log('Abandon ship!')
      }
    )
  }

  this.getFeed = (username) => {
    this.user = username
    return http.get('http://localhost:8080/user/users/@' + username + '/feed').then(
    (failure) => {
      console.log('Could not load feed')
    },
    (success) => {
      this.feed = success.data
    }
    )
  }

  this.postTweet = (tweet) => {
    tweet.credentials.username = sessionStorage.getItem('username')
    tweet.credentials.username = sessionStorage.getItem('password')
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
