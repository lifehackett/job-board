'use strict';

app.factory('Applicant', function($firebase, FIREBASE_URL, User) {
		var ref = new Firebase(FIREBASE_URL + 'applicants');
		var applicants = $firebase(ref);

		var Applicant = {
			all: applicants,
			create: function(applicantId) {
				if(User.signedIn()){
					User.getCurrent().then(function(currentUser){
						applicants[applicantId] = {foo:"bar"};
						return applicants.$save(applicantId);
					});

				}
			},
			update: function(applicant){
				if(User.signedIn()){
					var applicantId = applicant.$id;
					applicants[applicantId] = applicant;
					return applicants.$save(applicantId).then(function(ref){});
				}
			},
			find: function(applicantId) {
				return applicants.$child(applicantId);
			},
			delete: function(applicantId) {
				if(User.signedIn()){
					var applicant = Applicant.find(applicantId);
					applicant.$on('loaded', function(){
						var user = User.findByUserName(applicant.owner);
						applicants.$remove(applicantId).then(function(){
							user.$child('applicants').$remove(applicantId);
						})
					})
					
				}
			}
		};

		return Applicant;
		// return $resource('https://jobboard.firebaseio.com/applicants/:id.json')
	});

// var initializeService = function() {
//        _listing.data = {};
//        _currentUser = {};
//        UserSvc.getCurrent().then(function(user) {
//          _currentUser = user;
//          initializeListing();
//        });
//      };

//      $rootScope.$on('$firebaseSimpleLogin:logout', function() {
//        $log.info('Logout detected - Re-initialize service');
//        initializeService();
//      });
// initializeService();

// $on('..:logout') listener
// I do this in there now:
// $log.info('Logout detected - Deleting current user');
//        _getCurrentUserPromise = $q.defer();
//                                delete $rootScope.currentUser;