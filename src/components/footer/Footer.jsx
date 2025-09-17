import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/images2/new/whitelogo.webp';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faTwitter, faFacebookF, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// Specify all properties: name, family, style


function Footer(props) {
    return (
        
        <footer class="footer-section">
            <div class="container">
                <hr class="hr-line"></hr>
                <div class="footer-cta pt-5 pb-5">
                    <div class="row">
                        <div class="footer-box col-xl-4 col-md-4 mb-30">
                            <div class="single-cta">
                                <div class="cta-text1">
                                    <a href="https://www.google.com/maps/place/Techno+Main+Salt+Lake/@22.5761707,88.4244544,17z/data=!3m1!4b1!4m6!3m5!1s0x3a02751a9d9c9e85:0x7fe665c781b10383!8m2!3d22.5761707!4d88.4270293!16s%2Fg%2F11fml2v54k?authuser=0&entry=ttu" target="blank"><i><FontAwesomeIcon icon={faLocationDot} /></i></a>
                                    <h4>Find us</h4>
                                    <span>Techno Main Salt Lake, <br />EM-4/1, Sector-V, Salt Lake, <br />Kolkata : 700 091</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta">
                                <div className="cta-text">
                                    <i><FontAwesomeIcon icon={faPhone} /></i>
                                    <h4>Call us</h4>
                                    <span>
                                        <div href="tel:+918240542475">+91 8240542475</div>
                                        <div href="tel:+919153491144">+91 9153491144</div>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-4 mb-30">
                            <div class="single-cta">
                                <div className="cta-text2">
                                    <i><FontAwesomeIcon icon={faEnvelopeOpen} /></i>
                                    <h4>Mail us</h4>
                                    <span>
                                        <a href="mailto:samarth.tmsl@gmail.com">samarth.tmsl@gmail.com</a>
                                    </span>
                                    <br />
                                    <p>
                                        <a href="mailto:business.samarth.tmsl@gmail.com">business.samarth.tmsl@gmail.com</a>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <hr class="hr-line"></hr>
                <div class="footer-content pt-3 pb-3">
                    <div class="row">
                        <div class="col-xl-12 col-lg-4 ">
                            <div class="footer-widget">

                                <div className="footer-video-container">
                                    <video 
                                        src="/videos/Footer-Video.mp4" 
                                        autoPlay 
                                        loop 
                                        muted 
                                        playsInline
                                    >Change Your Browser Broo!
                                    </video>
                                </div>
                                <div class="footer-social-icons">
                                    <span className='d-flex justify-content-center'>Follow us</span>
                                    <div class="d-flex justify-content-center">
                                        <a href="https://m.facebook.com/SamarthTMSL?fref=nf&refid=52&__tn__=%7E-R" target="blank"><i><FontAwesomeIcon icon={faFacebookF} /></i></a>
                                        <a href="https://twitter.com/SamarthTmsl" target="blank"><i><FontAwesomeIcon icon={faTwitter} /></i></a>
                                        <a href="https://www.instagram.com/samarth_tmsl_official/" target="blank"><i><FontAwesomeIcon icon={faInstagram} /></i></a>
                                        <a href="https://www.linkedin.com/company/samarthtmsl/" target="blank"><i><FontAwesomeIcon icon={faLinkedin} /></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;
