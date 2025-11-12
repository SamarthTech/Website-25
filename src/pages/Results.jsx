import React from 'react'; 

import PageTitle from '../components/pagetitle/PageTitle_Explore';

import Resulthead from '../components/resulthead/resulthead.jsx';

import Resultbody from "../components/resultbody/resultbody.jsx";
import results from '../assets/fake-data/data-results.js';


function Results(props) {
    return (
        <div className='page-roadmap wrapper'>

        <PageTitle title='Results' desc="Celebrating the Achievements of our Participants" />
        <Resulthead />
        <Resultbody data={results} />
           
        </div>
    );
}
// This page was made by Antarik (hehehe :)
export default Results;