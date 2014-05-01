'use strict';

applicant.controller('ProfileCtrl', function ($scope, Applicant, User, $location) {

	$scope.submitted = false;
 	User.getCurrent().then(function(currentUser){
 		$scope.applicant = Applicant.find(currentUser.$id);
 	});

	$scope.saveProfile = function(applicant, form){
		if(form.$invalid){return;}
		Applicant.update(applicant).then(function(ref){
			$location.path('/applicant/schedule')
		});
	};

	
});