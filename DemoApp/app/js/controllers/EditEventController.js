(function() {
  'use strict';
  eventsApp.controller('EditEventController',
    function($scope, eventData, $location) {

      $scope.datePattern = '\d\d/\d\d/\d\d\d\d';

      $scope.saveEvent = function(event, newEventForm) {
        if (newEventForm.$valid) {
          eventData.save(event)
            .$promise
            .then(function(response) { 
              console.log('success', response); 
              $location.path('/events');
            })
            .catch(function(response) { 
              console.log('failure', response); 
            });
        }
      };

      $scope.cancelEvent = function() {
        $location.path('/events');
      };
    }
  );
})();
