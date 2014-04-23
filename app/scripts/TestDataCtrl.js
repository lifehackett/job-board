'use strict';

app.controller('TestDataCtrl', function($scope, $geofire, FIREBASE_URL, Job){
	var geo = $geofire(new Firebase(FIREBASE_URL + "restaurants"));
	$scope.jobs = Job;

	// angular.forEach($scope.jobs.listings, function(value, key){
	// 	delete value.$$hashKey;
	// 	geo.$insertByLocWithId([value.coords.latitude, value.coords.longitude], value.restaurant, value).catch(function(err) { console.log(err)});
	// });

});