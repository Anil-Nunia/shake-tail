import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Navlogoimg from '../assets/image/png/navlogoimg1s.png'
import { Col, Container, Row } from 'react-bootstrap';
import Imgmobile from '../assets/image/png/imgmobile.png'
import Imgcard1s from '../assets/image/png/img-card-ellipse1.png'
import { Iconright } from './Icon';

const Hero = () => {
    const [menu, setMenu] = useState(false);
    if (menu === true) {
        document.body.classList.add("overflow-hidden");
    } else {
        document.body.classList.remove("overflow-hidden");
    };
    const navlk = () =>
        [
            setMenu (false)
        ]
    return (
        <>
            <div className='bg-herroimg min-vh-100' id='home'>
                <Container>
                    <div className='d-flex align-items-center justify-content-between py-3'>
                        <img src={Navlogoimg} alt="#" className='Navlogoimg' />
                        <div className={`${menu ? 'show-nav' : 'nav-fix'}`}>
                            <div className='d-lg-none crossIconset'
                                onClick={() => setMenu(false)}>
                                <h3 className='z-3'><span className='text-white fs_lg fw-semibold'>&#x2715;</span></h3>
                            </div>
                            <ul className='mb-0 ps-0 d-flex align-items-center flex-column flex-lg-row gap-4'>
                                <li><a href="#home" className='ff_primary fs_xs fw-medium text-white after_line-nav' onClick={navlk}>Home</a></li>
                                <li><a href="#features" className='ff_primary fs_xs fw-medium text-white px-1 after_line-nav' onClick={navlk}>Features</a></li>
                                <li><a href="#pricing" className='ff_primary fs_xs fw-medium text-white after_line-nav' onClick={navlk}>Pricing</a></li>
                                <li><a href="#free" className='ff_primary fs_xs fw-medium text-white px-1 after_line-nav' onClick={navlk}>Free Trial</a></li>
                                <button onClick={() => setMenu(false)} className='btn_sign fs_esm fw-normal ff_secondary text-white'>Sign In</button>
                            </ul>
                        </div>
                        <div className='d-lg-none z-3 d-flex align-items-center'>
                            <Link onClick={() => setMenu(true)}>
                                <span className='text-white fw-bold fs_md'>&#x2630;</span></Link>
                        </div>
                    </div>

                    <Row>
                        <Col lg={7} className='pt-lg-5 mt-lg-5' data-aos="fade-right">
                            <div className='p-lg-5 mt-2'>
                                <h1 className='ff_secondary fs_2xl fw-bold text-white line-height1smart mb-0 text-center text-lg-start'>Smart, Simple Software</h1>
                                <div className='max-width-dog '>
                                    <p className='ff_primary fw-medium fs_esm text-white line-height-dog mb-3 text-center text-lg-start'>Dog Grooming Software, helping to reduce 'no shows' with appointment confirmations, reminders & more.</p>
                                </div>
                                <div className='d-flex align-items-center gap-3 mt-3 justify-content-center justify-content-lg-start'>
                                    <button className='btn_free fs_esm fw-normal ff_primary text-white'>Free Trial</button>
                                    <button className='btn_explore fs_esm fw-normal ff_primary text-white'>Explore More</button>
                                </div>
                            </div>
                        </Col>
                        <Col lg={5} className='position-relative justify-content-center d-flex' data-aos="fade-left">
                            <div className='mt-4 '>
                                <img src={Imgmobile} alt="#" className='w-100' />
                                <div className='card1-hero d-flex align-items-center'>
                                    <img src={Imgcard1s} alt="#" />
                                    <span className='ms-2'>
                                        <p className='fs_sxsm fw-bold ff_primary text-black mb-0'>Esther Howard</p>
                                        <p className='fw-light ff_primary text-black fs_vsm mb-0'>Manager</p>
                                    </span>
                                </div>
                                <div className='card2-hero d-flex align-items-center'>
                                    <Iconright />
                                    <span className='ms-2'>
                                        <p className='fs_sxsm fw-bold ff_primary text-black mb-0'>Theresa Webb</p>
                                        <p className='fw-light ff_primary text-black fs_vsm mb-0'>CEO</p>
                                    </span>
                                </div>
                            </div>
                        </Col>
                    </Row>

                </Container>


            </div>
        </>
    )
}

export default Hero