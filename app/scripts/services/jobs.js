'use strict';

app.factory("Job", function($geofire, FIREBASE_URL){
	var jobs = [];

	var geo = $geofire(new Firebase(FIREBASE_URL + "restaurants"));


	var Job = {
		listings: jobs,
		search: function(lat, lng, miles){
			geo.$getPointsNearLoc([lat,lng],miles)
				.then(function(array){
					// you have to push to existing array reference otherwise
					// you change the pointer.
					// Example:
					// 
					// var jobs = []; jobs now points to memory location A
					// var Job = { listings: jobs, ... }; Job.listings now also points to memory location A
					// ... in controller ..
					// $scope.listings = Job.listings; $scope.listings now points to memory locaiton A
					// ... back in this search function ...
					// If you do jobs = array; - now jobs points to memory location B, but this does not
					// implicitly update the other reference pointers (Job.listings, $scope.listings)
					// Instead - you need to deal with that initial array and just push/pop/splice/shift/unshift from it
					// If you ever need to clear it, you can do:
					// jobs.length = 0; which is an efficient way to zero out an array, then just push back onto it
					
					// the other option is to turn Job.listings into a function, a la:
					// listings: function() { return jobs; }
					// $scope.listings = Job.listings; -- Setup a function pointer
					// <div ng-repeat="job in listings()">{{job}}</div>
					// I prefer the option of just maintaining the array but either way works.
					jobs.length = 0;
					angular.forEach(array, function(value, key) {

						jobs['isSelected'] = false;
						jobs['hasApplied'] = false;
						jobs['hasAppliedText'] = "";
						jobs.applicants = [];
						jobs.push(value);
					});	
				});
		},
		update: function(job){
			delete job.hasApplied;
			delete job.isSelected;
			delete job.hasAppliedText;
			delete job.$$hashKey
			geo.$removeById(job.restaurant).then(function(){
				geo.$insertByLocWithId([job.coords.latitude, job.coords.longitude], job.restaurant, job)
					.catch(function(err) { console.log(err)});
			});
				
		
			
		}
	};



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
	// 		},
	// 		schedule:{
	// 			"Monday":{
	// 				lunch:true,
	// 				dinner:true
	// 			},
	// 			"Tuesday":{
	// 				lunch:true,
	// 				dinner:true
	// 			},
	// 			"Wednesday":{
	// 				lunch:true,
	// 				dinner:true
	// 			},
	// 			"Thursday":{
	// 				lunch:true,
	// 				dinner:true
	// 			},
	// 			"Friday":{
	// 				lunch:true,
	// 				dinner:true
	// 			},
	// 			"Saturday":{
	// 				lunch:true,
	// 				dinner:true
	// 			},
	// 			"Sunday":{
	// 				lunch:true,
	// 				dinner:true
	// 			}
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
	// 		},
	// 		schedule:{
	// 			"Monday":{
	// 				lunch:false,
	// 				dinner:true
	// 			},
	// 			"Tuesday":{
	// 				lunch:false,
	// 				dinner:true
	// 			},
	// 			"Wednesday":{
	// 				lunch:false,
	// 				dinner:true
	// 			},
	// 			"Thursday":{
	// 				lunch:false,
	// 				dinner:true
	// 			},
	// 			"Friday":{
	// 				lunch:false,
	// 				dinner:true
	// 			},
	// 			"Saturday":{
	// 				lunch:false,
	// 				dinner:true
	// 			},
	// 			"Sunday":{
	// 				lunch:false,
	// 				dinner:true
	// 			}
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
	// 		},
	// 		schedule:{
	// 			"Monday":{
	// 				lunch:true,
	// 				dinner:false
	// 			},
	// 			"Tuesday":{
	// 				lunch:true,
	// 				dinner:false
	// 			},
	// 			"Wednesday":{
	// 				lunch:true,
	// 				dinner:false
	// 			},
	// 			"Thursday":{
	// 				lunch:true,
	// 				dinner:false
	// 			},
	// 			"Friday":{
	// 				lunch:true,
	// 				dinner:false
	// 			},
	// 			"Saturday":{
	// 				lunch:true,
	// 				dinner:false
	// 			},
	// 			"Sunday":{
	// 				lunch:true,
	// 				dinner:false
	// 			}
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
	// 		},
	// 		schedule:{
	// 			"Monday":{
	// 				lunch:true,
	// 				dinner:true
	// 			},
	// 			"Tuesday":{
	// 				lunch:true,
	// 				dinner:true
	// 			},
	// 			"Wednesday":{
	// 				lunch:true,
	// 				dinner:true
	// 			},
	// 			"Thursday":{
	// 				lunch:true,
	// 				dinner:true
	// 			},
	// 			"Friday":{
	// 				lunch:true,
	// 				dinner:true
	// 			},
	// 			"Saturday":{
	// 				lunch:false,
	// 				dinner:false
	// 			},
	// 			"Sunday":{
	// 				lunch:false,
	// 				dinner:false
	// 			}
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
	// 		},
	// 		schedule:{
	// 			"Monday":{
	// 				lunch:false,
	// 				dinner:false
	// 			},
	// 			"Tuesday":{
	// 				lunch:false,
	// 				dinner:false
	// 			},
	// 			"Wednesday":{
	// 				lunch:false,
	// 				dinner:false
	// 			},
	// 			"Thursday":{
	// 				lunch:false,
	// 				dinner:false
	// 			},
	// 			"Friday":{
	// 				lunch:false,
	// 				dinner:false
	// 			},
	// 			"Saturday":{
	// 				lunch:true,
	// 				dinner:true
	// 			},
	// 			"Sunday":{
	// 				lunch:true,
	// 				dinner:true
	// 			}
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
	// 		},
	// 		schedule:{
	// 			"Monday":{
	// 				lunch:true,
	// 				dinner:true
	// 			},
	// 			"Tuesday":{
	// 				lunch:true,
	// 				dinner:true
	// 			},
	// 			"Wednesday":{
	// 				lunch:true,
	// 				dinner:true
	// 			},
	// 			"Thursday":{
	// 				lunch:true,
	// 				dinner:true
	// 			},
	// 			"Friday":{
	// 				lunch:true,
	// 				dinner:true
	// 			},
	// 			"Saturday":{
	// 				lunch:true,
	// 				dinner:true
	// 			},
	// 			"Sunday":{
	// 				lunch:true,
	// 				dinner:true
	// 			}
	// 		}
	// 	}
	// ];

	return Job;
});
