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
  this.replyTweet = (tweet, id) => {
    tweet.credentials.username = sessionStorage.getItem('username')
    tweet.credentials.password = sessionStorage.getItem('password')
    return http({
      method: 'POST',
      url: 'http://localhost:8080/tweet/tweets/' + id + '/reply',
      data: tweet
    }).then(
      (success) => {
        this.getTweets()
      },
      (failure) => {}
    )
  }
  this.repostTweet = (id) => {
    let credentials = {
      password: '',
      username: ''
    }
    credentials.username = sessionStorage.getItem('username')
    credentials.password = sessionStorage.getItem('password')
    return http({
      method: 'POST',
      url: 'http://localhost:8080/tweet/tweets/' + id + '/repost',
      data: credentials
    }).then(
      (success) => {
        this.getTweets()
      },
      (failure) => {}
    )
  }
  this.postTweet = (tweet) => {
    tweet.credentials.username = sessionStorage.getItem('username')
    tweet.credentials.password = sessionStorage.getItem('password')
    return http({
      method: 'POST',
      url: 'http://localhost:8080/tweet/tweets/',
      data: tweet
    }).then(
      (success) => {
        this.getTweets()
        $state.reload('profileWithTweets')
      },
      (failure) => {}
    )
  }
}])
