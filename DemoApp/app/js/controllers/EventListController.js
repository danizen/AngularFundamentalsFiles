'use strict';

eventsApp.controller('EventListController',
  function EventListcontroller($scope, $location, eventData) {
    $scope.events = eventData.getAllEvents();
  }
);
