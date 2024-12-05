import React , {useState} from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button';

import img from '/images2/background/line.webp'

Cat.propTypes = {
    data: PropTypes.array
};

function Cat(props) {
    const {data} = props;

    const [dataBlock] = useState(
        {
            subheading: 'CAT',
            heading: 'What is CAT?',
            desc1: 'CAT exam stands for Common Admission Test, which is a computer-based test conducted in India for admission to management programs offered by various Indian Institutes of Management (IIMs) and other leading business schools. The exam is conducted once a year in the month of November. The CAT exam is highly competitive and attracts a large number of applicants every year.',
            // desc2: 'GATE is an All-India examination administered and conducted in eight zones across the country by the GATE Committee comprising of faculty members from IISc, Bangalore and other seven IIT’s on behalf of the National Coordinating Board, Department of Education, Ministry of Human Resources Development.',
           
        },
    );  
    const [dataBlock2] = useState(
        {
            heading: 'Eligibility',
            desc1: 'The candidate must have completed a Bachelor’s degree or an equivalent qualification from a recognized university or institution. Candidates who are in the final year of their Bachelor’s degree program are also eligible to apply.',
            desc2: 'The candidate must have a valid email address and phone number, as all communication regarding the exam will be done through these channels. The candidate must also have a valid government-issued ID proof, such as Aadhar card, passport, PAN card, driving license, etc.',
        }
    );

    const [dataBlock3] = useState(
        {
            heading: 'Exam Pattern',
            desc1: 'The exam consists of three sections: Verbal Ability and Reading Comprehension (VARC), Data Interpretation and Logical Reasoning (DILR) and Quantitative Ability (QA).',
            desc2: 'The duration of the exam is 2 hours and 40 minutes, and it consists of 100 multiple-choice questions.The CAT exam tests a candidate’s aptitude in quantitative techniques, data interpretation, logical reasoning, and language skills. The exam pattern is designed to assess a candidate’s problem-solving ability, analytical thinking, and decision-making skills.',
        }
    );

    const [dataBlock4] = useState(
        {
            heading: 'Marks Pattern',
            desc1: 'Verbal Ability and Reading Comprehension (VARC): This section consists of 34 questions and carries a total of 102 marks.',
            desc2: 'Data Interpretation and Logical Reasoning (DILR): This section consists of 32 questions and carries a total of 96 marks. The questions are designed to test a candidate’s ability to analyse and interpret complex data sets, and to identify logical patterns and structures.',
            desc3: 'Quantitative Ability (QA): This section consists of 34 questions and carries a total of 102 marks. The questions are designed to test a candidate’s mathematical skills, including arithmetic, algebra, geometry, and trigonometry.',
        }
    );
    
    const [dataBlock5] = useState(
        {
            heading: 'Perks of Cracking CAT',
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
                            <div className="about__main center" data-aos="fade-up" data-aos-duration="3000">
                                    <p className="mb-17">{dataBlock.desc1}</p>
                            </div>
                            <br /><br />
                            <div className="block-text center">
                                <h3 className="heading pd">{dataBlock2.heading}</h3>
                            </div>
                            <div className="about__main center" data-aos="fade-up" data-aos-duration="3000">
                                    <p className="mb-17">{dataBlock2.desc1}</p>
                                    <p className="mb-30">{dataBlock2.desc2}</p>
                            </div>
                            
                            <br /><br />
                            
                            <div className="block-text center">
                                <h3 className="heading pd">{dataBlock3.heading}</h3>
                            </div>
                            <div className="about__main center" data-aos="fade-up" data-aos-duration="3000">
                                <p className="mb-17">{dataBlock3.desc1}</p>
                                <p className="mb-30">{dataBlock3.desc2}</p>
                            </div>

                            <br /><br />
                            
                            <div className="block-text center">
                                <h3 className="heading pd">{dataBlock4.heading}</h3>
                            </div>
                            <div className="about__main center" data-aos="fade-up" data-aos-duration="3000">
                                <p className="mb-17">{dataBlock4.desc1}</p>
                                <p className="mb-30">{dataBlock4.desc2}</p>
                                <p className="mb-17">{dataBlock4.desc3}</p>
                                
                            </div>

                            <br /><br />
                            
                            <div className="block-text center">
                                <h3 className="heading pd">{dataBlock5.heading}</h3>
                            </div>

                            <div className="roadmap__main" data-aos="fade-up" data-aos-duration="2000">
                                {
                                    data.map(idx => (
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

export default Cat;