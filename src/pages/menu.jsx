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
    
    // {
    //     id: 9,
    //     name: ' ',
    //     links: '#',
    //     className: 'menu-spacing', // Added spacing between Study Material and Wings
    // },

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
        id: 6,
        name: 'Contact',
        links: '/contact',
    },

    


];

export default menus;
