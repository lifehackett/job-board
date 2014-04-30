'use strict';

app.factory('Lookup', function($firebase, FIREBASE_URL, $filter){
	var stateRef = new Firebase(FIREBASE_URL + 'states');
	var statesObj = $firebase(stateRef);
	var stateAry = [];

	angular.extend(stateAry, $filter('orderByPriority')(statesObj));
	
	var Lookup = {
		all: stateAry
	};

	return Lookup;

})