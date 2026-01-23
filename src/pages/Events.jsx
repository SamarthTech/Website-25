import React from "react";

import PageTitle from "../components/pagetitle/PageTitle_Explore";

import Project3 from "../components/project/Project3";
import dataItem from "../assets/fake-data/data-item";

import Portfolio1 from "../components/eventhead/event1";

import Portfolio2 from "../components/eventhead/event2";

import Project4 from "../components/project/Project4";
import dataItem2 from "../assets/fake-data/data-item2";

import Portfolio3 from "../components/eventhead/event3";

import Project5 from "../components/project/Project5";
import dataItem3 from "../assets/fake-data/data-item3";

import Project8 from "../components/project/Project8";

import Portfolio6 from '../components/eventhead/PastEvent';
import dataOfPast from '../assets/fake-data/data-past';

import ProjectPast from '../components/project/ProjectPast';

import Portfolio7 from '../components/eventhead/event6';
import dataItem6 from '../assets/fake-data/data-item6';
import Project9 from '../components/project/Project9';

import Safalya25 from '../components/eventhead/Safalya25';
import dataSafalya25 from '../assets/fake-data/data-safalya25';
import Safalya26 from '../components/eventhead/Safalya26';
import dataSafalya26 from "../assets/fake-data/data-safalya26";

import dataCard from '../assets/fake-data/data-card';



function Events(props) {
  return (
    <div className="wrapper">
      <PageTitle title="Events" desc="Explore Our Exciting Events Here" />

            {/* Live Events */}
            {/* <Portfolio7/>  */}
            
            {/* Safalya'26 */}
            <Safalya26 data={dataSafalya26} />
            {/* <Project3 data={dataSafalya26} /> */}
            {/* <Project8 data={dataCard} /> */}
            

            {/* Past Events */}
            <Portfolio6></Portfolio6>
            <ProjectPast data={dataOfPast} />


      {/* safalya'23 */}
      <Portfolio1 />
      <Project3 data={dataItem} />

      {/* Special Events */}
      <Portfolio2 />
      <Project4 data={dataItem2} />

      {/* Other Events */}
      <Portfolio3 />
      <Project5 data={dataItem3} />

      {/* <Portfolio4/> 
            <Project6 data={dataItem4} /> */}
    </div>
  );
}

export default Events;
