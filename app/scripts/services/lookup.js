'use strict';

app.factory('Lookup', function($firebase, FIREBASE_URL){
	var stateRef = new Firebase(FIREBASE_URL + 'states');
	var states = $firebase(stateRef);
	console.log(states);




	var Lookup = {
		all: states
	};

	return Lookup;

})