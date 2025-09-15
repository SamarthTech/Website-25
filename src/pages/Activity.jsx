import React from 'react';

import img1 from '/images2/new/devfest.webp'
import img2 from '/images2/new/hack.webp'
import img3 from '/images2/new/hack4bengal.webp'
import img4 from '/images2/new/Apertre.webp'
import img5 from '/images2/new/GCCD_card.webp'
import img6 from '/images2/new/droid_fest.webp'
import img7 from '/images2/new/nexus.webp'
import img8 from '/images2/new/config.webp'
import img9 from '/images2/new/hack23__.webp'
import img10 from '/images2/new/hack24.webp'
import img11 from '/images2/new/SIT_card.webp'
import img12 from '/images2/new/GCCD25_card.webp'
import img13 from '/images2/new/h4b.webp'
import img14 from '/images2/new/aprtr2.webp'



import PageTitle from '../components/pagetitle/PageTitle_Explore';
import Button from '../components/button/Button';



function Activity(props) {

    const dataBlock = [
        {
            id: 14,
            img: img14,
            class: 'img1',
            subheading: 'APERTRE 2.0',
            heading: 'Apertre 2.0: Celebrating the Power of Open Source',
            desc1: 'Team Samarth is excited to continue our journey as a proud Community Partner at Apertre 2.0 🌟, one of the most vibrant open-source gatherings in India.',
            desc2: ''
        },
        {
            id: 13,
            img: img13,
            class: 'img1',
            subheading: 'HACK4BENGAL 2025',
            heading: 'HACK4BENGAL 2025: Igniting Innovation in the East',
            desc1: 'Team Samarth is thrilled to announce our partnership with Hack4Bengal 2025 🚀, the grandest hackathon of Eastern India, where creativity meets cutting-edge tech.',
            desc2: ''
        },

        {
            id: 12,
            img: img12,
            class: 'img1',
            subheading: 'GCCD KOLKATA 2025',
            heading: 'Google Cloud Community Days Kolkata 2025',
            desc1: '',
            desc2: 'Team Samarth proudly announces that we are now the Official Community Partner of the biggest and most-awaited Tech conference, the GCCD Kolkata 2025 ',
        },
        {
            id: 11,
            img: img11,
            class: 'img1',
            subheading: 'SIT KOLKATA 2025',
            heading: 'Sap Inside Track Kolkata 2025',
            desc1: '',
            desc2: 'Team Samarth proudly announces that we are now the Official Community Partner at SAP Inside Track Kolkata 2025 ',
        },
        {
            id: 10,
            img: img8,
            class: 'img1',
            subheading: 'CONFIG 2025 WATCH PARTY – KOLKATA',
            heading: 'Config 2025 Watch Party – Kolkata!',
            desc1: 'Design. Collaboration. Inspiration. Config 2025 Watch Party brought it all together for the creative community ✨',
            desc2: 'Team Samarth is thrilled to announce that we are now the Official Community Partner for Config 2025 Watch Party – Kolkata 🎉. A night filled with design ideas, conversations, and limitless creativity.'
        },
        {
            id: 9,
            img: img7,
            class: 'img1',
            subheading: 'DEVNEXUS 2024',
            heading: 'DevNexus HACKATHON 2024',
            desc1: 'Team Samarth is delighted to announce our role as the Official Community Partner of DevNexus Hackathon 2024 🤝. Looking forward to empowering student hackers and driving innovation together!',
            desc2: ''
        },
        {
            id: 8,
            img: img6,
            class: 'img1',
            subheading: 'DROIDFEST 2024',
            heading: 'DroidFest 2024',
            desc1: 'Celebration of Android, tech, and innovation with the brightest minds in the industry💡',
            desc2: 'Team Samarth is proud to partner with DroidFest 2024 🎉. From cutting-edge sessions to exclusive student offers, this collaboration unlocked endless opportunities for learning and networking!'
        },
        {
            id: 7,
            img: img5,
            class: 'img1',
            subheading: 'GCCD KOLKATA 2024',
            heading: 'Google Cloud Community Days Kolkata 2024',
            desc1: 'Collaborated with GDG Cloud Kolkata to Celebrate Tech like never before ✨',
            desc2: 'Team Samarth proudly announces that we are now the Official Community Partner of the biggest and most-awaited Tech conference, the GCCD Kolkata 2024 !',
        },
        {
            id: 6,
            img: img10,
            class: 'img1',
            subheading: 'HACKTOBERFEST 2024',
            heading: 'Hacktoberfest 2024 Status: Hacked',
            desc1: 'Samarth TMSL once again made its mark in Hacktoberfest 2024 💻⚡ With 500+ Pull Requests and 200+ students impacted, we celebrated open-source collaboration bigger and better!',
            desc2: ''
        },
        {
            id: 5,
            img: img9,
            class: 'img1',
            subheading: 'HACKTOBERFEST 2023',
            heading: 'Hacktoberfest 2023 Status: Hacked',
            desc1: 'Team Samarth proudly continued the legacy by contributing massively in Hacktoberfest 2023 🌟 Over 400 Pull Requests across multiple repositories, empowering 150+ students nationwide.',
            desc2: ''
        },
        {
            id: 4,
            img: img1,
            class: 'img1',
            subheading: 'DEVFEST KOLKATA 2022',
            heading: 'Official Community Partner For DevFest Kolkata 2022!',
            desc1: 'Do you envision impacting the lives of millions through the lens of technology? If yes, we have a piece of excellent news for you all.',
            desc2: 'Team Samarth is elated to officially announce that we are now Community Partner of the prestigious DevFest Kolkata 2022🔥.',
        },
        {
            id: 3,
            img: img4,
            class: 'img1',
            subheading: 'APERTRE',
            heading: 'Apertre: One of the Largest Open Source Event in India',
            desc1: 'Team Samarth is happy to share that we are one of the most important Community partner in this Open Source Intiative by Apertre  ',
            desc2: ''
        },
        {
            id: 2,
            img: img2,
            class: 'img1',
            subheading: 'HACKTOBERFEST 2022',
            heading: 'Hacktoberfest 2022 Status: Hacked',
            desc1: 'Team Samarth is happy to share that we have Hacked 🚀 the Hacktoberfest 2022 with a blastof over 300 Pull Request over our 4 repositories, helping more than 100 students PAN India',
            desc2: ''
        },

        {
            id: 1,
            img: img3,
            class: 'img1',
            subheading: 'HACK4BENGAL',
            heading: 'HACK4BENGAL: Largest Hackathon in East India',
            desc1: 'Team Samarth is happy to share that we are one of the most  important Community partner in hack4bangal intiative ',
            desc2: ''
        },

    ]

    const jsonLength = Object.keys(dataBlock).length;
    console.log(jsonLength);

    return (
        <section className="about home-2 wrapper">
            <PageTitle title='Engage in our Community Activities' />
            {
                dataBlock.map(e => (
                    <>
                        <div className="shape"></div>
                        <div className="container" style={{ marginBottom: '30px' }}>
                            <div className="row rev">
                                <div className="col-xl-6 col-md-12">
                                    <div className="about__right">
                                        <div className="images">
                                            {
                                                <img key={e.id} className={e.class} src={e.img} alt="hack" />
                                            }

                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-md-12">
                                    <div className="block-text" >
                                        <h6 className="sub-heading"><span>{e.subheading}</span></h6>
                                        <h3 className="heading">{e.heading}</h3>
                                        <p className="mb-17">{e.desc1}</p>
                                        <p className="mb-26">{e.desc2}</p>
                                        <Button link='https://www.instagram.com/samarth_tmsl/?hl=en' title='View Work' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ))
            }

        </section>
    );
}

export default Activity;
