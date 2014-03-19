'use strict';

app.factory('Applicant', function($firebase, FIREBASE_URL) {
		var ref = new Firebase(FIREBASE_URL + 'applicants');
		var applicants = $firebase(ref);

		var Applicant = {
			all: applicants,
			create: function(applicant) {
				return applicants.$add(applicant);
			},
			find: function(applicantId) {
				return applicants.$child(applicantId);
			},
			delete: function(applicantId) {
				return applicants.$remove(applicantId);
			}
		};

		return Applicant;
		// return $resource('https://jobboard.firebaseio.com/applicants/:id.json')
	});