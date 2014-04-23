'use strict';

	app.controller('SearchCtrl', function($scope, filterFilter, Job, angularGeo, $geofire, FIREBASE_URL){

		$scope.listings = Job.listings;

		$scope.searchCoords = {
			latitude:"",
			longitude:""
		};



		$scope.filterOptions = {
			filterText:""
		};
		// $scope.filteredListings = function(){
		// 	return filterFilter($scope.listings, $scope.filterOptions.filterText);
		// };


		// var geo = $geofire(new Firebase(FIREBASE_URL + "restaurants"));

		// var proximitySearch = function(lat, lng, miles){
		// 	geo.$getPointsNearLoc([lat,lng],miles)
		// 		.then(function(array){
		// 			$scope.filteredListings = array;	
		// 		});
		// };

		var checkboxCellTemplate='<div class="ngSelectionCell"><input class="ngSelectionCheckbox" type="checkbox" ng-checked="lunch" /></div>';
		var addressTemplate='<div class="ngSelectionCell">{{row.entity.address.city}}, {{row.entity.address.state}}</div>'
		$scope.gridOptions = {
			data:'listings',
			enableSorting: true,
			filterOptions:$scope.filterOptions,
			//jqueryUITheme:true,
			columnDefs:[
				{
					field:'restaurant',
					displayName:'Restaurant'
				},
				{
					field:'position',
					displayName:'Position'
				},
			    {
			    	field:'location', 
			        displayName:'Location', 
			        cellTemplate:addressTemplate
			    }
			]

		};

		$scope.map = {
			center:{
				latitude:"",
				longitude:""
			},
			zoom:10,

		};

		var centerMap = function(lat, lng){
			$scope.map.center.latitude = lat;
			$scope.map.center.longitude = lng;
		};



		

		

		//$scope.filteredMarkers = [];

		// var filterListings = function() {
		// 	//proximitySearch($scope.searchCoords.latitude, $scope.searchCoords.longitude, 10);
		// 	$scope.filteredListings = filterFilter($scope.listings, $scope.filterOptions.filterText)
			
		// };

		// var updateMarkers = function(){
		// 	// var filteredListings = filterListings();
		// 	$scope.filteredMarkers = [];
		// 	angular.forEach($scope.filteredListings, function(value, key){

		// 		var marker = {
		// 			latitude: value.coords.latitude,
		// 			longitude: value.coords.longitude,
		// 		};
		// 		// marker.onClicked = function() {
		// 		// 	//marker.showWindow = true;
		// 		// 	console.log("clicked");
		// 		// };
		// 		$scope.filteredMarkers.push(marker);

		// 	});
		// };


		// $scope.filterJobs = function(){
		// 	filterListings();
		// 	//updateMarkers();
		// };

		var search = function() {
			Job.search($scope.searchCoords.latitude, $scope.searchCoords.longitude, 15);
			//filterListings();
		};

		angularGeo.getCurrentPosition().then(function(pos){
			
			$scope.searchCoords.latitude = pos.coords.latitude;
			$scope.searchCoords.longitude = pos.coords.longitude;
			centerMap($scope.searchCoords.latitude, $scope.searchCoords.longitude);
			search();

		});

		


		// var flattenAddress = function(address){
		// 	return address.street + ', ' + address.city + ', ' + address.state + ' ' + address.zip
		// };


		// $scope.proximitySearch = function(){
		// 	proximitySearch($scope.searchCoords.latitude, $scope.searchCoords.longitude, 10);

		// };

		

		
	});