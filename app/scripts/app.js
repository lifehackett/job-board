'use strict';

var app = angular.module('jobBoardApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'jobBoardApp.applicant',
  'jobBoardApp.company',
  'firebase'
  ])
  .constant('FIREBASE_URL', 'https://jobboard.firebaseio.com/')
  .config(function($routeProvider) {
    $routeProvider
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'AuthCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'AuthCtrl'
      })
      .when('/', {
        redirectTo:'/applicant/profile'
      })
      .otherwise({
        redirectTo: '/'
      })
  });
// .config(function ($routeProvider) {
//   $routeProvider
//   .when('/', {
//     templateUrl: 'views/main.html',
//     controller: 'MainCtrl'
//   })

//       // .otherwise({
//       //   redirectTo: '/'
//       // });
// });

