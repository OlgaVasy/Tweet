angular.module('tweetModule')

.service('profileService', ['$http', '$state', function (http, $state) {
  this.followedOrNah = 'Follow'
  this.likedTweetsButton = 'Liked Tweets'

  this.getProfile = (username) => {
    this.followName = username
    this.username = sessionStorage.getItem('username')
    http.get('http://localhost:8080/user/users/@' + this.followName).then(
      (successResponse) => {
        this.userProfile = successResponse.data
      },
      (failureResponse) => {
        (this.userProfile = failureResponse.data)
      }

   )
  }
  this.logOut = () => {
    sessionStorage.clear()
    $state.go('start')
  }
  this.goToMyProfile = () => {
    this.username = sessionStorage.getItem('username')
    $state.go('profile', {username: this.username})
  }

  this.follow = () => {
    this.test1 = sessionStorage.getItem('password').toString()
    this.test2 = sessionStorage.getItem('username').toString()
    let credentials = {credentials: {password: this.test1,
                                     username: this.test2 }}

    if (this.followedOrNah === 'Follow') {
      return http({
        method: 'POST',
        url: 'http://localhost:8080/user/users/@' + this.followName + '/follow',
        data: credentials})
      .then((failure) => {
        console.log(failure.data)
      },
      (success) => {
        console.log('Following ' + this.followName)
        this.followedOrNah = 'Unfollow'
        $state.go($state.current, {}, {reload: true})
      }
      )
    } else {
      return http({
        method: 'POST',
        url: 'http://localhost:8080/user/users/@' + this.followName + '/unfollow',
        data: credentials})
        .then((failure) => {
          console.log(failure.data)
        },
        (success) => {
          console.log('Unfollowed ' + this.followName)
          this.followedOrNah = 'Follow'
          $state.go($state.current, {}, {reload: true})
        }
        )
    }
  }

  this.checkFollowing = () => {
    this.likedTweetsButton = 'Liked Tweets'
    this.shouldShow = true
    http.get('http://localhost:8080/user/users/@' + this.username + '/following')
     .then(
       (failure) => {
         console.log('failure')
       },
       (success) => {
         success.data.forEach((item) => {
           if (item.username === this.followName) {
             this.followedOrNah = 'Unfollow'
           }
         })
       }
    )
  }

  this.getLikes = () => {
    return http.get('http://localhost:8080/user/users/@' + this.followName + '/likedTweets')
   .then(
     (failure) => {
     },
     (success) => {
       this.shouldShow = !this.shouldShow
       if (!this.shouldShow) {
         this.likedTweetsButton = 'User Tweets'
       } else {
         this.likedTweetsButton = 'Liked Tweets'
       }
       this.likedTweets = success.data
     }
   )
  }

  this.getUserAllTweets = (username) => {
    http.get('http://localhost:8080/user/users/@' + username + '/tweets').then(
      (successResponse) => {
        this.userTweets = successResponse.data
      },
      (failureResponse) => {
        this.userTweets = failureResponse.data
      }
   )
  }
  this.getMentions = (username) => {
      http.get('http://localhost:8080/users/@' + username + '/mentions').then(
        (successResponse) => {
          this.mentions = successResponse.data
        },
        (failureResponse) => {
          console.log('Abandon ship!')
        }
      )
  }
  this.getFollowing = (username) => {
    http.get('http://localhost:8080/user/users/@' + username + '/following').then(
      (successResponse) => {
        this.userFollowing = successResponse.data
      },
      (failureResponse) => {
        (this.userFollowing = failureResponse.data)
      }
   )
  }
  this.getFollowers = (username) => {
    http.get('http://localhost:8080/user/users/@' + username + '/followers').then(
      (successResponse) => {
        this.userFollowers = successResponse.data
      },
      (failureResponse) => {
        (this.userFollowers = failureResponse.data)
      }
   )
  }
}])
