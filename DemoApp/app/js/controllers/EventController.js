'use strict';

eventsApp.controller('EventController',
  function ($scope, $log, eventData) {
    $scope.sortorder = 'name';

    $scope.event = eventData.getEvent();

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
