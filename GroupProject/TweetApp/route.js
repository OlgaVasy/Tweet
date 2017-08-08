angular.module('tweetModule')
.config(function($stateProvider, $urlRouterProvider) {

  let profileState = {
    name: 'profile',
    url: '/profile',
    component: 'profileComponent'
  }


$urlRouterProvider.otherwise('/')

});
