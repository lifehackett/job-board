'use strict';

applicant.controller('ProfileCtrl', function ($scope, Applicant) {

	
	$scope.applicants = Applicant.all;
	$scope.applicant = {
		first: 'bob',
		last: 'marley',
		email: 'bob@mail.com',
		phone: '1234567890'
	};


	$scope.saveProfile = function(applicant){
		Applicant.create(applicant).then(function(){
			// $scope.applicant = {
			// 	first: '',
			// 	last: '',
			// 	email: '',
			// 	phone: ''
			// };
		});
	};

	
});