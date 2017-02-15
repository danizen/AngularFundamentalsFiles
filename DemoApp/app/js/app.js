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
          template: angular.element('#eventlist-template').html(),
          controller: 'EventListController'
        });

      $routeProvider.when('/event/:eventId',
        {
          template: function() { return angular.element('#eventview-template').html(); },
          controller: 'EventController'
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
