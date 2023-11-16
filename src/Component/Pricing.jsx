import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Iconright1s } from './Icon'
import Imgellipsepri from '../assets/image/png/Ellipse_left_pricing.png'

const Pricing = () => {
    return (
        <>
            <div className='position-relative pt-lg-5'>
                <img src={Imgellipsepri} alt="#" className='Imgellipsepri position-absolute' />
                <Container className='py-lg-5'>
                    <div className='d-flex justify-content-center flex-column align-items-center'>
                        <p className='primary_color fs_lg fw-medium ff_secondary'>Pricing Plan</p>
                        <p className='primary_color ff_primary fs_xs fw-light'>Our Subscriptions, simple, flexible and designed for your business needs.</p>
                        <div className='d-flex align-items-center pb-5'>
                            <p className='fw-normal fs_smd text-black ff_secondary mb-0 me-1'>£ GBP</p>
                            <label class="switch">
                                <input type="checkbox" />
                                <span class="slider round"></span>
                            </label>
                            <p className='fw-normal fs_smd text-black ff_secondary mb-0 ms-1'>$ USD</p>
                        </div>
                    </div>
                    <Row>
                        <Col sm={6} md={4} lg={3} data-aos="flip-left">
                            <div className='card-free1s d-flex flex-column justify-content-between'>
                                <div>
                                    <p className='fs_esm fw-medium ff_secondary primary_color mb-0 pb-2'>Free</p>
                                    <p className='ff_primary fw-light fs_xs primary_color'>Great To Get You Started</p>
                                    <p className='ff_secondary primary_color fw-bold fs_md py-2 perhover'>£0<span className='fs_xs fw-normal'>/per month</span></p>
                                    <p className='ff_primary text-black fw-light opacity-75 fs_xsm mb-0 pb-2'><span className='pe-2'><Iconright1s /></span> Single User</p>
                                    <p className='ff_primary text-black fw-light opacity-75 fs_xsm mb-0 pb-2'><span className='pe-2'><Iconright1s /></span> Single Resource</p>
                                    <p className='ff_primary text-black fw-light opacity-75 fs_xsm mb-0 pb-2'><span className='pe-2'><Iconright1s /></span> 150 Clients</p>
                                    <p className='ff_primary text-black fw-light opacity-75 fs_xsm mb-0 pb-2'><span className='pe-2'><Iconright1s /></span> Unlimited Appointments</p>
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <button className='primary_color ff_secondary fs_esm fw_normal btn-getstart'>Get Started</button>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3} className='mt-4 mt-sm-0' data-aos="flip-right">
                            <div className='position-relative card-free1s d-flex flex-column justify-content-between '>
                                <div className='sms_box'>
                                    <p className='sms mb-0 ff_primary'>SMS Included</p>
                                </div>
                                <div>
                                    <p className='fs_esm fw-medium ff_secondary primary_color mb-0 pb-2'>Starter Plus</p>
                                    <p className='ff_primary fw-light fs_xs primary_color'>Business Essentials</p>
                                    <p className='ff_secondary primary_color fw-bold fs_md py-2 perhover'>£15<span className='fs_xs fw-normal'>/per month</span></p>
                                    <p className='ff_primary text-black fw-light opacity-75 fs_xsm mb-0 pb-2'><span className='pe-2'><Iconright1s /></span> Single User</p>
                                    <p className='ff_primary text-black fw-light opacity-75 fs_xsm mb-0 pb-2'><span className='pe-2'><Iconright1s /></span> Single Resource</p>
                                    <p className='ff_primary text-black fw-light opacity-75 fs_xsm mb-0 pb-2'><span className='pe-2'><Iconright1s /></span>Single User</p>
                                    <p className='ff_primary text-black fw-light opacity-75 fs_xsm mb-0 pb-2'><span className='pe-2'><Iconright1s /></span> Unlimited Appointments</p>
                                    <p className='ff_primary text-black fw-light opacity-75 fs_xsm mb-0 pb-2'><span className='pe-2'><Iconright1s /></span> Custom Pet Breeds</p>
                                    <p className='ff_primary text-black fw-light opacity-75 fs_xsm mb-0 pb-2'><span className='pe-2'><Iconright1s /></span> SMS Reminders</p>
                                    <p className='fw-bold text-black ff_primary fs_xsm'>100 SMS Credits</p>
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <button className='primary_color ff_secondary fs_esm fw_normal btn-getstart'>Get Started</button>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3} className='mt-4 mt-md-0' data-aos="flip-left">
                            <div className='card-free1s d-flex flex-column justify-content-between position-relative'>
                                <div className='sms_box'>
                                    <p className='sms mb-0 ff_primary'>SMS Included</p>
                                </div>
                                <div>
                                    <p className='fs_esm fw-medium ff_secondary primary_color mb-0 pb-2'>Premier</p>
                                    <p className='ff_primary fw-light fs_xs primary_color'>Ideal For Busy Businesses</p>
                                    <p className='ff_secondary primary_color fw-bold fs_md py-2 perhover'>£25<span className='fs_xs fw-normal'>/per month</span></p>
                                    <p className='ff_primary text-black fw-light opacity-75 fs_xsm mb-0 pb-2'><span className='pe-2'><Iconright1s /></span>Multi User</p>
                                    <p className='ff_primary text-black fw-light opacity-75 fs_xsm mb-0 pb-2'><span className='pe-2'><Iconright1s /></span> Multi Resource</p>
                                    <p className='ff_primary text-black fw-light opacity-75 fs_xsm mb-0 pb-2'><span className='pe-2'><Iconright1s /></span>Unlimited Clients</p>
                                    <p className='ff_primary text-black fw-light opacity-75 fs_xsm mb-0 pb-2'><span className='pe-2'><Iconright1s /></span> Unlimited Appointments</p>
                                    <p className='ff_primary text-black fw-light opacity-75 fs_xsm mb-0 pb-2'><span className='pe-2'><Iconright1s /></span> Custom Pet Breeds</p>
                                    <p className='ff_primary text-black fw-light opacity-75 fs_xsm mb-0 pb-2'><span className='pe-2'><Iconright1s /></span> Email Confirmations & Reminders</p>
                                    <p className='ff_primary text-black fw-light opacity-75 fs_xsm mb-0 pb-2'><span className='pe-2'><Iconright1s /></span>Email Marketing</p>
                                    <p className='ff_primary text-black fw-light opacity-75 fs_xsm mb-0 pb-2'><span className='pe-2'><Iconright1s /></span> Online Booking</p>
                                    <p className='ff_primary text-black fw-light opacity-75 fs_xsm mb-0 pb-2'><span className='pe-2'><Iconright1s /></span> Electronic Contracts</p>
                                    <p className='ff_primary text-black fw-light opacity-75 fs_xsm mb-0 pb-2'><span className='pe-2'><Iconright1s /></span> Mobile App</p>
                                    <p className='ff_primary text-black fw-light opacity-75 fs_xsm mb-0 pb-2'><span className='pe-2'><Iconright1s /></span>Reporting</p>
                                    <p className='ff_primary text-black fw-light opacity-75 fs_xsm mb-0 pb-2'><span className='pe-2'><Iconright1s /></span>Support</p>

                                </div>
                                <div className='d-flex justify-content-center'>
                                    <button className='primary_color ff_secondary fs_esm fw_normal btn-getstart'>Get Started</button>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3} className='mt-4 mt-lg-0' data-aos="flip-right">
                            <div className='card-free1s d-flex flex-column justify-content-between position-relative'>
                                <div className='sms_box'>
                                    <p className='sms mb-0 ff_primary'>SMS Included</p>
                                </div>
                                <div>
                                    <p className='fs_esm fw-medium ff_secondary primary_color mb-0 pb-2'>Premier</p>
                                    <p className='ff_primary fw-light fs_xs primary_color'>Ideal For Busy Businesses</p>
                                    <p className='ff_secondary primary_color fw-bold fs_md py-2 perhover'>£37<span className='fs_xs fw-normal'>/per month</span></p>
                                    <p className='ff_primary text-black fw-light opacity-75 fs_xsm mb-0 pb-2'><span className='pe-2'><Iconright1s /></span>Multi User</p>
                                    <p className='ff_primary text-black fw-light opacity-75 fs_xsm mb-0 pb-2'><span className='pe-2'><Iconright1s /></span> Multi Resource</p>
                                    <p className='ff_primary text-black fw-light opacity-75 fs_xsm mb-0 pb-2'><span className='pe-2'><Iconright1s /></span>Unlimited Clients</p>
                                    <p className='ff_primary text-black fw-light opacity-75 fs_xsm mb-0 pb-2'><span className='pe-2'><Iconright1s /></span> Unlimited Appointments</p>
                                    <p className='ff_primary text-black fw-light opacity-75 fs_xsm mb-0 pb-2'><span className='pe-2'><Iconright1s /></span> Custom Pet Breeds</p>
                                    <p className='ff_primary text-black fw-light opacity-75 fs_xsm mb-0 pb-2'><span className='pe-2'><Iconright1s /></span> Email Confirmations & Reminders</p>
                                    <p className='ff_primary text-black fw-light opacity-75 fs_xsm mb-0 pb-2'><span className='pe-2'><Iconright1s /></span>Email Marketing</p>
                                    <p className='ff_primary text-black fw-light opacity-75 fs_xsm mb-0 pb-2'><span className='pe-2'><Iconright1s /></span> Online Booking</p>
                                    <p className='ff_primary text-black fw-light opacity-75 fs_xsm mb-0 pb-2'><span className='pe-2'><Iconright1s /></span> Electronic Contracts</p>
                                    <p className='ff_primary text-black fw-light opacity-75 fs_xsm mb-0 pb-2'><span className='pe-2'><Iconright1s /></span> Mobile App</p>
                                    <p className='ff_primary text-black fw-light opacity-75 fs_xsm mb-0 pb-2'><span className='pe-2'><Iconright1s /></span>Reporting</p>
                                    <p className='ff_primary text-black fw-light opacity-75 fs_xsm mb-0 pb-2'><span className='pe-2'><Iconright1s /></span>Support</p>
                                    <p className='fw-bold text-black ff_primary fs_xsm'>200 SMS Credits</p>
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <button className='primary_color ff_secondary fs_esm fw_normal btn-getstart'>Get Started</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
           </div>
        </>
    )
}

export default Pricing