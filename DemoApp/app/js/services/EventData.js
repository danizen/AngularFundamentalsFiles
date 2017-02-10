
eventsApp.factory('eventData', function () {
  return {
      event: {
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
            duration: 1,
            level: 'Advanced',
            abstract: 'In this session you will learn..., but you should have a strong grasp of the introductory material',
            upVoteCount: 0,
          },
          {
            name: 'Scopes for fun and profit',
            creatorName: 'John Doe',
            duration: 2,
            level: 'Introductory',
            abstract: 'This session will take a closer look at ...',
            upVoteCount: 0,
          },
          {
            name: 'Well-behaved controllers',
            creatorName: 'Jane Wise',
            duration: 4,
            level: 'Intermediate',
            abstract: 'Controllers are the beginning of ...',
            upVoteCount: 0,
          }
        ]
      }
    };
});
