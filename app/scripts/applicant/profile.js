'use strict';

applicant.controller('ProfileCtrl', function ($scope, Applicant, User, $location) {

 	User.getCurrent().then(function(currentUser){
 		$scope.applicant = Applicant.find(currentUser.username);

 	});
	//var user = User.getCurrent();
	//$scope.applicant = Applicant.find(user.username);

	
	// $scope.applicant.profile = {
	// 	first:"",
	// 	last:"",
	// 	phone:""
	// }
	// if(User.signedIn()){
	// 	var user = User.getCurrent()
	// 	$scope.applicant = Applicant.find(user.username);
	// 	$scope.applicant = applicant.profile;
	// }
	
	//$scope.applicants = Applicant.all;
	// $scope.applicant = {
	// 	first: 'bob',
	// 	last: 'marley',
	// 	email: 'bob@mail.com',
	// 	phone: '1234567890'
	// };


	$scope.saveProfile = function(applicant){
		Applicant.update(applicant).then(function(ref){
			$location.path('/applicant/schedule')
		});
	};

	
});