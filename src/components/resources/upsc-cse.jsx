import React , {useState} from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button';

import img from '/images2/background/line.webp'

UPSC_CSE.propTypes = {
    data: PropTypes.array
};

function UPSC_CSE() {

    const [dataBlock] = useState(
        {
            subheading: 'UPSC-CSE',
            heading: 'What is UPSC-CSE?',
            desc1: 'The Civil Services Examination (CSE) is a national competitive examination in India conducted by the Union Public Service Commission for recruitment to higher Civil Services of the Government of India, including the Indian Administrative Service, Indian Foreign Service, and Indian Police Service.',
        },
    );  
    const [dataBlock2] = useState(
        {
            heading: 'Basic Qualifications',
            desc1: 'Educational Qualification: Candidate must hold a Graduate Degree from a recognised University.',
            desc2: 'Age Limit: Candidate must be a minimum of 21 years of age and must not be more than 32 years of age.',
            desc3: 'The number of attempts: General Category candidates have 6 attempts till 32 years of age, OBC candidates have 9 attempts till 35 years of age and SC/ST candidates have Unlimited attempts till 37 years of age.',
        }
    );

    const [dataBlock3] = useState(
        {
            heading: 'Exam Pattern',
            desc1: 'The UPSC Prelims comprises two objective type papers (General Studies I and General Studies II or CSAT) for a total of 400 marks. Both papers are usually held on the same day in two sessions via offline mode (pen-paper). It is objective type in nature and consists of two papers carrying 200 marks each.',
            desc2: 'UPSC CSE Preliminary Exam is objective type in nature, whereas, the UPSC CSE Mains exam comprises of 9 Subjective papers and a Personality Test (Interview).',
            desc3: 'While the score in GS Paper-I determines whether or not you qualify for the cut off of prelims, CSAT is qualifying in nature. You only need to score more than 33% or 66 marks for the CSAT paper. Altogether, the preliminary exam is qualifying in nature. Thus, the score does not add up to the final merit.',
            desc4: 'Mostly, the marks awarded for the interview ranges from 40% to 80%. The candidates who score a little less in the main examination written part can make it to the final list if he/she scores well in the interview.',
        }
    );

    const [dataBlock4] = useState(
        {
            heading: 'Phases',
            desc1: 'Broadly, UPSC conducts the Civil Service Examination in three phases namely Preliminary Examination, Main Examination and Personality Test (Interview).',
            desc2: 'Candidates who qualify for all the rounds are recommended for joining the civil services in India. Each round is an elimination round, so you need to qualify each one in order to appear for the next one.',
        }
    );
    
    const [dataBlock5] = useState(
        {
            heading: 'Marks Pattern',
            desc1: 'A candidate’s rank in UPSC Civil Service Exam depends only on the mark scored in Main and Interview. The main exam has 1750 marks while interview has 275 marks. The written examination (main) will consist of the following nine papers, but only 7 papers will be counted for final merit ranking.',
            desc2: 'Candidates who qualify for all the rounds are recommended for joining the civil services in India. Each round is an elimination round, so you need to qualify each one in order to appear for the next one.',
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
                                <p className="mb-30">{dataBlock2.desc2}</p>
                                <p className="mb-17">{dataBlock2.desc3}</p>
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
                            </div>

                            <br /><br />
                            
                            <div className="block-text center">
                                <h3 className="heading pd">{dataBlock4.heading}</h3>
                            </div>
                            <div className="about__main center">
                                <p className="mb-17">{dataBlock4.desc1}</p>
                                <p className="mb-30">{dataBlock4.desc2}</p> 
                            </div>

                            <br /><br />
                            
                            <div className="block-text center">
                                <h3 className="heading pd">{dataBlock5.heading}</h3>
                            </div>
                            <div className="about__main center">
                                <p className="mb-17">{dataBlock5.desc1}</p>
                                <p className="mb-30">{dataBlock5.desc2}</p> 
                            </div>

                            <br /><br />
                        </div>

                    </div>
                </div>
            </section>

    );
}

export default UPSC_CSE;