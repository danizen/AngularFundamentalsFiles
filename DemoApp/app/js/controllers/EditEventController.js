'use strict';

eventsApp.controller('EditEventController',
  function($scope) {

    $scope.datePattern = '\d\d/\d\d/\d\d\d\d';

    $scope.saveEvent = function(event, newEventForm) {
      if (newEventForm.$valid) {
        window.alert('event ' + event.name + ' saved');
      }
    };

    $scope.cancelEvent = function() {
      window.location = '/EventDetails.html';
    };
  }
);
