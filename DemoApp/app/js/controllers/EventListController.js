(function() {
  'use strict';

  eventsApp.controller('EventListController',
    function EventListcontroller($scope, $location, $route) {
      $scope.events = $route.current.locals.events;
    }
  );
})();
