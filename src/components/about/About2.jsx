import React , {useState} from 'react';

import img1 from '/images2/new/kalkriti.webp';
import img2 from '/images2/layouts/about-02.webp'
import img3 from '/images2/layouts/about-03.webp'
import img4 from '/images2/layouts/about-04.webp'
import img5 from '/images2/layouts/about-05.webp'
import Button from '../button/Button';



function About2(props) {

    const [dataImg] = useState([
        {
            id: 1,
            img : img1,
            class: 'img1'
        },
        // {
        //     id: 2,
        //     img : img2,
        //     class: 'img2'
        // },
        // {
        //     id: 3,
        //     img : img3,
        //     class: 'img3'
        // },
        // {
        //     id: 4,
        //     img : img4,
        //     class: 'img4'
        // },
        // {
        //     id: 5,
        //     img : img5,
        //     class: 'img5'
        // },
    ])

    const [dataBlock] = useState(
        {
            subheading: 'Graphics Wing',
            heading: 'Kalakriti',
            desc1: 'With pixels as our palette, we paint the canvas of imagination." Step into Kalakriti, the ethereal realm where visions take digital form' ,
            desc2 :'Our emblem, a palette and stylus, transforms mere ideas into breathtaking digital tapestries, each stroke an echo of artistic innovation.'

        }
    )
    return (
        <section className="about">
                <div className="shape"></div>
                <div className="container">
                    <div className="row rev">
                        <div className="col-xl-6 col-md-12">
                            <div className="about__left">
                                <div className="images">
                                    {
                                        dataImg.map(idx => (
                                            <img key={idx.id} className={idx.class} src={idx.img} alt="cyfonii" />
                                        ))
                                    }
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="about__left">
                                <div className="block-text" >
                                    <h6 className="sub-heading"><span>{dataBlock.subheading}</span></h6>
                                    <h3 className="heading">{dataBlock.heading}</h3>
                                        <p className="mb-17">{dataBlock.desc1}</p>
                                        <p className="mb-26">{dataBlock.desc2}</p>
                                        {/* <Button link='/about' title='More About Us' /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <style>
                    {`
                        @media (max-width: 767px){
                            .about{
                                padding-bottom:0px !important;
                            }
                        }`
                    }
                </style>
                </div>
            </section>
    );
}

export default About2;
