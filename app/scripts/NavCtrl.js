'use strict';

	app.controller('NavCtrl', function($scope, Auth, Job){
		$scope.logout = function() {
			Auth.logout();
		};

		$scope.jobs = Job;
	});