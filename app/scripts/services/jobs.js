'use strict';

app.factory("Job", function($geofire, FIREBASE_URL){
	var jobs = [];

	var geo = $geofire(new Firebase(FIREBASE_URL + "restaurants"));

		// var proximitySearch = function(lat, lng, miles){
		// 	geo.$getPointsNearLoc([lat,lng],miles)
		// 		.then(function(array){
		// 			$scope.filteredListings = array;	
		// 		});
		// };

	var Job = {
		listings: jobs,
		search: function(lat, lng, miles){
			geo.$getPointsNearLoc([lat,lng],miles)
				.then(function(array){
					jobs = array;	
				});
		}
	};

	// $scope.onSearchButtonClick = function() { 
	// 	Job.search(someLocationShit).then(function() 
	// 		{ 
	// 			$log.info('Yay!'); 
	// 		}, function (err) { 
	// 			$log.error('Oh FUCK'); 
	// 		}); 
	// 	}

	// var Job = {}
	// Job.listings = [
	// 	{
	// 		restaurant: "Clydes",
	// 		position: "Bartender",
	// 		address: {
	// 			street: "141 T St NW",
	// 			city: "Washington",
	// 			state: "DC",
	// 			zip:"20001"
	// 		},
	// 		coords: {
	// 			latitude: "38.915822",
	// 			longitude: "-77.01371499999999"
	// 		}
	// 	},
	// 	{
	// 		restaurant: "Teds",
	// 		position: "Manager",
	// 		address: {
	// 			street: "909 New Jersey Ave SE",
	// 			city: "Washington",
	// 			state: "DC",
	// 			zip:"20003"
	// 		},
	// 		coords: {
	// 			latitude: "38.878886",
	// 			longitude: "-77.005314"
	// 		}
	// 	},
	// 	{
	// 		restaurant: "Busboys & Poets",
	// 		position: "Server",
	// 		address: {
	// 			street: "9650 Main St",
	// 			city: "Fairfax",
	// 			state: "VA",
	// 			zip:"22031"
	// 		},
	// 		coords: {
	// 			latitude: "38.8446835",
	// 			longitude: "-77.2754658"
	// 		}
	// 	},
	// 	{
	// 		restaurant: "Cafe Dumont",
	// 		position: "Server",
	// 		address: {
	// 			street: "9959 Main St",
	// 			city: "Fairfax",
	// 			state: "VA",
	// 			zip:"22031"
	// 		},
	// 		coords: {
	// 			latitude: "38.843075",
	// 			longitude: "-77.290571"
	// 		}
	// 	},
	// 	{
	// 		restaurant: "Starbucks",
	// 		position: "Barista",
	// 		address: {
	// 			street: "2856 S Buchanan St",
	// 			city: "Arlington",
	// 			state: "VA",
	// 			zip:"22206"
	// 		},
	// 		coords: {
	// 			latitude: "38.8402127",
	// 			longitude: "-77.10175479999998"
	// 		}
	// 	},
	// 	{
	// 		restaurant: "Granville Moores",
	// 		position: "Server",
	// 		address: {
	// 			street: "1238 H St NE",
	// 			city: "Washington",
	// 			state: "DC",
	// 			zip:"20002"
	// 		},
	// 		coords: {
	// 			latitude: "38.900419",
	// 			longitude: "-76.98892899999998"
	// 		}
	// 	}
	// ];

	return Job;
});