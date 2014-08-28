'use strict';

/**
 * @ngdoc function
 * @name knottypinesApp.controller:ShowsCtrl
 * @description
 * # ShowsCtrl
 * Controller of the knottypinesApp
 */
app.controller('ShowsCtrl', ['$scope', '$firebase', 'FIREBASE_URL', 'Show', function($scope, $firebase, FIREBASE_URL, Show){

	$scope.shows = Show.all;

	$scope.show = {};

	$scope.deleteShow = function (show) {
		Show.delete(show);
	};

	$scope.addShow = function (show) {
		Show.create(show);
	};
	
}]);
