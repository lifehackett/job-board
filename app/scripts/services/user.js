'use strict';
 
app.factory('User', function ($firebase, FIREBASE_URL, Auth, $rootScope, $q) {
	var ref = new Firebase(FIREBASE_URL + 'users');

	var users = $firebase(ref);
	$rootScope.currentUser = {};
	//$rootScope.currentUser;

	var User = {
		create: function (authUser, username) {
		  users[username] = {
		    md5_hash: authUser.md5_hash,
		    username: username,
		    $priority: authUser.uid
		  };
		 
		  users.$save(username).then(function () {

		  	setCurrentUser(username);
		    
		  });
		},
		findByUsername: function (username) {
		  if (username) {
		    return users.$child(username);
		  }
		},
		getCurrent: function () {
			var deferred = $q.defer();

			if(!$rootScope.currentUser.username){
				$rootScope.$watch($rootScope.currentUser, function(){
					deferred.resolve($rootScope.currentUser);
				});
			}else {
				deferred.resolve($rootScope.currentUser)
			};

		  	return deferred.promise;
		},
		signedIn: function () {
		  return $rootScope.currentUser !== undefined;
		}
	};

	function setCurrentUser (username) {
		var user = User.findByUsername(username);

	  	$rootScope.currentUser = user;
	};
	$rootScope.$on('$firebaseSimpleLogin:login', function (e, authUser) {
	  var query = $firebase(ref.startAt(authUser.uid).endAt(authUser.uid));
	 
	  query.$on('loaded', function () {
	    setCurrentUser(query.$getIndex()[0]);
	  });
	});
	$rootScope.$on('$firebaseSimpleLogin:logout', function() {
	  delete $rootScope.currentUser;
	});
	 
  	return User;
});