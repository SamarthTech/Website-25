import React , {useState} from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button';

import img from '/images2/background/line.webp'

Gate.propTypes = {
    data: PropTypes.array
};

function Gate(props) {
    const {data} = props;
    const {data2} = props;

    const [dataBlock] = useState(
        {
            subheading: 'GATE',
            heading: 'What is Gate Exam?',
            desc1: 'Graduate Aptitude Test in Engineering (GATE) is an examination which is conducted for Master of Engineering (ME), Masters in Technology (MTech) and direct PhD admissions to Indian Institutes of Technology (IITs), National Institutes of Technology (NITs), Indian Institutes of Information Technology (IIITs) and other institutes/universities across India. It also opens the gateway to booming public sector organisations (PSUs) and in the field of research. Some of the PSUs and research organizations which use GATE score for providing jobs include ONGC, NTPC, GAIL, HPCL, PGCIL, BHEL, BSNL, HPCL, NHPC, BARC, DRDO, etc.',
            desc2: 'GATE is an All-India examination administered and conducted in eight zones across the country by the GATE Committee comprising of faculty members from IISc, Bangalore and other seven IIT’s on behalf of the National Coordinating Board, Department of Education, Ministry of Human Resources Development.',
           
        },
    );  
    const [dataBlock2] = useState(
        {
            heading: 'What’s New?',
        }
    );

    const [dataBlock3] = useState(
        {
            heading: 'Career Options',
            desc1: 'With a successful attempt in GATE, an aspirant can choose the most suitable option from wide range of roads to travel to his final career destination.',
        }
    )

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
                                    <p className="mb-30">{dataBlock.desc2}</p>
                            </div>
                            <br /><br />
                            <div className="block-text center">
                                <h3 className="heading pd">{dataBlock2.heading}</h3>
                            </div>
                            <div className="roadmap__main">
                                {
                                    data.map(idx => (
                                        <div key={idx.id} className={`roadmap-box ${idx.class}`} >
                                            {/* <div className="time">{idx.time}</div> */}
                                            <div className="content">
                                                <h5 className="title">{idx.title}</h5>
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
                            
                            <div className="block-text center">
                                <h3 className="heading pd">{dataBlock3.heading}</h3>
                            </div>
                            <div className="about__main center">
                                <p className="mb-17">{dataBlock3.desc1}</p>
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

export default Gate;