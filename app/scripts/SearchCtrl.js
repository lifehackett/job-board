'use strict';

	app.controller('SearchCtrl', function($scope, filterFilter, Job, angularGeo, $geofire, FIREBASE_URL, Lookup){

		$scope.listings = Job.listings;
		$scope.states = Lookup.all;
		$scope.state = $scope.states[2];
		// Lookup.$bind($scope, "states");

		var foo = $scope.states;
		$scope.searchCoords = {
			latitude:"",
			longitude:""
		};



		$scope.filterOptions = {
			filterText:""
		};

		$scope.foobar = function() {alert("Foobar");}



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
			    	field:'location', 
			        displayName:'Location', 
			        cellTemplate:addressTemplate
			    }
			],
			rowTemplate:'<div ng-style="{\'cursor\': row.cursor, \'z-index\': col.zIndex() }" ng-repeat="col in renderedColumns" ng-class="col.colIndex()" class="ngCell {{col.cellClass}}" ng-cell ng-click="selectRow(row.entity)"></div>'

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

		// $scope.$on('ngGridEventData', function(){
	 //        $scope.gridOptions.selectRow(0, true);
	 //    });

	    



		//$scope.gridOptions.selectRow(2,true);

		// var geocoder = new google.maps.Geocoder();

		// var deferred = $q.defer();

  //       geocoder.geocode({
  //           'address': "washington, dc"
  //       }, function (results, status) {
  //           deferred.resolve(results);
  //       // Should also reject if AJAX errors.
  //       });

  //       return deferred.promise;

		// var result = geocoder.geocode("washington, dc");
		// var foo = "bar";

		
	});