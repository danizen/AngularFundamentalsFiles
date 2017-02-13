'use strict';

eventsApp.controller('EventController',
  function ($scope, eventData, $routeParams, $route) {
    $scope.sortorder = 'name';

    eventData.getEvent($routeParams.eventId)
      .$promise.then(
        function(event) { $scope.event = event; console.log(event); },
        function(response) { console.log(response); }
      );

    $scope.reload = function() {
      $route.reload();
    };

    $scope.upVoteSession = function(session) {
      session.upVoteCount++;
    };

    $scope.downVoteSession = function(session) {
      if (session.upVoteCount > 0) {
        session.upVoteCount--;
      }
    };
  }
);
