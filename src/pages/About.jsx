import React, { useEffect } from 'react';
import './FlipBoxStyles.css';
// import pravidhiImage from '/images2/new/techlogo.webp';
// import graphics from '/images2/new/kalkriti.webp';
// import content from '/images2/new/content.webp';
// import eductation from '/images2/new/eductation.webp';
// import research from '/images2/new/Anveshan.webp';
// import cultural from '/images2/new/SANGAM.webp';
// import photo from '/images2/new/pratibimb.webp';
import About1 from '../components/about/About1';
import About2 from '../components/about/About2';
import About3 from '../components/about/About3';
import About4 from '../components/about/About4';
import About5 from '../components/about/About5';
import About6 from '../components/about/About6';
import About7 from '../components/about/About7';
// import media from '/images2/new/Sampreshan.webp';
// import blackbg from '/images2/new/purple.webp';
import PageTitle from '../components/pagetitle/PageTitle_Explore';

const Wings = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
        } else {
          entry.target.classList.remove('fade-in-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="wrapper">
      <PageTitle title='Wings' desc='Know More About Us Here' />
      
      <div className="about-content">
        <div className="scroll-animate"><About1 /></div>
        <div className="scroll-animate"><About2 /></div>
        <div className="scroll-animate"><About3 /></div>
        <div className="scroll-animate"><About4 /></div>
        <div className="scroll-animate"><About5 /></div>
        <div className="scroll-animate"><About6 /></div>
        <div className="scroll-animate"><About7 /></div>
      </div>
    <style>{`

        .container {
          max-width: 1140px;
          width: 100%;
          margin: auto;
        }

        .row > * {
          padding-left: 15px;
          padding-right: 15px;
        }

        /* Shape styles */
        .shape {
          position: absolute;
          border-radius: 50%;
          filter: blur(50px);
          z-index: -1;
          opacity: 0.5;
        }

        .shape.right {
          right: -20%;
          top: -110%;
        }

       .shape.s3 {
          background: linear-gradient(216.56deg, #E250E5 5.32%, #4B50E6 94.32%);
        }
    
        /* Page Title Styles */
        .page-title {
          position: relative;
          background: url('../../src/assets/images/background/bg-banner.webp') no-repeat;
          padding: 24px 0;
          background-size: cover;
          background-position: center;
        }

        .page-title .shape {
          top: -110%;
          left: -20%;
          width: 800px;
          height: 800px;
        }

        .page-title .page-title__body {
          background: linear-gradient(89.96deg, rgba(255, 255, 255, 0.05) 0.03%, rgba(255, 255, 255, 0.008) 49.67%, rgba(255, 255, 255, 0.05) 99.96%);
          backdrop-filter: blur(2px);
          border-radius: 26px;
          padding: 16px;
        }

        .page-title .page-title__main {
          background: linear-gradient(264.28deg, #DEC7FF -38.2%, #5C27FE 103.12%), linear-gradient(89.96deg, rgba(255, 255, 255, 0.05) 0.03%, rgba(255, 255, 255, 0.008) 49.67%, rgba(255, 255, 255, 0.05) 99.96%);
          backdrop-filter: blur(2px);
          border-radius: 26px;
          padding: 30px;
          text-align: center;
        }

        .page-title .page-title__main .title {
          color: #fff;
          font-size: 42px;
          margin-bottom: 15px;
        }

        .page-title .page-title__main .bottom {
          padding-top: 35px;
          margin-top: 30px;
          position: relative;
        }

        .page-title .page-title__main .bottom::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          right: 50%;
          transform: translate(-50%, -50%);
          height: 1px;
          width: 96px;
          background: rgba(255, 255, 255, 0.1);
        }

        .page-title .page-title__main .bottom p {
          font-size: 12px;
          color: #fff;
          margin-bottom: 15px;
        }

        .page-title .page-title__main .bottom .list-social {
          margin-top: 0;
        }

        .page-title .breacrumb {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 15px;
        }

        .page-title .breacrumb li {
          margin: 0 16px;
          font-weight: 300;
          font-size: 14px;
          color: #d7d8d8;
          font-family: 'Readex Pro';
        }

        .page-title .breacrumb li a {
          font-weight: 300;
          font-size: 14px;
          color: #fff;
          font-family: 'Readex Pro';
          text-decoration: none;
        }

        .page-title .breacrumb li a:hover {
          color: var(--primary-color);
        }

        .page-title .breacrumbs {
          color: #fff;
          margin-top: 10px;
        }

        .list-social {
          display: flex;
          justify-content: center;
          gap: 3px;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .list-social li a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .list-social li a:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-3px);
        }

        .list-social li a svg {
          transition: all 0.3s ease;
        }

        .list-social li a:hover svg {
          transform: scale(1.2);
        }

        /* Animation styles */
        .scroll-animate {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .scroll-animate.fade-in-visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Content styles */
        .about-content {
          min-height: auto;
          height: auto;
          margin-bottom: 0;
          padding: 40px 0;
        }
      `}</style>

    </div>
  );
};

export default Wings;
