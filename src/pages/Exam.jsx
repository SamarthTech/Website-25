import React, { useState } from 'react';
import './resc.css';
// import CODE from 'images2/resc/code1.webp'
// import CODE2 from '/images2/resc/code1 (1).webp'
// import ssceng from '/images2/resc/ssc-eng.webp';
// import sscmath from '/images2/resc/ssc-math.webp';
// import sscreas from '/images2/resc/ssc-reas.webp';
// import sscgen from '/images2/resc/ssc-gen.webp';
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

// import PageTitle from '../components/pagetitle/PageTitle_Explore';

// PageTitle.propTypes = {
//   title: PropTypes.string.isRequired,
// };



const Exam = () => {
  const [selectedContent, setSelectedContent] = useState('content-1');

  const handleNavItemClick = (contentId) => {
    setSelectedContent(contentId);
  };



  return (
    <div>
      <section className="page-title">
        <div className="shape"></div>
        <div className="shape right s3"></div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="page-title__body">
                <div className="page-title__main">
                  <h4 className="title">Resources</h4>
                  <div className='mobile'>
                    <ul className="breacrumb1">
                      <li
                        className={`nav-itemexam ${selectedContent === 'content-1' ? 'active' : ''}`}
                        onClick={() => handleNavItemClick('content-1')}
                      >
                        GATE
                      </li>
                      <li
                        className={`nav-itemexam ${selectedContent === 'content-2' ? 'active' : ''}`}
                        onClick={() => handleNavItemClick('content-2')}
                      >
                        CAT
                      </li>
                      <li
                        className={`nav-itemexam ${selectedContent === 'content-3' ? 'active' : ''}`}
                        onClick={() => handleNavItemClick('content-3')}
                      >
                        UPSC-CSE
                      </li>
                    </ul>
                    <ul className="breacrumb1">
                      <li
                        className={`nav-itemexam ${selectedContent === 'content-4' ? 'active' : ''}`}
                        onClick={() => handleNavItemClick('content-4')}
                      >
                        UPSC-ESE
                      </li>
                      <li
                        className={`nav-itemexam ${selectedContent === 'content-5' ? 'active' : ''}`}
                        onClick={() => handleNavItemClick('content-5')}
                      >
                        SSC-CGL
                      </li>
                  
                  {/* <li
                      className={`nav-itemexam ${selectedContent === 'content-6' ? 'active' : ''}`}
                      onClick={() => handleNavItemClick('content-6')}
                    >
                      CDS
                    </li>
                    <li
                      className={`nav-itemexam ${selectedContent === 'content-7' ? 'active' : ''}`}
                      onClick={() => handleNavItemClick('content-7')}
                    >
                      AFCAT
                    </li> */}
                    </ul>
                </div>
                <div className='bigscreen'>
                    <ul className="breacrumb1">
                      <li
                        className={`nav-itemexam ${selectedContent === 'content-1' ? 'active' : ''}`}
                        onClick={() => handleNavItemClick('content-1')}
                      >
                        GATE
                      </li>
                      <li
                        className={`nav-itemexam ${selectedContent === 'content-2' ? 'active' : ''}`}
                        onClick={() => handleNavItemClick('content-2')}
                      >
                        CAT
                      </li>
                      <li
                        className={`nav-itemexam ${selectedContent === 'content-3' ? 'active' : ''}`}
                        onClick={() => handleNavItemClick('content-3')}
                      >
                        UPSC-CSE
                      </li>
                      <li
                        className={`nav-itemexam ${selectedContent === 'content-4' ? 'active' : ''}`}
                        onClick={() => handleNavItemClick('content-4')}
                      >
                        UPSC-ESE
                      </li>
                      <li
                        className={`nav-itemexam ${selectedContent === 'content-5' ? 'active' : ''}`}
                        onClick={() => handleNavItemClick('content-5')}
                      >
                        SSC-CGL
                      </li>
                  
                  {/* <li
                      className={`nav-itemexam ${selectedContent === 'content-6' ? 'active' : ''}`}
                      onClick={() => handleNavItemClick('content-6')}
                    >
                      CDS
                    </li>
                    <li
                      className={`nav-itemexam ${selectedContent === 'content-7' ? 'active' : ''}`}
                      onClick={() => handleNavItemClick('content-7')}
                    >
                      AFCAT
                    </li> */}
                    </ul>
                </div>
                <h5 className="breacrumbs">Find Resources for Various Exams Here</h5>
                <div className="bottom">
                  <p>Share this page</p>

                  <ul className="list-social">
                    <li>
                      <a href="https://www.facebook.com/SamarthTMSL" target='_blank'>
                        <svg
                          width="9"
                          height="16"
                          viewBox="0 0 9 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.57969 9.03953C2.51969 9.03953 1.19969 9.03953 0.599688 9.03953C0.279688 9.03953 0.179688 8.91953 0.179688 8.61953C0.179688 7.81953 0.179688 6.99953 0.179688 6.19953C0.179688 5.87953 0.299688 5.77953 0.599688 5.77953H2.57969C2.57969 5.71953 2.57969 4.55953 2.57969 4.01953C2.57969 3.21953 2.71969 2.45953 3.11969 1.75953C3.53969 1.03953 4.13969 0.559531 4.89969 0.279531C5.39969 0.0995311 5.89969 0.0195312 6.43969 0.0195312H8.39969C8.67969 0.0195312 8.79969 0.139531 8.79969 0.419531V2.69953C8.79969 2.97953 8.67969 3.09953 8.39969 3.09953C7.85969 3.09953 7.31969 3.09953 6.77969 3.11953C6.23969 3.11953 5.95969 3.37953 5.95969 3.93953C5.93969 4.53953 5.95969 5.11953 5.95969 5.73953H8.27969C8.59969 5.73953 8.71969 5.85953 8.71969 6.17953V8.59953C8.71969 8.91953 8.61969 9.01953 8.27969 9.01953C7.55969 9.01953 6.01969 9.01953 5.95969 9.01953V15.5395C5.95969 15.8795 5.85969 15.9995 5.49969 15.9995C4.65969 15.9995 3.83969 15.9995 2.99969 15.9995C2.69969 15.9995 2.57969 15.8795 2.57969 15.5795C2.57969 13.4795 2.57969 9.09953 2.57969 9.03953Z"
                            fill="white"
                          />
                        </svg>
                      </a>
                    </li>
                    {/* <li>
                      <a href="https://twitter.com/Samarth_tmsl" target='_blank'>
                        <svg
                          width="15"
                          height="12"
                          viewBox="0 0 15 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.5 1.42062C13.9794 1.66154 13.4246 1.82123 12.8462 1.89877C13.4412 1.524 13.8954 0.935077 14.1089 0.225231C13.5541 0.574154 12.9416 0.820615 12.2889 0.958154C11.7621 0.366462 11.0114 0 10.1924 0C8.60337 0 7.32412 1.36062 7.32412 3.02862C7.32412 3.26862 7.34338 3.49938 7.39062 3.71908C5.0045 3.59631 2.89313 2.38985 1.47475 0.552C1.22712 1.00523 1.08188 1.524 1.08188 2.08246C1.08188 3.13108 1.59375 4.06062 2.35675 4.59877C1.89562 4.58954 1.44325 4.44831 1.06 4.22585C1.06 4.23508 1.06 4.24708 1.06 4.25908C1.06 5.73046 2.05487 6.95262 3.3595 7.23415C3.12587 7.30154 2.87125 7.33385 2.607 7.33385C2.42325 7.33385 2.23775 7.32277 2.06362 7.28215C2.4355 8.48123 3.49075 9.36277 4.7455 9.39138C3.769 10.1972 2.52912 10.6828 1.18688 10.6828C0.9515 10.6828 0.72575 10.6717 0.5 10.6412C1.77137 11.5062 3.27813 12 4.903 12C10.1845 12 13.072 7.38462 13.072 3.384C13.072 3.25015 13.0676 3.12092 13.0615 2.99262C13.6311 2.56615 14.1097 2.03354 14.5 1.42062Z"
                            fill="white"
                          />
                        </svg>
                      </a>
                    </li> */}
                    <li>
                      <a href="https://www.linkedin.com/company/samarthtmsl/mycompany/" target='_blank'>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.0006 14V8.87249C14.0006 6.35249 13.4581 4.42749 10.5181 4.42749C9.10062 4.42749 8.15563 5.19749 7.77063 5.93249H7.73563V4.65499H4.95312V14H7.85813V9.36249C7.85813 8.13749 8.08563 6.96499 9.59063 6.96499C11.0781 6.96499 11.0956 8.34749 11.0956 9.43249V13.9825H14.0006V14Z"
                            fill="white"
                          />
                          <path
                            d="M0.226562 4.65479H3.13156V13.9998H0.226562V4.65479Z"
                            fill="white"
                          />
                          <path
                            d="M1.68 0C0.7525 0 0 0.7525 0 1.68C0 2.6075 0.7525 3.3775 1.68 3.3775C2.6075 3.3775 3.36 2.6075 3.36 1.68C3.36 0.7525 2.6075 0 1.68 0Z"
                            fill="white"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/@samarth_tmsl_official" target='_blank'>
                        <svg
                          width="18"
                          height="12"
                          viewBox="0 0 18 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.2347 1.9639C17.1458 1.22216 16.4468 0.510897 15.7154 0.415609C11.2555 -0.138536 6.7457 -0.138536 2.28731 0.415609C1.55533 0.51069 0.856308 1.22216 0.76739 1.9639C0.452537 4.68236 0.452537 7.31818 0.76739 10.036C0.856308 10.7778 1.55533 11.4897 2.28731 11.5843C6.7457 12.1384 11.2557 12.1384 15.7154 11.5843C16.4468 11.4898 17.1458 10.7778 17.2347 10.036C17.5496 7.31842 17.5496 4.68236 17.2347 1.9639ZM7.58931 8.82375V3.17703L11.8243 6.00049L7.58931 8.82375Z"
                            fill="white"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
      </section >

  <div className="containerexam">



    <div className="contentexam">
      <div id="content-1" className={`content-sectionexam ${selectedContent === 'content-1' ? 'active' : ''}`}>
        <Gate data={dataGate} data2={dataGate2} />

      </div>
      <div id="content-2" className={`content-sectionexam ${selectedContent === 'content-2' ? 'active' : ''}`}>
        <Cat data={dataCat} />
      </div>
      <div id="content-3" className={`content-sectionexam ${selectedContent === 'content-3' ? 'active' : ''}`}>
        <UPSC_CSE />
      </div>

      <div id="content-4" className={`content-sectionexam ${selectedContent === 'content-4' ? 'active' : ''}`}>
        <UPSC_ESE />
      </div>

      <div id="content-5" className={`content-sectionexam ${selectedContent === 'content-5' ? 'active' : ''}`}>
        <SSC_CGL data={dataSSC} data2={dataSSC2} />
      </div>

      <div id="content-6" className={`content-sectionexam ${selectedContent === 'content-6' ? 'active' : ''}`}>
        <h2>COMING SOON</h2>
        {/* <p>Coming-Soon</p> */}
      </div>

      <div id="content-7" className={`content-sectionexam ${selectedContent === 'content-7' ? 'active' : ''}`}>
        <h2>COMING SOON</h2>
        {/* <p>Coming-Soon</p> */}
      </div>



    </div>
  </div>
    </div >
  );
};

export default Exam;
