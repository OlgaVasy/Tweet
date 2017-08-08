angular.module('tweetModule')
.config(function($stateProvider, $urlRouterProvider) {

let startPageState = {
   name: 'start',
   url: '/',
   component: 'startPageComponent'
 }

let profileState = {
      name: 'profile',
      url: '/profile',
      component: 'profileComponent'

    }
let registrationState = {
  name: 'registration',
  url: '/registration',
  component: 'registrationComponent'
}
let feedState = {
  name: 'userFeed',
  url: '/feed',
  component: 'feedComponent'
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
