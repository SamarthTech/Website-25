import React from 'react';

import PageTitle from '../components/pagetitle/PageTitle_Explore';

import Team2 from '../components/team/Team2';
import dataTeam from '../assets/fake-data/dataTeam';

import Team3 from '../components/team/Team3';
import dataTeam2 from '../assets/fake-data/dataTeam2';

import Team4 from '../components/team/Team4';
import dataTeam3 from '../assets/fake-data/dataTeam3';

// import Team5 from '../components/team/Team5';
// import dataTeam4 from '../assets/fake-data/dataTeam4';



function Team(props) {
    return (
        <div className='page-team wrapper'>

            <PageTitle title='Our Team' desc='The People Who Make Everything Happen' />

            <Team2 data={dataTeam} />

            <Team3 data={dataTeam2} />

            <Team4 data={dataTeam3} />

            {/* <Team5 data={dataTeam4} /> */}
            
        </div>
    );
}

export default Team;
