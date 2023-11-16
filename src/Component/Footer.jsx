import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Imgfootr from '../assets/image/png/footerlogo.png'
import { Iconfootr1s } from './Icon'
import { Iconfootr2s } from './Icon'
import { Iconfootr3s } from './Icon'
import { Iconfootr4s } from './Icon'
import { Iconfootr5s } from './Icon'

const Footer = () => {
    return (
        <div>
            <div className='bg-hero-footer-img' id='free'>
                <Container className='ptop_footer'>
                    <Row className='pt-lg-5 pb-3'>
                        <Col lg={6} className='pt-5 mt-5'>
                            <span className='d-flex justify-content-center justify-content-lg-start'>
                                <img src={Imgfootr} alt="#" className='pt-5' />
                            </span>
                            <p className='mb-0 pt-4 fs_xs fw-light ff_primary text-white opacity-75 max_width_return text-center text-lg-start'>Rutrum mauris vitae at vitae augue placerat arcu in. Vel in elementum tempor enim accumsan enim a magna at.</p>
                            <p className='mb-0 pb-4 fs_xs fw-light ff_primary text-white opacity-75 text-center text-lg-start'> Dolor lorem nisi dignissim nulla.</p>
                            <div className='d-flex align-items-center gap-2 iconftr justify-content-center justify-content-lg-start'>
                                <span className='iconftr'> < Iconfootr1s /></span>
                                <span className='px-1 iconftr'> < Iconfootr2s /></span>
                                <span className='iconftr'>  < Iconfootr3s /></span>
                                <span className='px-1 iconftr'><Iconfootr4s /></span>
                                <span className='iconftr'> < Iconfootr5s /></span>
                            </div>
                        </Col>
                        <Col lg={6} className='pt-lg-5 mt-3 mt-lg-5 d-flex justify-content-center justify-content-lg-start'>
                            <div className='d-flex justify-content-lg-end mt-lg-5 pt-3 pt-lg-5 gap-5'>
                                <div className='d-flex flex-column'>
                                    <p className='ff_primary text-white fs_xs fw-light pb-1'>Important Links</p>

                                    <a href="#" className='fs_xs fw-light opacity-75 ff_primary text-white mb-0 pb-2 footr_link'>About Us</a>
                                    <a href="#" className='fs_xs fw-light opacity-75 ff_primary text-white mb-0 pb-2'>Features</a>
                                    <a href="#" className='fs_xs fw-light opacity-75 ff_primary text-white mb-0 pb-2'>Pricing</a>
                                    <a href="#" className='fs_xs fw-light opacity-75 ff_primary text-white mb-0 pb-2'>How It Work</a>
                                    <a href="#" className='fs_xs fw-light opacity-75 ff_primary text-white mb-0 pb-2'>New Features</a>
                                </div>
                                <div className='d-flex flex-column '>
                                    <p className='ff_primary text-white fs_xs fw-light pb-1'>Other Links</p>
                                    <a href="#" className='fs_xs fw-light opacity-75 ff_primary text-white mb-0 pb-2'>Testimonials</a>
                                    <a href="#" className='fs_xs fw-light opacity-75 ff_primary text-white mb-0 pb-2'>FAQs</a>
                                    <a href="#" className='fs_xs fw-light opacity-75 ff_primary text-white mb-0 pb-2'>Contact Us</a>
                                    
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className='d-flex justify-content-center mt-md-5'>
                        <p className='ff_primary fs_xs fw-light text-white pb-1 text-center text-lg-start'>Made with Powered by Petstar - <span className='text_underline'>DOG GROOMING BUSINESSES & PET SERVICES</span></p>
                    </div>
                </Container>
                <div className='position-relative footer_line'>
                </div>
            </div>

        </div>
    )
}

export default Footer