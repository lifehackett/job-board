'use strict';

angular.module('jobBoardApp')
	.factory('Applicant', function($resource) {
		return $resource('https://jobboard.firebaseio.com/applicants/:id.json')
	});