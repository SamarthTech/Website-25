import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from "swiper/react";
import newlogo from "/images2/new/whitelogo.webp";



import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";



import { EffectCoverflow, Autoplay, Pagination, Navigation } from "swiper";
import Button from '../button/Button';

Banner2.propTypes = {
    data: PropTypes.array
};

function Banner2(props) {
    const { data } = props;

    const [dataBlock] = useState(
        {
            subheading: 'Samarth',
            heading: 'Empowering Youth For Future',
            desc: 'SAMARTH, the educational society of Techno Main Salt Lake, founded in 2019. SAMARTH literally means Competent, strong and powerful.'
        }
    )
    return (
        <section className="banner s2">
            <div className="shape"></div>
            <div className="shape right"></div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="block-text center">
                            <h6 className="sub-heading"><span>{dataBlock.subheading}</span></h6>
                            <h2 className="heading pd">{dataBlock.heading}

                            </h2>
                            <p className="mb-34">{dataBlock.desc}</p>

                            <Button title='Get Connected' link='/contact' />
                        </div>

                        <div className="block-text center" style={{ marginTop: '80px' }}>
                            <h6 className="sub-heading"><span>Our Events</span></h6>
                            <h2 className="heading pd">Live Events</h2>
                        </div>
                        <div style={{
                            width: '100px',
                            height: '4px',
                            background: 'linear-gradient(90deg, #7C3AED, #A78BFA)',
                            margin: '0 auto',
                            borderRadius: '2px'
                        }}></div>

                        <Swiper
                            effect={"coverflow"}
                            grabCursor={true}
                            centeredSlides={true}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                500: {
                                    slidesPerView: 2,
                                },
                                700: {
                                    slidesPerView: 3,
                                },
                            }}
                            coverflowEffect={{
                                rotate: 30,
                                stretch: 15,
                                depth: 320,
                                modifier: 1,
                                slideShadows: false,
                            }}
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}



                            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                            className="bannerSwiper"
                        >

                            {
                                data.map(idx => (
                                    <SwiperSlide key={idx.id}>
                                        <div className="card-box" >
                                            <div className="top d-flex">
                                                {/* <span className="icon-logo-01"></span> */}
                                                <img src={newlogo} alt="My Image" style={{ width: '38px', height: '28px' }} />

                                                <div>
                                                    <h6>{idx.title}</h6>
                                                    <h6 className="price">{idx.price}</h6>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <div className="image">
                                                    <img src={idx.img} alt="Cyfonii" />
                                                </div>

                                                <div className="info d-flex">
                                                    <img src={idx.avt} alt="Cyfonii" />

                                                    <div >
                                                        <h6 className="name">{idx.name}</h6>
                                                        <p>{idx.tag}</p>
                                                    </div>
                                                </div>

                                                {/* Registration Button */}
                                                <div className="registration-btn" style={{
                                                    marginTop: '15px',
                                                    textAlign: 'center'
                                                }}>
                                                    {idx.isLive && idx.registrationLink ? (
                                                        <a
                                                            href={idx.registrationLink}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="action-btn"
                                                        >
                                                            <span>REGISTER NOW</span>
                                                        </a>
                                                    ) : idx.comingSoon ? (
                                                        <div className="action-btn" style={{ cursor: 'default' }}>
                                                            <span style={{
                                                                background: 'linear-gradient(264.28deg, #FFA500 -38.2%, #FF8C00 103.12%)',
                                                                cursor: 'default'
                                                            }}>
                                                                Register Now
                                                            </span>
                                                        </div>
                                                    ) : (
                                                        //registration closed state
                                                        <div className="action-btn" style={{ cursor: 'not-allowed', opacity: '0.7' }}>
                                                            <span style={{
                                                                background: 'linear-gradient(264.28deg, #6B7280 -38.2%, #4B5563 103.12%)',
                                                                cursor: 'not-allowed'
                                                            }}>
                                                                REGISTRATION CLOSED

                                                            </span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }



                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner2;
