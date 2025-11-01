import React , {useState} from 'react';
import PropTypes from 'prop-types';



Portfolio2.propTypes = {
    data: PropTypes.array
};

function Portfolio2(props) {

    const {data} = props;

    const [dataBlock] = useState(
        {
            subheading: 'More Events',
            heading: 'Special events',
            
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
                    </div>
                </div>
            </section>
    );
}

export default Portfolio2;
