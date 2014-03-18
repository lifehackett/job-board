'use strict';

angular.module('jobBoardApp.applicant')
 .controller('ExperienceCtrl', function($scope){
 	$scope.job = {
 		company: "",
 		position: "",
 		monthsWorked: ""
 	}

// $scope.typeaheadOpts = {
// 	templateUrl:'bower_components/bootstrap/template/typeahead/typeahead-popup.html'
// }
 	$scope.jobs=[];

 	$scope.companies = ["Clydes", "Burger King", "McDonalds", "Wendys", "Panera", "Chipotle", "Cheesecake Factory"];

 	$scope.saveJob = function(job){
 		$scope.jobs.push(job);
		$scope.job = {
	 		company: "",
	 		positon: "",
	 		monthsWorked: ""
	 	};
 	};

 	$scope.editJob = function(index){
 		$scope.job = $scope.jobs[index];
		$scope.jobs.splice(index, 1);
 	};
 })