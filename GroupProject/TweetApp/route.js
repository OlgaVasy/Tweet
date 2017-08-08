angular.module('tweetModule')
.config(function($stateProvider, $urlRouterProvider) {

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

$stateProvider.state(feedState)

 $urlRouterProvider.otherwise('/')

 })
