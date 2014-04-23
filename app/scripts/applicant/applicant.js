'use strict';

//angular.module('jobBoardApp.employee',[]);

var applicant = angular.module('jobBoardApp.applicant', [ 
	'ngRoute', 
	'ngGrid', 
	'ui.mask',
	'ngResource',
	// 'ui.bootstrap.typeahead'
	])
	.config(function ($routeProvider) {
	    $routeProvider
	      .when('/applicant/profile', {
	        templateUrl: 'views/applicant/profile.html',
	        controller: 'ProfileCtrl'
	      })
	      .when('/applicant/schedule', {
	        templateUrl: 'views/applicant/schedule.html',
	        controller: 'ScheduleCtrl'
	      })
	      .when('/applicant/experience', {
	        templateUrl: 'views/applicant/experience.html',
	        controller: 'ExperienceCtrl'
	      });
	  });

