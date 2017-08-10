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
        $('button').click(function(){ //you can give id or class name here for $('button')
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
          $('button').click(function(){ //you can give id or class name here for $('button')
                $(this).text('Unfollow')
                  })
        }
        )
    }
  }

  }])
