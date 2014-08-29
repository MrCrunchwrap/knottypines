/* global app:true */

'use strict';

/**
 * @ngdoc overview
 * @name knottypinesApp
 * @description
 * # knottypinesApp
 *
 * Main module of the application.
 */
var app = angular.module('knottypinesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase',
    'ui.bootstrap'
  ])
  .constant('FIREBASE_URL', 'https://blistering-torch-6850.firebaseIO.com/');

app.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .when('/shows', {
    templateUrl: 'views/shows.html',
    controller: 'ShowsCtrl'
  })
  .when('/about', {
    templateUrl: 'views/about.html',
    controller: 'AboutCtrl'
  })
  .when('/contact', {
    templateUrl: 'views/contact.html',
    controller: 'ContactCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
});
