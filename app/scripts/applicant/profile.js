'use strict';

applicant.controller('ProfileCtrl', function ($scope, Applicant, User, $location) {


 	User.getCurrent().then(function(currentUser){
 		$scope.applicant = Applicant.find(currentUser.$id);
 	});

	$scope.saveProfile = function(applicant){
		Applicant.update(applicant).then(function(ref){
			$location.path('/applicant/schedule')
		});
	};

	
});