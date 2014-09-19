'use strict';

/**
 * @ngdoc function
 * @name knottypinesApp.controller:MembersCtrl
 * @description
 * # MembersCtrl
 * Controller of the knottypinesApp
 */
 angular.module('knottypinesApp')
 .controller('MembersCtrl', function ($scope) {

	$scope.oneAtATime = false;

	$scope.members = [
	{
		name: 'Trevor',
		role: 'Lead Vocals, Guitar',
		content: 'Trevor is the reason this band can do anything. He\'s pretty much a badass',
		picture: 'http://greatcollegeadvice.com/wp-content/uploads/2008/07/MM-Square-face-for-thumbnail.jpg'
	},
	{
		name: 'Michael',
		role: 'Lead Guitar, Vocals',
		content: 'Stuff',
		picture: 'http://greatcollegeadvice.com/wp-content/uploads/2008/07/MM-Square-face-for-thumbnail.jpg'
	},
	{
		name: 'Graham',
		role: 'Percussion',
		content: 'Stuff',
		picture: 'http://greatcollegeadvice.com/wp-content/uploads/2008/07/MM-Square-face-for-thumbnail.jpg'
	},
	{
		name: 'Ben',
		content: 'Stuff',
		picture: 'http://greatcollegeadvice.com/wp-content/uploads/2008/07/MM-Square-face-for-thumbnail.jpg'
	}
	];

	$scope.items = ['Item 1', 'Item 2', 'Item 3'];

	$scope.status = {
		isFirstOpen: true,
		isFirstDisabled: false
	};
 });
