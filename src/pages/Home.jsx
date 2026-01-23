import React from 'react';
import dataCard from '../assets/fake-data/data-card';
import dataCard2 from '../assets/fake-data/data-card2';

import Banner2 from '../components/banner/Banner2';
import Counter from '../components/counter/Counter';

import Speciality from '../components/speciality/Speciality';
import dataBox from '../assets/fake-data/data-box';
import Project from '../components/project/Project';
import dataProject from '../assets/fake-data/dataProject';
import Testimonials from '../components/testimonials/Testimonials';
import dataTestimonials from '../assets/fake-data/data-testimonials';



function Home(props) {
    

    return (
        <div className='home-2 wrapper'>
                 {/* <Banner2 data={dataCard1} /> */}
                <Banner2 data={dataCard2} />

                <Speciality data={dataBox} />


                <Testimonials data={dataTestimonials} />

                <Counter />  

                <Project data={dataProject} />

        </div>
    );
}

export default Home;
