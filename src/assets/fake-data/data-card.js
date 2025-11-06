
const img1 = '/images2/new/card1.webp'
const img2 = 'images2/new/card02.gif'
const img3 = '/images2/new/card6.webp'
const img4 = '/images2/new/card3.webp'
const img5 = '/images2/new/card5.webp'
const img6 = '/images2/new/card7.webp'
const img7 = '/images2/new/card8.webp'
const img8 = '/images2/new/card9.webp'
const img9 = '/images2/new/card10.webp'
const img10 = '/images2/new/card11.webp'
const img11 = '/images2/new/card12.webp'
const img12 = '/images2/new/card13.webp'
const img13 = '/images2/new/card14.webp'
const img14 = '/images2/new/card15.webp'
const img15 = '/images2/new/card16.webp'
const img16 = '/images2/new/educathonPoster.webp'
const img17 = '/images2/events/coc_25.webp'
const img18 = '/images2/events/open-odyssey.webp'
const img19 = '/images2/events/COMING SOON.webp'

const logo = '/images2/new/newlogo.webp'


/**
 * REGISTRATION BUTTON STATES INSTRUCTIONS:
 * 
 * 1. REGISTER NOW (Purple Button - Active Registration):
 *    - Set: isLive: true
 *    - Set: registrationLink: 'your-registration-url'
 *    Example:
 *    {
 *      isLive: true,
 *      registrationLink: 'https://forms.google.com/your-form'
 *    }
 * 
 * 2. COMING SOON (Orange Button - Event Announced):
 *    - Set: isLive: false (or omit)
 *    - Set: comingSoon: true
 *    Example:
 *    {
 *      isLive: false,
 *      comingSoon: true,
 *      registrationLink: ''
 *    }
 * 
 * 3. REGISTRATION CLOSED (Gray Button - Registration Ended):
 *    - Set: isLive: false (or omit)
 *    - Set: comingSoon: false (or omit)
 *    Example:
 *    {
 *      isLive: false,
 *      registrationLink: ''
 *    }
 */

const dataCard = [

    {
        id: 1,
        img: img16,
        title: 'Educathon',
        avt: logo,
        name: 'Team Samarth',
        tag: '@TechTeam',
        isLive: false,
        registrationLink: 'https://educathon.samarthtmsl.in/'
    },
    {
        id: 2,
        img: img17,
        title: 'Clash of Creativity',
        avt: logo,
        name: 'Team Samarth',
        tag: '@ClashOfCreativity',
        isLive: false,
        // comingSoon: true,
        registrationLink: '' // Add registration link here
    },
    {
        id: 3,
        img: img18,
        title: 'Open Odyssey',
        avt: logo,
        name: 'Team Samarth',
        tag: '@OpenOdyssey',
        isLive: false,
        registrationLink: '' // Add registration link here when available
    },
     {
        id: 4,
        img: img19,
        title: 'Coming Soon',
        avt: logo,
        name: 'Team Samarth',
        tag: '@ComingSoon',
        isLive: true,
        comingSoon: true,
        registrationLink: '' // Add registration link here when available
    },
   

// Past Events
    // {
    //     id: 1,
    //     img: img1,
    //     title: 'Innovata-a-thon',
        
    //     avt: logo,
    //     name: 'Team Samarth',
    //     tag: '@TechTeam'
    // },
    //  {
    //     id: 2,
    //     img: img2,
    //     title: 'Clash of Creativity',

    //     avt: logo,
    //     name: 'Team Samarth',
    //     tag: '@Clash0fCreativity'
    // },
    // {
    //     id: 3,
    //     img: img3,
    //     title: 'Mock-Interview',
        
    //     avt: logo,
    //     name: 'Team Samarth',
    //     tag: '@safalya23'
    // },
    // {
    //     id: 4,
    //     img: img4,
    //     title: 'Shot-A-Vid',
        
    //     avt: logo,
    //     name: 'Team Samarth',
    //     tag: '@PhotographyTeam'
    // },
    // {
    //     id: 5,
    //     img: img7,
    //     title: 'Dream Dots',
        
    //     avt: logo,
    //     name: 'Team Samarth',
    //     tag: '@CurturalTeam'
    // },
    // {
    //     id: 6,
    //     img: img5,
    //     title: 'Instant Ink',
        
    //     avt: logo,
    //     name: 'Team Samarth',
    //     tag: '@ContentTeam'
    // },
   
    // {
    //     id: 8,
    //     img: img8,
    //     title: 'Apti Acumen',
    
    //     avt: logo,
    //     name: 'Team Samarth',
    //     tag: '@Safalya25'
    // },  
    // {
    //     id: 9,
    //     img: img9,
    //     title: 'Matrix Of Mock',

    //     avt: logo,
    //     name: 'Team Samarth',
    //     tag: '@Samarth'
    // },
    // {
    //     id: 10,
    //     img: img10,
    //     title: 'Re-Imagine a Book Cover',

    //     avt: logo,
    //     name: 'Team Samarth',
    //     tag: '@Safalya25'
    // },
    // {
    //     id: 11,
    //     img: img11,
    //     title: 'UI Design-Ed',

    //     avt: logo,
    //     name: 'Team Samarth',
    //     tag: '@Safalya25'
    // },
    // {
    //     id: 12,
    //     img: img12,
    //     title: 'Snap Flicks',   

    //     avt: logo,
    //     name: 'Team Samarth',
    //     tag: '@Safalya25'
    // },
    // {
    //     id: 13,
    //     img: img13,
    //     title: 'Sherlocks Escape',
        
    //     avt: logo,
    //     name: 'Team Samarth',
    //     tag: '@Safalya25'
    // },
    // {
    //     id: 14,
    //     img: img14,
    //     title: 'Brain Blitz',

    //     avt: logo,
    //     name: 'Team Samarth',
    //     tag: '@Safalya25'
    // },
    // {
    //     id: 15,
    //     img: img15,
    //     title: 'Triathlon',

    //     avt: logo,
    //     name: 'Team Samarth',
    //     tag: '@Safalya25'
    // },

]

export default dataCard;