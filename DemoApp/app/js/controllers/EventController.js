(function() {
  'use strict';

  eventsApp.controller('EventController',
    function ($scope, $route) {
      $scope.sortorder = 'name';

      $scope.event = $route.current.locals.event;

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
})();
