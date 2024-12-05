import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { Link } from 'react-router-dom';

import line from '/images2/background/line-2.webp';

Team2.propTypes = {
  data: PropTypes.array,
};

function Team2(props) {
  const { data } = props;
  const [swiper, setSwiper] = useState(null);
  const swiperRef = useRef(null);
  const [slidesPerView, setSlidesPerView] = useState(3); 

  useEffect(() => {
    if (swiper) {
      swiper.update();
    }
  }, [swiper]);

  useEffect(() => {
    const handleResize = () => {
      
      if (window.innerWidth <= 768) {
        setSlidesPerView(1); 
      } else {
        setSlidesPerView(3); 
      }
    };

    
    handleResize();
    window.addEventListener('resize', handleResize);

    const swiperAutoScroll = setInterval(() => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideNext();
      }
    }, 2000);

    return () => {
      clearInterval(swiperAutoScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="team s2">
      <div className="shape right"></div>
      <img src={line} alt="" className="img-line" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="block-text center">
              <h6 className="sub-heading">
                <span>Facullty Advisors</span>
              </h6>
              <h3 className="heading wow" data-splitting>
                Honourable Teacher
                <br />
                Committee
              </h3>
            </div>
          </div>
          <Swiper
            ref={swiperRef}
            spaceBetween={20}
            slidesPerView={slidesPerView} 
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2000, 
              disableOnInteraction: false,
            }}
            effect={'coverflow'}
            grabCursor={true}
            pagination={{ clickable: true }}
            onSwiper={setSwiper}
          >
            {data.map((idx) => (
              <SwiperSlide key={idx.id} className="col-xl-3 col-md-6">
                <div className="team-box">
                  <div className="image">
                    <Link to="/team">
                      <img src={idx.img} alt="Cyfonii" />
                    </Link>
                    {/* Social media links */}
                  </div>
                  <div className="content">
                    <Link to="/team" className="h5 name">
                      {idx.name}
                    </Link>
                    <p className="position">{idx.position}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Team2;
