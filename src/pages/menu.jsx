const menus = [
    {
        id: 1,
        name: 'Home',
        links: '/',
    },

    {
        id: 7,
        name: 'Study Material',
        links: '/study',
        isNew: 'true',
    },

    {
        id: 2,
        name: 'Wings',
        links: '/About',
    },
    {
        id: 3,
        name: 'Explore',
        links: '#',
        namesub: [
            {
                id: 1,
                sub: 'Events',
                links: '/events',
                isNew: true // Added property to indicate whether to show "NEW" blinker
            },
            {
                id: 2,
                sub: 'Activity',
                links: '/Activity'

            },
            {
                id: 3,
                sub: 'Gallery',
                links: '/gallery'
            },
            {
                id: 4,
                sub: 'Resources',
                links: '/Resources'
            },
            {
                id: 5,
                sub: 'For Aspirants',
                links: '/Aspirants',
                // isNew: true // Added property to indicate whether to show "NEW" blinker
            },
        ]

    },
    {
        id: 4,
        name: 'Sponsors',
        links: '/sponsor',
    },

    {
        id: 5,
        name: 'Team',
        links: '/team',
    },


    {
        id: 6,
        name: 'Contact',
        links: '/contact',
    },

    


];

export default menus;
