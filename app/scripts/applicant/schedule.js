  'use strict';

  angular.module('jobBoardApp.applicant')
    .controller('ScheduleCtrl', function($scope, Applicant, User, $location){

    //var user = User.getCurrent();

    $scope.applicant = {};//Applicant.find(user.username);
    if($scope.applicant.schedule === undefined){
      $scope.applicant.schedule = [
        {
          name:'Monday',
          lunch:false,
          dinner:false
        },
        {
          name:'Tuesday',
          lunch:false,
          dinner:false
        },
        {
          name:'Wednesday',
          lunch:false,
          dinner:false
        },
        {
          name:'Thursday',
          lunch:false,
          dinner:false
        },
        {
          name:'Friday',
          lunch:false,
          dinner:false
        },
        {
          name:'Saturday',
          lunch:false,
          dinner:false
        },
        {
          name:'Sunday',
          lunch:false,
          dinner:false
        }];
      }

    $scope.allLunch = true;
    $scope.allDinner = true;

  $scope.saveSchedule = function(applicant){
    Applicant.update(applicant);
      $location.path('/applicant/experience');

  };

    $scope.selectAllLunch = function(){
      $.each($scope.applicant.schedule, function(i, v){
          $scope.applicant.schedule[i].lunch = $scope.allLunch;
      });
      $scope.allLunch = !$scope.allLunch;
    };

    $scope.selectAllDinner = function(){
      $.each($scope.applicant.schedule, function(i, v){
          $scope.applicant.schedule[i].dinner = $scope.allDinner;
      });
      $scope.allDinner = !$scope.allDinner;
    };

$scope.selectItem = function(item, cat){
  item[cat] = !item[cat];
}

var lunchHeaderTemplate='<div class="ngHeaderText" style="cursor:pointer;" ng-click="selectAllLunch()">Lunch <input class="ngSelectionCheckbox" type="checkbox" ng-checked="!allLunch" /></div>';
var dinnerHeaderTemplate='<div class="ngHeaderText" ng-click="selectAllDinner()">Dinner <input class="ngSelectionCheckbox" type="checkbox" ng-checked="!allDinner" /></div>';
//var checkboxHeaderTemplate='<input class="ngSelectionHeader" type="checkbox" ng-show="multiSelect" ng-model="allSelected" ng-change="toggleSelectAll(allSelected)"/>'
//var checkboxCellTemplate='<div class="ngSelectionCell"><input class="ngSelectionCheckbox" type="checkbox" ng-checked="lunch" /></div>';
    $scope.gridOptions = {
      data:'applicant.schedule',
      enableSorting: false,
      //checkboxHeaderTemplate:checkboxHeaderTemplate,
      enableRowSelection: false,
      columnDefs: [{
        field:'name', displayName:''
      },
      {
        field:'lunch', 
        displayName:'Lunch', 
        cellTemplate:'<div class="ngSelectionCell" ng-click="selectItem(row.entity, \'lunch\')"><input class="ngSelectionCheckbox" type="checkbox" ng-checked="row.entity.lunch" /></div>',
        headerCellTemplate:lunchHeaderTemplate
      },
      {
        field:'dinner', 
        displayName:'Dinner', 
        cellTemplate:'<div class="ngSelectionCell" ng-click="selectItem(row.entity, \'dinner\')"><input tabindex="-1" class="ngSelectionCheckbox" type="checkbox" ng-checked="row.entity.dinner" /></div>',
        headerCellTemplate: dinnerHeaderTemplate
      }]
    };


  });