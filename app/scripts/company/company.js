'use strict';

var company = angular.module('jobBoardApp.company', [
	'ngRoute'
	])
	.config(function($routeProvider){
		$routeProvider
		.when('/company/profile', {
			templateUrl: 'views/company/profile.html',
			controller: 'ProfileCtrl'
		});
	});

