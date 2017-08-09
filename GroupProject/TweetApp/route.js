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
     name: 'basicProfile',
      url: '/@{username}/profile',
      component: 'profileComponent',
      resolve: {
        selectedUser: function(profileService, $transition$) {
       return profileService.getProfile($transition$.params().username)
      }

    },}
  let profileSubpageState ={
    name: 'profile',
    url: '/',
    parent: 'basicProfile',
    component: 'profileSubpageComponent',
    resolve: {
      selectedUser: function(profileSubpageService, $transition$) {
      return profileSubpageService.getUserAllTweets($transition$.params().username)
    },
      user: function(profileSubpageService, $transition$) {
      return profileSubpageService.getFollowing($transition$.params().username)
    },
      newUser: function(profileSubpageService, $transition$) {
      return profileSubpageService.getFollowers($transition$.params().username)
  }
  }}

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

 $urlRouterProvider.otherwise('/')

 })
