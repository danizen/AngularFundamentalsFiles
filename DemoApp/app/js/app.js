var eventsApp = (function(){
  'use strict';
  return angular.module('eventsApp', ['ngResource', 'ngRoute'])
    .config(function($routeProvider, $locationProvider) {
      $routeProvider.when('/newEvent',
        {
          template: function() { return angular.element('#eventedit-template').html(); },
          controller: 'EditEventController',
        });

      $routeProvider.when('/events',
        {
          template: function() { return angular.element('#eventlist-template').html(); },
          controller: 'EventListController',
          resolve: {
            events: function(eventData) { return eventData.getAllEvents().$promise; }
          }
        });

      $routeProvider.when('/event/:eventId',
        {
          template: function() { return angular.element('#eventview-template').html(); },
          controller: 'EventController',
          resolve: {
            event: function($route, eventData) { return eventData.getEvent($route.current.pathParams.eventId).$promise; }
          }
        });

      $routeProvider.when('/profile',
        {
          template: function() { return angular.element('#profile-template').html(); },
          controller: 'EditProfileController'
        });

      $routeProvider.when('/sampleDirective',
        {
          template: function() { return angular.element('#sample-template').html(); },
          controller: 'SampleDirectiveController'
        });

      $routeProvider.otherwise({ redirectTo: '/events' });

      $locationProvider.html5Mode(true);
    });
})();
