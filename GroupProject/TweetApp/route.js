angular.module('tweetModule')
.config(function($stateProvider, $urlRouterProvider) {

<<<<<<< HEAD
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
=======
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
>>>>>>> ae6ad4e28522149d9445941bb7e7a821773a50b4
