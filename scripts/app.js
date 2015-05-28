'use strict';

/**
 * @ngdoc overview
 * @name henriPotierApp
 * @description
 * # henriPotierApp
 *
 * Main module of the application.
 */
var app = angular
  .module('henriPotierApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',


  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
        .when('/panier/', {
            templateUrl: 'views/panier.html',
            controller: 'PanierCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
