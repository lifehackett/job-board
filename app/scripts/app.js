'use strict';

var app = angular.module('jobBoardApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngGrid',
  'jobBoardApp.applicant',
  'jobBoardApp.company',
  'firebase',
  'google-maps',
  'angular-geo',
  'angular-geo-providers.google',
  'angularGeoFire'
  ])
  .constant('FIREBASE_URL', 'https://jobboard.firebaseio.com/')
  .config(function($routeProvider, angularGeoProvider, angularGeoGoogleProvider) {
    $routeProvider
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'AuthCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'AuthCtrl'
      })
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl'
      })
      .when('/testdata', {
        templateUrl: 'views/test-data.html',
        controller: 'TestDataCtrl'
      })
      .when('/', {
        redirectTo:'/applicant/profile'
      })
      .otherwise({
        redirectTo: '/'
      });
      angularGeoProvider.addProvider(angularGeoGoogleProvider.name);
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

