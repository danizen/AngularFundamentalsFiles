(function() {
  'use strict';
  eventsApp.directive('collapsible', function() {
    return {
      restrict: 'E',
      template: 
        '<div>' +
          '<h4 class="well-title" ng-click="toggleVis()">{{title}}</h4>' +
          '<div ng-show="visible" ng-transclude />' +
        '</div>',
      replace: true,
      transclude: true,
      scope: {
        title: '='
      },
      controller: function($scope) {
        $scope.visible = true;
        $scope.toggleVis = function() {
          $scope.visible = ! $scope.visible;
        };
      }
    };
  });
})();