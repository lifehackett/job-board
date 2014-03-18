  'use strict';

  angular.module('jobBoardApp.applicant')
  .controller('ScheduleCtrl', function($scope){
    $scope.schedule = [
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

    var allLunch = true;
    var allDinner = true;

    // $scope.selectAll = function(shift){
    //   $.each($scope.schedule, function(i, v){
    //       $scope.schedule[i][shift] = allLunch;
    //   });
    //   allLunch = !allLunch;
    //   // $scope.$apply(
    //   //   $.each($scope.schedule, function(i, v){
    //   //     $scope.schedule[i].lunch = true;
    //   // }));
    // }

    $scope.selectAllLunch = function(){
      $.each($scope.schedule, function(i, v){
          $scope.schedule[i].lunch = allLunch;
      });
      allLunch = !allLunch;
    }

    $scope.selectAllDinner = function(){
      $.each($scope.schedule, function(i, v){
          $scope.schedule[i].dinner = allDinner;
      });
      allDinner = !allDinner;
    }

var lunchHeaderTemplate='<div class="ngHeaderText" style="cursor:pointer;" ng-click="selectAllLunch()">Lunch</div>';
var dinnerHeaderTemplate='<div class="ngHeaderText" ng-click="selectAllDinner()">Dinner</div>';
var checkboxHeaderTemplate='<input class="ngSelectionHeader" type="checkbox" ng-show="multiSelect" ng-model="allSelected" ng-change="toggleSelectAll(allSelected)"/>'
var checkboxCellTemplate='<div class="ngSelectionCell"><input class="ngSelectionCheckbox" type="checkbox" ng-checked="lunch" /></div>';
    $scope.gridOptions = {
      data:'schedule',
      enableSorting: false,
      checkboxHeaderTemplate:checkboxHeaderTemplate,
      //enableCellSelection: true,
      columnDefs: [{
        field:'name', displayName:''
      },
      {
        field:'lunch', 
        displayName:'Lunch', 
        cellTemplate:'<div class="ngSelectionCell"><input class="ngSelectionCheckbox" type="checkbox" ng-checked="row.entity.lunch" /></div>',
        headerCellTemplate:lunchHeaderTemplate
      },
      {
        field:'dinner', 
        displayName:'Dinner', 
        cellTemplate:'<div class="ngSelectionCell"><input tabindex="-1" class="ngSelectionCheckbox" type="checkbox" ng-checked="row.entity.dinner" /></div>',
        headerCellTemplate: dinnerHeaderTemplate
      }]
    };


  });