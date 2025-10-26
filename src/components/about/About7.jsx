import React , {useState} from 'react';

import img1 from '/images2/new/Sampreshan.webp';
import img2 from '/images2/layouts/about-02.webp'
import img3 from '/images2/layouts/about-03.webp'
import img4 from '/images2/layouts/about-04.webp'
import img5 from '/images2/layouts/about-05.webp'
import Button from '../button/Button';



function About7(props) {

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
            subheading: 'Outreach Wing',
            heading: 'Sampreshan',
            desc1: '"Through the lens, we capture the symphony of fleeting moments."' ,
            desc2 : "Sampreshan, the storytellers through the visual prism. Our emblem, a camera's lens, encapsulates the essence of fleeting instants, immortalizing the dynamic energy of Samarth's journey"
        }
    )
    return (
        <section className="about">
                <div className="shape"></div>
                <div className="container">
                    <div className="row rev">
                        <div className="col-xl-6 col-md-12">
                            <div className="about__right">
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
                            <div className="block-text" >
                                <h6 className="sub-heading"><span>{dataBlock.subheading}</span></h6>
                                <h3 className="heading">{dataBlock.heading}</h3>
                                    <p className="mb-17">{dataBlock.desc1}</p>
                                    <p className="mb-26">{dataBlock.desc2}</p>
                                    {/* <Button link='/about' title='More About Us' /> */}
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

export default About7;