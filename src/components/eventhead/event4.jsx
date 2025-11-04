import React , {useState} from 'react';
import PropTypes from 'prop-types';



Portfolio4.propTypes = {
    data: PropTypes.array
};

function Portfolio4(props) {

    const {data} = props;

    const [dataBlock] = useState(
        {
            subheading: 'OTHER NOTABLE EVENTS',
            heading: 'Events conducted throughtout the year',
            
        }
    )
    return (
        <section className="portfolio" style={{ marginTop: '-60px' }}>
                <div className="shape"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="block-text center">
                                <h6 className="sub-heading"><span>{dataBlock.subheading}</span></h6>
                                <h3 className="heading pd">{dataBlock.heading}</h3>
                                    
                            </div>
                        </div>
                        {/* <div className="col-xl-6 col-md-6">
                            <div className="portfolio__left">
                                {
                                    data.map(idx => (
                                        <div key={idx.id} className="portfolio-box">
                                            <div className="step">Step {idx.id}</div>
                                            <div className="icon">
                                                <img src={idx.img} alt="Cyfonii" />
                                                    
                                            </div>
                                            <div className="content">
                                                <h5 className="title">{idx.title}</h5>
                                                <p>{idx.desc}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                                
                            </div>
                        </div> */}



                        {/* <div className="col-xl-6 col-md-6">
                            <div className="portfolio__right">
                                <div className="image" data-aos="fade-left" data-aos-duration="2000">
                                    <img src={img} alt="cyfonii" />
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
    );
}

export default Portfolio4;