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
                      <a href="https://www.instagram.com/samarth_tmsl/" target='_blank'>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8 1.44C10.136 1.44 10.389 1.449 11.233 1.488C12.013 1.523 12.434 1.653 12.714 1.763C13.092 1.914 13.358 2.096 13.638 2.362C13.904 2.642 14.086 2.908 14.237 3.286C14.347 3.566 14.477 3.987 14.512 4.767C14.551 5.611 14.56 5.864 14.56 8C14.56 10.136 14.551 10.389 14.512 11.233C14.477 12.013 14.347 12.434 14.237 12.714C14.086 13.092 13.904 13.358 13.638 13.638C13.358 13.904 13.092 14.086 12.714 14.237C12.434 14.347 12.013 14.477 11.233 14.512C10.389 14.551 10.136 14.56 8 14.56C5.864 14.56 5.611 14.551 4.767 14.512C3.987 14.477 3.566 14.347 3.286 14.237C2.908 14.086 2.642 13.904 2.362 13.638C2.096 13.358 1.914 13.092 1.763 12.714C1.653 12.434 1.523 12.013 1.488 11.233C1.449 10.389 1.44 10.136 1.44 8C1.44 5.864 1.449 5.611 1.488 4.767C1.523 3.987 1.653 3.566 1.763 3.286C1.914 2.908 2.096 2.642 2.362 2.362C2.642 2.096 2.908 1.914 3.286 1.763C3.566 1.653 3.987 1.523 4.767 1.488C5.611 1.449 5.864 1.44 8 1.44ZM8 0C5.827 0 5.555 0.01 4.702 0.048C3.85 0.087 3.269 0.222 2.76 0.42C2.234 0.624 1.787 0.897 1.343 1.343C0.897 1.787 0.624 2.234 0.42 2.76C0.222 3.269 0.087 3.85 0.048 4.702C0.01 5.555 0 5.827 0 8C0 10.173 0.01 10.445 0.048 11.298C0.087 12.15 0.222 12.731 0.42 13.24C0.624 13.766 0.897 14.213 1.343 14.657C1.787 15.103 2.234 15.376 2.76 15.58C3.269 15.778 3.85 15.913 4.702 15.952C5.555 15.99 5.827 16 8 16C10.173 16 10.445 15.99 11.298 15.952C12.15 15.913 12.731 15.778 13.24 15.58C13.766 15.376 14.213 15.103 14.657 14.657C15.103 14.213 15.376 13.766 15.58 13.24C15.778 12.731 15.913 12.15 15.952 11.298C15.99 10.445 16 10.173 16 8C16 5.827 15.99 5.555 15.952 4.702C15.913 3.85 15.778 3.269 15.58 2.76C15.376 2.234 15.103 1.787 14.657 1.343C14.213 0.897 13.766 0.624 13.24 0.42C12.731 0.222 12.15 0.087 11.298 0.048C10.445 0.01 10.173 0 8 0Z"
                            fill="white"
                          />
                          <path
                            d="M8 3.892C5.731 3.892 3.892 5.731 3.892 8C3.892 10.269 5.731 12.108 8 12.108C10.269 12.108 12.108 10.269 12.108 8C12.108 5.731 10.269 3.892 8 3.892ZM8 10.667C6.527 10.667 5.333 9.473 5.333 8C5.333 6.527 6.527 5.333 8 5.333C9.473 5.333 10.667 6.527 10.667 8C10.667 9.473 9.473 10.667 8 10.667Z"
                            fill="white"
                          />
                          <path
                            d="M13.23 3.729C13.23 4.261 12.798 4.693 12.266 4.693C11.734 4.693 11.302 4.261 11.302 3.729C11.302 3.197 11.734 2.765 12.266 2.765C12.798 2.765 13.23 3.197 13.23 3.729Z"
                            fill="white"
                          />
                        </svg>
                      </a>
                    </li>
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
