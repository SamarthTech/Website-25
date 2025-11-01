import React , {useState} from 'react';
import PropTypes from 'prop-types';



Portfolio1.propTypes = {
    data: PropTypes.array
};

function Portfolio1(props) {

    const {data} = props;

    const [dataBlock] = useState(
        {
            subheading: 'Annual Fest Of Samarth',
            heading: 'Safalya \'23',
            
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

export default Portfolio1;
