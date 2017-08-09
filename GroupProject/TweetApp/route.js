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

let profileState = {
      name: 'profile',
      url: '/@{username}/profile',
      component: 'profileComponent',
      resolve: {
        selectedUser: function(profileService, $transition$) {
        return profileService.getProfile($transition$.params())
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
$stateProvider.state(profileState)
$stateProvider.state(registrationState)
$stateProvider.state(feedState)
$stateProvider.state(loginState)

 $urlRouterProvider.otherwise('/')

 })
