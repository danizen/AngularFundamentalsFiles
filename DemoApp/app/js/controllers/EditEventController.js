'use strict';

eventsApp.controller('EditEventController',
  function($scope, eventData) {

    $scope.datePattern = '\d\d/\d\d/\d\d\d\d';

    $scope.saveEvent = function(event, newEventForm) {
      if (newEventForm.$valid) {
        eventData.save(event)
          .$promise
          .then(function(response) { console.log('success', response); })
          .catch(function(response) { console.log('failure', response); });
      }
    };

    $scope.cancelEvent = function() {
      window.location = '/EventDetails.html';
    };
  }
);
