'use strict';

app.controller('AuthCtrl', function($scope, $location, $timeout, Auth, User, Applicant){

	if (Auth.signedIn()) {
		$location.path('/');
	};

	$scope.$on('$firebaseSimpleLogin:login', function() {
		$location.path('/');
	});

	$scope.login = function() {
		Auth.login($scope.user).then(function() {
			$location.path('/');
		}, function(error){
			$scope.error = error.toString();
		});
	};

	$scope.register = function () {
		Auth.register($scope.user).then(function (authUser) {
		    User.create(authUser, $scope.user.username);
	    	$timeout(function(){
	    		Applicant.create($scope.user.username);
	    		$location.path('/applicant/experience');
	    	},2000);
		    	

		    
	    }, function (error) {
	       $scope.error = error.toString();
	    });
	};
});


// Auth.login($scope.user).then(function() {
// 					//var applicant = {$scope.user.username:{}};
// 					Applicant.create($scope.user.username).then(function(){
// 						$location.path('/applicant/profile');
// 					});
					