'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute'])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/newEvent',
      {
        template: function() { return $('#newevent-template').html(); },
        controller: 'EditEventController'
      });
    $routeProvider.when('/events',
      {
        templateUrl: 'templates/EventList.html',
        controller: 'EventListController'
      });
    $routeProvider.when('/event/:eventId',
      {
        templateUrl: 'templates/EventDetails.html',
        controller: 'EventController'
      });
    $routeProvider.otherwise({ redirectTo: '/events' });

    $locationProvider.html5Mode(true);
  });
