/* jshint -W097 */
/* globals describe, beforeEach, module, it, inject, sinon, expect */
'use strict';

describe('EventListController', function() {

  beforeEach(module('eventsApp'));

  it('should set the $scope.events to the result of eventData.getAllEvents()', inject(function($controller, $rootScope) {
    var scope = $rootScope.$new();
    var mockEvents = {};
    var mockEventData = sinon.stub({getAllEvents: function() {}});
    mockEventData.getAllEvents.returns(mockEvents);

    $controller('EventListController',
      { '$scope': scope, eventData: mockEventData }
    );

    expect(scope.events).toBe(mockEvents);
  }));

});
