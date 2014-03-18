'use strict';

angular.module('jobBoardApp.applicant')
	.directive('experienceRecord', function() {
		return {
			restrict:'E',
			transclude:true,
			scope: {
				company:'@',
				position:'@',
				monthsWorked:'@',
				edit:'&',
				index:'@'
			},
			template:'<span><strong>{{position}}</strong></span>' +
				'<span> @<strong>{{company}}</strong></span>' +
				'<span> For <strong>{{monthsWorked}}</strong> months</span>' + 
				'<span ng-transclude></span>'
		}
	})