'use strict';

app.filter('schedule', function() {
	return function(listings, applicant){
		var response = [];
		angular.forEach(listings, function(data,index){
			angular.forEach(data.schedule, function(innerData, innerIndex){
				var canDoLunch = true;
				var canDoDinner = true;
				// var 
				// angular.forEach(applicant.schedule, function(appData, appIndex){
				// 	appData[]
				// })
				if(innerData.lunch){

				}
				if(innerData.dinner){

				}
			})
		})
	}
})

	app.controller('SearchCtrl', function($scope, filterFilter, Job, angularGeo, $geofire, FIREBASE_URL, Lookup, User, Applicant){
		
		User.getCurrent().then(function(currentUser){
			if(currentUser) {
	 			$scope.applicant = Applicant.find(currentUser.$id);
	 		}
	 	});
		$scope.listings = Job.listings;
		$scope.states = Lookup.all;
		// Lookup.$bind($scope, "states");


		$scope.searchCoords = {
			latitude:"",
			longitude:"",
			dist:15
		};



		$scope.filterOptions = {
			filterText:""
		};

		$scope.apply = function(listing){
			listing.hasApplied = true;
			listing.hasAppliedText = "You Applied";

			if($scope.applicant) {
				if(!listing.applicants){
					listing.applicants = [];
				}
				listing.applicants.push($scope.applicant.$id);
				Job.update(listing);
			}
		}

		$scope.selectMarker = function(listing){
	    	angular.forEach($scope.listings, function(data, index){
	    		if(data.restaurant === listing.restaurant){
	    			$scope.gridOptions.selectItem(index, true);
	    			data.isSelected = true;
	    		}
	    		else{
	    			$scope.gridOptions.selectItem(index, false);
	    			data.isSelected = false;
	    		}
	    		//$scope.gridOptions.selectItem(index, true);
	    	});
	    };

	    $scope.selectRow = function(listing){
			angular.forEach($scope.listings, function(data, index){
	    		if(data.restaurant === listing.restaurant){
	    			//$scope.gridOptions.selectItem(index, true);
	    			data.isSelected = true;
	    		}
	    		else{
	    			//$scope.gridOptions.selectItem(index, false);
	    			data.isSelected = false;
	    		}
	    		//$scope.gridOptions.selectItem(index, true);
	    	});
		};


		var checkboxCellTemplate='<div class="ngSelectionCell"><input class="ngSelectionCheckbox" type="checkbox" ng-checked="lunch" /></div>';
		var addressTemplate='<div class="ngSelectionCell">{{row.entity.address.city}}, {{row.entity.address.state}}</div>'
		var applyTemplate = '<div class="ngSelectionCell"><button type="submit" style="font-size:12; padding:5px; " class="btn btn-primary" ng-click="apply(row.entity)" ng-hide="row.entity.applicants.indexOf(applicant.username) == -1">Apply Now</button><span ng-show="row.entity.applicants.indexOf(applicant.username) == -1"><strong>You\'ve Applied!</strong></span></div>';
		$scope.gridOptions = {
			data:'listings',
			enableSorting: true,
			filterOptions:$scope.filterOptions,
			keepLastSelected: false,
			multiSelect:false,
			//afterSelectionChange: function(rowItem, event){ selectRow(rowItem.entity)},
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
			    	field:'', 
			        displayName:'', 
			        cellTemplate:applyTemplate
			    }
			],
			rowHeight:40,
			rowTemplate:'<div ng-style="{\'cursor\': row.cursor, \'z-index\': col.zIndex() }" ng-repeat="col in renderedColumns" ng-class="col.colIndex()" class="ngCell {{col.cellClass}}" ng-cell ng-click="selectRow(row.entity)"></div>'

		};

		
		

		$scope.map = {
			center:{
				latitude:"",
				longitude:""
			},
			zoom:10,
			control:{}
		};

		var centerMap = function(lat, lng){
			$scope.map.center.latitude = lat;
			$scope.map.center.longitude = lng;
			
		};


		var search = function() {
			Job.search($scope.searchCoords.latitude, $scope.searchCoords.longitude, $scope.searchCoords.dist);
			//filterListings();
		};





		// $scope.$on('ngGridEventData', function(){
	 //        $scope.gridOptions.selectRow(0, true);
	 //    });

	    



		// $scope.gridOptions.selectRow(2,true);

		var geocoder = new google.maps.Geocoder();

		$scope.proximitySearch = function() {
			geocoder.geocode({
            	'address': $scope.city + ", " + $scope.state.key
	        }, function (results, status) {
	            $scope.searchCoords.latitude = results[0].geometry.location.k;
	            $scope.searchCoords.longitude = results[0].geometry.location.A;
	            search();
	            $scope.map.control.refresh({latitude:$scope.searchCoords.latitude, longitude:$scope.searchCoords.longitude});
	        });
		}

        var reverseLookup = function(lat,lng){
        	var latLng = new google.maps.LatLng(lat,lng);
			geocoder.geocode({
				'latLng': latLng

			}, function(results, status) {
				var address = results[0];
				$scope.city = address.address_components[3].short_name;
				var state = address.address_components[5].short_name;
				angular.forEach($scope.states, function(data, index){
					if(data.key === state){
						$scope.state = $scope.states[index];
					}
				});
				//address.address_components[5].short_name;
			});
		};
angularGeo.getCurrentPosition().then(function(pos){
			
			$scope.searchCoords.latitude = pos.coords.latitude;
			$scope.searchCoords.longitude = pos.coords.longitude;
			centerMap($scope.searchCoords.latitude, $scope.searchCoords.longitude);
			search();
			reverseLookup($scope.searchCoords.latitude, $scope.searchCoords.longitude);

		});
		

        //return deferred.promise;

		// var result = geocoder.geocode("washington, dc");
		// var foo = "bar";

		
	});