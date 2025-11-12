import React , {useState} from 'react';
import PropTypes from 'prop-types';



Resulthead.propTypes = {
    data: PropTypes.array
};

function Resulthead() {


    const [dataBlock] = useState(
        {
            subheading: 'Where Efforts meet Success!',
            heading: 'Discover Event Results',  
        }
    )
    return (
        <section className="portfolio" >
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

export default Resulthead;
