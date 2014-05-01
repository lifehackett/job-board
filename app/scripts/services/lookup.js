'use strict';

app.factory('Lookup', function($firebase, FIREBASE_URL, $filter){
	// var stateRef = new Firebase(FIREBASE_URL + 'states');
	// var statesObj = $firebase(stateRef);
	// var stateAry = [];

	// angular.extend(stateAry, $filter('orderByPriority')(statesObj));

	var states = [
		{
		"key":"AL",
		"value":"Alabama"
		},
		{
		"key":"AK",
		"value":"Alaska"
		},
		{
		"key":"AZ",
		"value":"Arizona"
		},
		{
		"key":"AR",
		"value":"Arkansas"
		},
		{
		"key":"CA",
		"value":"California"
		},
		{ 
		"key":"CO",
		"value":"Colorado"
		},
		{
		"key":"CT",
		"value":"Connecticut"
		},
		{
		"key":"DE",
		"value":"Delaware"
		},
		{
			"key":"DC",
			"value":"District of Columbia"
		},
		{
		"key":"FL",
		"value":"Florida"
		},
		{
		"key":"GA",
		"value":"Georgia"
		},
		{
		"key":"HI",
		"value":"Hawaii"
		},
		{
		"key":"ID",
		"value":"Idaho"
		},
		{
		"key":"IL",
		"value":"Illinois"
		},
		{
		"key":"IN",
		"value":"Indiana"
		},
		{
		"key":"IA",
		"value":"Iowa"
		},
		{
		"key":"KS",
		"value":"Kansas"
		},
		{
		"key":"KY",
		"value":"Kentucky"
		},
		{
		"key":"LA",
		"value":"Louisiana"
		},
		{
		"key":"ME",
		"value":"Maine"
		},
		{
		"key":"MD",
		"value":"Maryland"
		},
		{
		"key":"MA",
		"value":"Massachusetts"
		},
		{
		"key":"MI",
		"value":"Michigan"
		},
		{
		"key":"MN",
		"value":"Minnesota"
		},
		{
		"key":"MS",
		"value":"Mississippi"
		},
		{
		"key":"MO",
		"value":"Missouri"
		},
		{
		"key":"MT",
		"value":"Montana"
		},
		{
		"key":"NE",
		"value":"Nebraska"
		},
		{
		"key":"NV",
		"value":"Nevada"
		},
		{
		"key":"NH",
		"value":"New Hampshire"
		},
		{
		"key":"NJ",
		"value":"New Jersey"
		},
		{
		"key":"NM",
		"value":"New Mexico"
		},
		{
		"key":"NY",
		"value":"New York"
		},
		{
		"key":"NC",
		"value":"North Carolina"
		},
		{
		"key":"ND",
		"value":"North Dakota"
		},
		{
		"key":"OH",
		"value":"Ohio"
		},
		{
		"key":"OK",
		"value":"Oklahoma"
		},
		{
		"key":"OR",
		"value":"Oregon"
		},
		{
		"key":"PA",
		"value":"Pennsylvania"
		},
		{
		"key":"RI",
		"value":"Rhode Island"
		},
		{
		"key":"SC",
		"value":"South Carolina"
		},
		{
		"key":"SD",
		"value":"South Dakota"
		},
		{
		"key":"TN",
		"value":"Tennessee"
		},
		{
		"key":"TX",
		"value":"Texas"
		},
		{
		"key":"UT",
		"value":"Utah"
		},
		{
		"key":"VT",
		"value":"Vermont"
		},
		{
		"key":"VA",
		"value":"Virginia"
		},
		{
		"key":"WA",
		"value":"Washington"
		},
		{
		"key":"WV",
		"value":"West Virginia"
		},
		{
		"key":"WI",
		"value":"Wisconsin"
		},
		{
		"key":"WY",
		"value":"Wyoming"
		}
	]
	
	var Lookup = {
		all: states
	};

	return Lookup;

})