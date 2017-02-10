'use strict';

eventsApp.controller('EventController',
  function ($scope) {
    $scope.event = {
      name: 'Angular Boot Camp',
      date: '1/1/2013',
      time: '10:30 am',
      location: {
        address: 'Google Headquarters',
        city: 'Mountain View',
        province: 'CA'
      },
      imageUrl: '/img/angularjs-logo.png',
      sessions: [
        {
          name: 'Directives Masterclass',
          creatorName: 'Bob Smith',
          duration: '1 hour',
          level: 'Advanced',
          abstract: 'In this session you will learn...',
          upVoteCount: 0,
        },
        {
          name: 'Scopes for fun and profit',
          creatorName: 'John Doe',
          duration: '30 minutes',
          level: 'Introductory',
          abstract: 'This session will take a closer look at ...',
          upVoteCount: 0,
        },
        {
          name: 'Well-behaved controllers',
          creatorName: 'Jane Wise',
          duration: '2 hours',
          level: 'Intermediate',
          abstract: 'Controllers are the beginning of ...',
          upVoteCount: 0,
        }
      ]
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
