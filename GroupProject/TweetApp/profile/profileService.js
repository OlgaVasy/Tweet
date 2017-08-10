angular.module('tweetModule')

.service('profileService', ['$http',function(http) {
  this.followedOrNah = 'Follow'

  this.getProfile = (username) => {
    this.followName = username
    this.username = sessionStorage.getItem('username')
    http.get('http://localhost:8080/user/users/@'+this.followName).then(
      (successResponse)=> {
        this.userProfile = successResponse.data
      },
      (failureResponse) => {
      (this.userProfile=failureResponse.data)
      }

   );
  }
  this.follow = () => {
    this.test1 = sessionStorage.getItem('password').toString()
    this.test2 = sessionStorage.getItem('username').toString()
    let credentials = {credentials: {password: this.test1,
                                      username:this.test2 }}

    if ($('button').hasClass('active')) {
      return http({
        method: 'POST',
        url: 'http://localhost:8080/user/users/@'+this.followName+'/follow',
        data: credentials})
      .then((failure) => {
        console.log(failure.data)
      },
      (success) => {
        console.log('Following ' + this.followName)
        $('button').click(function(){
              $(this).text('Follow')
                })
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
          $('button').click(function(){
                $(this).text('Unfollow')
                  })
        }
        )
    }
  }

  this.checkFollowing = () => {
     http.get('http://localhost:8080/user/users/@'+ this.username+'/following')
     .then(
       (failure)=> {
         console.log('failure')
       },
       (success) => {
         success.data.forEach((item) => {
           if(item.username === this.followName) {
             this.followedOrNah = 'Unfollow'
           }
         })
       }
    );

 }

 this.getLikes = () => {
  http.get('http://localhost:8080/tweet/tweets')
  .then(
    (success) => {
      success.data.forEach(tweet =>
        http.get('http://localhost:8080/tweet/tweets/'+tweet.id+'/likes')
        .then(
          (success) => {
            success.data.filter((item) => {
              if (item.username === this.followName){
                  console.log(tweet.id)
              }
            })
          },
          (failure) => {

          }
        )
      )
    },
    (failure) => {
      console.log(failure.data)
    }
  )
}


  this.getUserAllTweets = (username) => {
    http.get('http://localhost:8080/user/users/@'+username+'/tweets').then(
      (successResponse)=> {
        this.userTweets = successResponse.data
      },
      (failureResponse) => {
      (this.userTweets=failureResponse.data)
      }
   );
  }
  this.getFollowing = (username) => {
    http.get('http://localhost:8080/user/users/@'+username+'/following').then(
      (successResponse)=> {
        this.userFollowing = successResponse.data
      },
      (failureResponse) => {
      (this.userFollowing=failureResponse.data)
      }
   );
  }
  this.getFollowers = (username) => {
    http.get('http://localhost:8080/user/users/@'+username+'/followers').then(
      (successResponse)=> {
        this.userFollowers = successResponse.data
      },
      (failureResponse) => {
      (this.userFollowers=failureResponse.data)
      }
   );
  }
  }])
