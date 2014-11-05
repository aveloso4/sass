'use strict';

/**
 * @ngdoc function
 * @name sassApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sassApp
 */
angular.module('sassApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

	$scope.items = [
		{
			name: '3-Prong 5\' Flat Dryer Cord - Gray',
			price: 29.99,
			selected: true
		},
		{
			name: '4-Prong 5\' Round Dryer Cord - Black',
			price: 29.99
		},
		{
			name: '6 ft. Snap-Lock&amp;trade; Flexible Pipe',
			price: 14.99
		},
		{
			name: 'Dryer Exhaust Close Elbow',
			price: 9.99
		}
	]
  });
