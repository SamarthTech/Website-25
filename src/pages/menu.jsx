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
        // isNew: 'true',
    },
    


    {
        id: 2,
        name: 'Wings',
        links: '/About',
    },
    {
        id: 8,
        name: 'Events',
        links: '/Events',
        // isNew: true,
    },
    
    {
        id: 3,
        name: 'Explore',
        links: '#',
        namesub: [
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
        id: 9,
        name: 'Results',
        links: '/results',
        // isNew: 'true',
    },

    {
        id: 6,
        name: 'Contact',
        links: '/contact',
    },

    


];

export default menus;
