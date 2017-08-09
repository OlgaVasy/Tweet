angular.module('tweetModule')

.service('profileService', ['$http',function(http) {

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
  this.count = 1
  this.follow = () => {
    this.test1 = sessionStorage.getItem('password').toString()
    this.test2 = sessionStorage.getItem('username').toString()
    let credentials = {credentials: {password: this.test1,
                                      username:this.test2 }}

    if (this.count%2 != 0) {
      return http({
        method: 'POST',
        url: 'http://localhost:8080/user/users/@'+this.followName+'/follow',
        data: credentials})
      .then((failure) => {
        console.log(failure.data)
      },
      (success) => {
        console.log('Following ' + this.followName)
        $('followUnfollow').html('Unfollow')
        this.count++
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
          this.count++
        }
        )
    }
  }

  }])
