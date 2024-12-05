import React , {useState} from 'react';

import img1 from '/images2/new/pratibimb.webp';
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
            subheading: 'Photography Wing',
            heading: 'Pratibimb',
            desc1: '"In every click, time stands still, and emotions echo forever."' ,
            desc2 :'Pratibimb, the guardian of ephemeral beauty. Our emblem, a lens, transforms transient moments into eternal memories, each photograph a portal to traverse the realm of emotions frozen in time.'
            
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