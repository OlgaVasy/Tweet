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
    $stateProvider.state(startPageState)
    $stateProvider.state(profileState)

    $urlRouterProvider.otherwise('/');

  });
