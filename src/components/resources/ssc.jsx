import React , {useState} from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import img from '/images2/background/line.webp'

SSC_CGL.propTypes = {
    data: PropTypes.array
};

function SSC_CGL(props) {
    const {data} = props;
    const {data2} = props;

    const [dataBlock] = useState(
        {
            subheading: 'SSC-CGL',
            heading: 'What is SSC-CGL?',
            desc1: 'SSC CGL (Staff Selection Commission Combined Graduate Level) exam is a national-level competitive exam conducted by the Staff Selection Commission for the recruitment of candidates in various government organizations and departments. The exam is conducted in four tiers, with the first two being conducted in online mode and the next two being conducted in offline mode.',
        },
    );  
    const [dataBlock2] = useState(
        {
            heading: 'Exam Pattern',
            desc1: 'The SSC CGL examination is conducted in four tiers: Tier 1 and Tier 2 (Computer-based Examination, Objective MCQs), Tier 3 (Descriptive Paper in English/Hindi) and Tier 4 (Computer Proficiency Test/Skill Test).',
        }
    );

    const [dataBlock3] = useState(
        {
            heading: 'Eligibilty',
            desc1: 'Nationality: The candidate must either be a citizen of India or a subject of Nepal/Bhutan or a Tibetan refugee who came over to India before January 1, 1962, with the intention of permanently settling in India.',
            desc2: 'Age Limit: The candidate should be between 18 and 32 years of age. Age relaxations are provided for candidates belonging to certain categories.',
            desc3: 'Educational Qualification: The candidate must possess a bachelor’s degree in any discipline from a recognized university/institute. The educational qualification varies according to the post applied for.',
            desc4: 'Physical Standards: Certain posts under SSC CGL require specific physical standards, which vary based on the post applied for.',
            desc5: 'Nationality, age limit, and educational qualification are the general eligibility criteria for SSC CGL. Candidates are advised to refer to the official notification for specific details regarding eligibility criteria, including educational qualifications required for different posts, and physical standards required for specific posts.',
        }
    );
    const [dataBlock4] = useState(
        {
            heading: 'Preparation Tips',
        }
    );

    return (
        <section className="roadmap">
                <img src={img} alt="" className="img-line" />
                <div className="shape"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="block-text center">
                                <h6 className="sub-heading"><span>{dataBlock.subheading}</span></h6>
                                <h3 className="heading pd">{dataBlock.heading}</h3>
                            </div>
                            <div className="about__main center">
                                <p className="mb-17">{dataBlock.desc1}</p>
                            </div>
                            <br /><br />
                            <div className="block-text center">
                                <h3 className="heading pd">{dataBlock2.heading}</h3>
                            </div>

                            <div className="about__main center">
                                <p className="mb-17">{dataBlock2.desc1}</p>
                            </div><br />

                            <div className="roadmap__main s1 center">
                            <Swiper
               
                                    spaceBetween={30}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                            },
                                        500: {
                                            slidesPerView: 1,
                                            },
                                        768: {
                                            slidesPerView: 2,
                                        },
                                        991: {
                                            slidesPerView: 4,
                                        },
                                    }}
                                    className="roadmap-swiper"

                                    modules={[Autoplay, Pagination, Navigation]}
                                    
                                    autoplay={{
                                        delay: 1500,
                                        disableOnInteraction: false,
                                      }}
                                >
                                {
                                    data.map(idx => (
                                        <SwiperSlide key={idx.id}>
                                            <div className="roadmap-box">
                                                        {/* <div className="time">{idx.time}</div> */}
                                                        <div className="content">
                                                            <h5 className="title">{idx.title}</h5>
                                                            <p className="text">{idx.desc1}</p>
                                                            <p className="text">{idx.desc2}</p>
                                                            <p className="text">{idx.desc3}</p>
                                                            <p className="text">{idx.desc4}</p>
                                                        </div>
                                                        
                                                    </div>
                                        </SwiperSlide>
                                        
                                    ))
                                }
                            </Swiper>
                            </div>
                            
                            
                            <br /><br />
                            
                            <div className="block-text center">
                                <h3 className="heading pd">{dataBlock3.heading}</h3>
                            </div>
                            <div className="about__main center">
                                <p className="mb-17">{dataBlock3.desc1}</p>
                                <p className="mb-30">{dataBlock3.desc2}</p>
                                <p className="mb-17">{dataBlock3.desc3}</p>
                                <p className="mb-17">{dataBlock3.desc4}</p>
                                <p className="mb-17">{dataBlock3.desc5}</p>
                            </div>

                            <br /><br />

                            <div className="block-text center">
                                <h3 className="heading pd">{dataBlock4.heading}</h3>
                            </div>
                            <div className="roadmap__main">
                                {
                                    data2.map(idx => (
                                        <div key={idx.id} className={`roadmap-box ${idx.class}`} >
                                            {/* <div className="time">{idx.time}</div> */}
                                            <div className="content">
                                                {/* <h5 className="title">{idx.title}</h5> */}
                                                <p className="text">{idx.desc}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                               
                                <div className="icon"></div>
                                <div className="icon bottom"></div>

                                
                            </div>
                            <div className="button">
                                {/* <Button title='View Full Road Map' link='/road-map' /> */}
                            </div>
                            <br /><br />
                            

                        </div>

                    </div>
                </div>
            </section>

    );
}

export default SSC_CGL;