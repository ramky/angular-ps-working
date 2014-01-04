eventsApp.factory('eventData', function(){
  return {
    event: {
			name: 'Angular Boot Camp',
      date: 1388089325967,
			time: '10:30 AM',
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
          abstract: 'In this session you will learn ins and outs of directives.',
          upVoteCount: 0
        },
        {
          name: 'Scopes for fun and profit',
          creatorName: 'John Doe',
          duration: 2,
          level: 'Introductory',
          abstract: 'This session will take a closer look at scopes.',
          upVoteCount: 0
        },
        {
          name: 'Well Behaved Controllers',
          creatorName: 'Jane Doe',
          duration: 4,
          level: 'Intermediate',
          abstract: 'Controllers are the beginning of everything Angular.',
          upVoteCount: 0
        }
      ],
		}
  }
});