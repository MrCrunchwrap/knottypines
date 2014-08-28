'use strict';

/**
 * @ngdoc function
 * @name knottypinesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the knottypinesApp
 */
angular.module('knottypinesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
