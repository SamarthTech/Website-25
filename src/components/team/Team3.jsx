import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { Link } from 'react-router-dom';

import line from '/images2/background/line-2.webp';
// import newGitHubIcon from '../../assets/images/new/github.webp';
// import newLinkedInIcon from '../../assets/images/new/linkdln.webp';

Team3.propTypes = {
  data: PropTypes.array,
};

function Team3(props) {
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

  const handleLinkedInClick = (event, link) => {
    event.stopPropagation();
    window.open(link.link1, '_blank');
  };

  const handleGitHubClick = (event, link) => {
    event.stopPropagation();
    window.open(link.link2, '_blank');
  };

  return (
    <section className="team s2">
      <div className="shape right"></div>
      <img src={line} alt="" className="img-line" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="block-text center">
              <h6 className="sub-heading">
                <span>STUDENT COMMITTEE</span>
              </h6>
              <h3 className="heading wow" data-splitting>
                Heads
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

                    {/* <ul className="list-social">
                      <li>
                        <Link to="#" onClick={(event) => handleLinkedInClick(event, idx.links)}>
                          <img src={newLinkedInIcon} alt="LinkedIn" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#" onClick={(event) => handleGitHubClick(event, idx.links)}>
                          <img src={newGitHubIcon} alt="GitHub" />
                        </Link>
                      </li>
                    </ul> */}
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

export default Team3;
