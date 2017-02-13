'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute'])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/newEvent',
      {
        template: function() { return $('#eventedit-template').html(); },
        controller: 'EditEventController',
      });

    $routeProvider.when('/events',
      {
        template: function() { return $('#eventlist-template').html(); },
        controller: 'EventListController',
        resolve: {
          events: function(eventData) { return eventData.getAllEvents().$promise; }
        }
      });

    $routeProvider.when('/event/:eventId',
      {
        template: function() { return $('#eventview-template').html(); },
        controller: 'EventController',
        resolve: {
          event: function($route, eventData) { return eventData.getEvent($route.current.pathParams.eventId).$promise; }
        }
      });

    $routeProvider.when('/profile',
      {
        template: function() { return $('#profile-template').html(); },
        controller: 'EditProfileController'
      });

    $routeProvider.otherwise({ redirectTo: '/events' });

    $locationProvider.html5Mode(true);
  });
