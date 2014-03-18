'use strict';

angular.module('jobBoardApp.applicant')
.controller('ProfileCtrl', function ($scope, Applicant) {

	$scope.applicants = Applicant.get();
	$scope.applicant = {
		first: '',
		last: '',
		email: '',
		phone: ''
	};


	$scope.saveProfile = function(applicant){
		Applicant.save(applicant, function(ref) {
			$scope.applicants[ref.name] = applicant;
			$scope.applicant = {
				first: '',
				last: '',
				email: '',
				phone: ''
			};
			console.log("success");
		});
		// $scope.applicants.push(applicant);
		
		alert('foo');
		// if(valid){
		// 	$scope.users.push($scope.user);
		// 	$scope.user = {
		// 		first: '',
		// 		last: '',
		// 		email: '',
		// 		phone: ''
		// 	};
		// }
		// else{alert("Bad");}
		
	};

	
});