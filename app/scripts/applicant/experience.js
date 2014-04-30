'use strict';

angular.module('jobBoardApp.applicant')
 .controller('ExperienceCtrl', function($scope, Applicant, User, $location, $log){


 	User.getCurrent().then(function(currentUser){
 		$scope.applicant = Applicant.find(currentUser.$id);
 		init();
 	});

 	var init = function(){
 		if(!$scope.applicant.experience){
 			$scope.applicant.experience = [];
 		}
 	}

 	// $scope.applicant = {}

 	// var init = function() {
 	// 	$scope.applicant = Applicant.find(user.username);
	 //    if(!$scope.applicant.experience){
	 //    	$scope.applicant.experience = [
	 //    	]
	 //    }

 	// }

 	// $scope.test=""

 	// if(!user){
 	// 	$scope.$watch(user, function(){
 	// 		init();
 	// 	})
 	// }
 	// else{
 	// 	$scope.test="already here";
 	// 	init();
 	// 	//$log.log("already there");
 		
 	// }

 	

 	$scope.job = {
		company: "",
		position: "",
		monthsWorked: ""
	};
	$scope.submitted = false;

    

// $scope.typeaheadOpts = {
// 	templateUrl:'bower_components/bootstrap/template/typeahead/typeahead-popup.html'
// }
 	//$scope.jobs=[];

 	//$scope.companies = ["Clydes", "Burger King", "McDonalds", "Wendys", "Panera", "Chipotle", "Cheesecake Factory"];

 	$scope.saveJob = function(form, job){
 		if(form.$invalid) {return;}
 		$scope.applicant.experience.push(job);
		$scope.job = {
	 		company: "",
	 		position: "",
	 		monthsWorked: ""
	 	};
	 	Applicant.update($scope.applicant);
	 	$scope.submitted = false;

 	};

 	$scope.editJob = function(index){
 		$scope.job = $scope.applicant.experience[index];
		$scope.applicant.experience.splice(index, 1);
		Applicant.update(applicant);
 	};
 })