import React from 'react';

import PageTitle from '../components/pagetitle/PageTitle';

import Project7 from '../components/project/Project7';

import dataProject2 from '../assets/fake-data/dataProject2';

function Sponsor(props) {
    // Extract the new sponsors from dataProject2 (img16-30, which are indices 15-29)
    const newSponsors = dataProject2.slice(15, 30);

    return (
        <div className='page-roadmap wrapper'>

        <PageTitle title='Sponsors' desc="Our Supportive Partners" />

        <Project7 data={dataProject2} newSponsors={newSponsors} />
           
        </div>
    );
}

export default Sponsor;
