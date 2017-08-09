angular.module('tweetModule')
.config(function($stateProvider, $urlRouterProvider) {

let startPageState = {
   name: 'start',
   url: '/',
   component: 'startPageComponent',
   resolve: {
       function(startPageService, $transition$) {
         return startPageService.getTweets($transition$.params());
       }
 }}

let profileState ={
     name: 'profile',
      url: '/@{username}/pro',
      component: 'profileComponent',
      resolve: {
        selectedUser: function(profileService, $transition$) {
       return profileService.getProfile($transition$.params().username)
      }

    },}
  let profileSubpageState ={
    name: 'profileWithTweets',
    url: 'file',
    parent: 'profile',
    component: 'profileSubpageComponent',
    resolve: {
      selectedUser: function(profileSubpageService, $transition$) {
      return profileSubpageService.getUserAllTweets($transition$.params().username)
    }
  },}
  let userFollowingState ={
    name: 'profileWithTweetsFollowing',
    url: '/',
    parent: 'profileWithTweets',
    component: 'followingComponent',
    resolve: {
      selectedUser: function(followingService, $transition$) {
      return followingService.getFollowing($transition$.params().username)
    }
  },
}

let registrationState = {
  name: 'registration',
  url: '/registration',
  component: 'registrationComponent'
}
let feedState = {
  name: 'userFeed',
  url: '/@{username}/feed',
  component: 'feedComponent',
      resolve: {
        selectedUser: function(feedService, $transition$) {
        return feedService.getFeed($transition$.params().username)
      }
    }
}

let loginState = {
  name: 'login',
  url: '/login',
  component: 'loginComponent'
}

$stateProvider.state(startPageState)
              .state(profileState)
              .state(profileSubpageState)
              .state(registrationState)
              .state(feedState)
              .state(loginState)
              .state(userFollowingState)


 $urlRouterProvider.otherwise('/')

 })
