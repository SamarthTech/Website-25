import img1 from '/images2/resc/TABLE1.webp';
import img2 from '/images2/resc/TABLE2.webp';
import React , {useState} from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button';
import '../resources/style.scss'

import img from '/images2/background/line.webp'

UPSC_ESE.propTypes = {
    data: PropTypes.array
};

function UPSC_ESE() {

    const [dataBlock] = useState(
        {
            subheading: 'UPSC-ESE',
            heading: 'What is UPSC-ESE?',
            desc1: 'Engineering Services Examination (ESE) is conducted by UPSC which comprises of engineers who are designated as Class - 1 officer and work directly under the Indian Government. Selected candidates administer a large portion of the economy, that includes Telecommunications, Indian Railways, Central Water engineering, Power, Defence service of Engineers, and a lot more. The wide range of responsibilities performed by the Indian Engineering Services (IES) depends on the branch of their Engineering and the department in which they are recruited. It is a great opportunity to work for the nation but for your selection, you will have to undergo stringent selection criteria laid down by UPSC.',
        },
    );  
    const [dataBlock2] = useState(
        {
            heading: 'Selection process',
            desc1: 'The UPSC IES Selection process has three stages, namely, Prelims and Mains, followed by Personality Interview, and Document Verification. A candidate qualifying the Prelims & Mains will be called for a personal Interview. At the end provisionally selected students will have to appear for a document verification, where their documents will be checked for authenticity. Keep reading to know the detailed UPSC IES Selection Process and appear for the exam by filling the online applications before the last date to apply.',
        }
    );

    const [dataBlock3] = useState(
        {
            heading: 'Exam Pattern',
            desc1: 'For UPSC IES Prelims Examination',
            desc2: 'For UPSC IES Mains Examination:',
            desc3: 'For UPSC IES Personality Examination',
            desc4: 'There is a minimum UPSC IES Cut Off that a candidate has to score to clear the Prelims and Mains exam. Once you clear the Mains you will be informed about the selection and will then be called for an IES Personality Test. The personality test also known as a personal interview will be of 200 marks.',
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
                            </div>
                            
                            <br /><br />
                            
                            <div className="block-text center">
                                <h3 className="heading pd">{dataBlock3.heading}</h3>
                            </div>
                            <div className="about__main center">
                                <p className="mb-17">{dataBlock3.desc1}</p>
                                <img src={img1} className='code2' alt="Samarth" />
                                <p className="mb-30"><br /><br />{dataBlock3.desc2}</p>
                                <img src={img2} className='code2' alt="Samarth" />
                                <p className="mb-17"><br /><br />{dataBlock3.desc3}</p>
                                <p className="mb-17">{dataBlock3.desc4}</p>
                            </div>

                            <br /><br />
                            
                        </div>

                    </div>
                </div>
            </section>

    );
}

export default UPSC_ESE;