
import React, { useState, useEffect } from "react";
import "../scss/component/_aspirants.scss";
import "./resc.css";

import PageTitle from "../components/pagetitle/PageTitle";
import UpcomingExams from "../components/aspirants/UpcomingExams";
import notices from "../assets/fake-data/dataStudy/notices";
import Videos from "../components/aspirants/Videos";
import playlists from "../assets/fake-data/dataStudy/playlists";
import Channels from "../components/aspirants/Channels";
import study_channel from "../assets/fake-data/dataStudy/study_channel";
import Websites from "../components/aspirants/Websites";
import {notes,pyqs,Competitive_pyqs} from "../assets/fake-data/dataStudy/notes";

// Exam.jsx imports
import dataGate from '../assets/fake-data/data-gate';
import dataGate2 from '../assets/fake-data/data-gate-02';
import dataSSC from '../assets/fake-data/data-ssc';
import dataSSC2 from '../assets/fake-data/data-ssc-02';
import Gate from '../components/resources/gate';
import Cat from '../components/resources/cat';
import UPSC_CSE from '../components/resources/upsc-cse';
import dataCat from '../assets/fake-data/data-cat';
import UPSC_ESE from '../components/resources/upsc-ese';
import SSC_CGL from '../components/resources/ssc';

// Aspirants.jsx imports
import upcomingExams_data from "../assets/fake-data/dataForAspirants/upcoming-exams_data";
import videos_data from "../assets/fake-data/dataForAspirants/videos_data";
import channel_data from "../assets/fake-data/dataForAspirants/channel_data";
import websites_data from "../assets/fake-data/dataForAspirants/websites_data";



function Study() {
  const [selectedContent, setSelectedContent] = useState('content-1');

  const handleNavItemClick = (contentId) => {
    setSelectedContent(contentId);
  };

  return (
    <div className="wrapper unified-study-page">
      <PageTitle title="Study & Exam Resources" desc="Everything you need for your preparation journey" />

      {/* Notices Section */}
      {/* <div className="block-text center flexcenter">
        <h3 className="heading">Latest Notices</h3>
        
        <div className="topic">
          <UpcomingExams data={notices} />
        </div>
       
      </div> */}

      {/* Unified Resources Section */}
      <div className="unified-resources">
        <div className="block-text center">
          <h3 className="heading">Exam Resources</h3>
          <div className="exam-tabs">
            <ul className="breacrumb1">
              <li className={`nav-itemexam ${selectedContent === 'content-1' ? 'active' : ''}`} onClick={() => handleNavItemClick('content-1')}>GATE</li>
              <li className={`nav-itemexam ${selectedContent === 'content-2' ? 'active' : ''}`} onClick={() => handleNavItemClick('content-2')}>CAT</li>
              <li className={`nav-itemexam ${selectedContent === 'content-3' ? 'active' : ''}`} onClick={() => handleNavItemClick('content-3')}>UPSC-CSE</li>
              <li className={`nav-itemexam ${selectedContent === 'content-4' ? 'active' : ''}`} onClick={() => handleNavItemClick('content-4')}>UPSC-ESE</li>
              <li className={`nav-itemexam ${selectedContent === 'content-5' ? 'active' : ''}`} onClick={() => handleNavItemClick('content-5')}>SSC-CGL</li>
            </ul>
            <div className="contentexam">
              {selectedContent === 'content-1' && <Gate data={dataGate} data2={dataGate2} />}
              {selectedContent === 'content-2' && <Cat data={dataCat} />}
              {selectedContent === 'content-3' && <UPSC_CSE />}
              {selectedContent === 'content-4' && <UPSC_ESE />}
              {selectedContent === 'content-5' && <SSC_CGL data={dataSSC} data2={dataSSC2} />}
            </div>
          </div>
        </div>

        <div className="block-text center">
          <h3 className="heading">Study Materials</h3>
          <div className="topic">
            <div className="study-materials-grid" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <div style={{ minWidth: 220, marginBottom: '1.5rem' }}>
                <h4 style={{ marginBottom: '1rem' }}>Organizer</h4>
                <div style={{ padding: '0.5rem 0 0.5rem 0', minHeight: '60px' }}>
                  <Websites data={notes} />
                </div>
              </div>
              <div style={{ minWidth: 220, marginBottom: '1.5rem' }}>
                <h4 style={{ marginBottom: '1rem' }}>PYQs</h4>
                <div style={{ padding: '0.5rem 0 0.5rem 0', minHeight: '60px' }}>
                  <Websites data={pyqs} />
                </div>
              </div>
              <div style={{ minWidth: 220, marginBottom: '1.5rem' }}>
                <h4 style={{ marginBottom: '1rem' }}>Playlists</h4>
                <div style={{ padding: '0.5rem 0 0.5rem 0', minHeight: '60px' }}>
                  <Videos data={playlists} />
                </div>
              </div>
              <div style={{ minWidth: 220, marginBottom: '1.5rem' }}>
                <h4>Channels</h4>
                <Channels data={study_channel} />
              </div>
            </div>
          </div>
        </div>

        <div className="block-text center">
          <h3 className="heading">Aspirant Resources</h3>
          <div className="topic aspirant-resources-grid" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ minWidth: 220, marginBottom: '1.5rem' }}>
              <h4>Video Resources</h4>
              <Videos data={videos_data} />
            </div>
            <div style={{ minWidth: 220, marginBottom: '1.5rem' }}>
              <h4>Channels</h4>
              <Channels data={channel_data} />
            </div>
            <div style={{ minWidth: 220, marginBottom: '1.5rem' }}>
              <h4 style={{ marginBottom: '1rem' }}>Websites</h4>
              <div style={{ padding: '0.5rem 0 0.5rem 0', minHeight: '60px' }}>
                <Websites data={websites_data} />
              </div>
            </div>
            <div style={{ minWidth: 220, marginBottom: '1.5rem' }}>
                <h4 style={{ marginBottom: '1rem' }}>PYQs</h4>
                <div style={{ padding: '0.5rem 0 0.5rem 0', minHeight: '60px' }}>
                  <Websites data={Competitive_pyqs} />
              </div>
          </div>

          </div>
        </div>
      </div>

    </div>
  );
}

export default Study;
