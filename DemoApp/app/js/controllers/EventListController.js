(function() {
  'use strict';

  eventsApp.controller('EventListController',
    function EventListcontroller($scope, eventData) {
      $scope.events = eventData.getAllEvents();
    }
  );
})();
