'use strict';

angular.module('jobBoardApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'jobBoardApp.applicant',
  'jobBoardApp.company'
  ]);
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

