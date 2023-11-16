import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
import { Iconbulb } from './Icon';
import { Iconmessage } from './Icon';

const Help = () => {
    return (
        <div>
            <Container className='py-lg-5 pt-3'>
                <p className='primary_color ff_secondary fs_lg fw-medium mb-0 text-center text-lg-start'>FAQ’s</p>
                <Row className='py-lg-5 align-items-center'>
                    <Col lg={7} data-aos="fade-up-right">
                        <div>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header> <p className='fs_esm fw-medium primary_color ff_primary opacity-75'>Do you have a mobile app?</p> </Accordion.Header>
                                    <Accordion.Body>
                                        <p className='ff_primary fw-light primary_color fs_xs opacity-75'>Yes, our mobile app is available to premier and premier plus subscribers, allowing you to manage your business on the go.</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header> <p className='fs_esm fw-medium primary_color ff_primary opacity-75'>Do you support start-up business?</p> </Accordion.Header>
                                    <Accordion.Body>
                                        <p className='ff_primary fw-light primary_color fs_xs opacity-75'> Yes, our mobile app is available to premier and premier plus subscribers, allowing you to manage your business on the go.</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header> <p className='fs_esm fw-medium primary_color ff_primary opacity-75'>I’ve used up all my monthly SMS credits, can I buy more?</p> </Accordion.Header>
                                    <Accordion.Body>
                                        <p className='ff_primary fw-light primary_color fs_xs opacity-75'> Yes, our mobile app is available to premier and premier plus subscribers, allowing you to manage your business on the go.</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header> <p className='fs_esm fw-medium primary_color ff_primary opacity-75'>What do I need to access the system?</p> </Accordion.Header>
                                    <Accordion.Body>
                                        <p className='ff_primary fw-light primary_color fs_xs opacity-75'> Yes, our mobile app is available to premier and premier plus subscribers, allowing you to manage your business on the go.</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header> <p className='fs_esm fw-medium primary_color ff_primary opacity-75'>Can you import my data?</p> </Accordion.Header>
                                    <Accordion.Body>
                                        <p className='ff_primary fw-light primary_color fs_xs opacity-75'> Yes, our mobile app is available to premier and premier plus subscribers, allowing you to manage your business on the go.</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                       </div>

                    </Col>
                    <Col lg={5} className='mt-5 mt-lg-0 justify-content-lg-end d-flex justify-content-center' data-aos="fade-up-left">
                        <div className='card_need d-flex flex-column justify-content-center text-center'>
                            <p className='fw-medium ff_secondary primary_color fs_md mb-0 pb-2'>Need help?</p>
                            <p className='primary_color ff_primary fs_xs fw-light opacity-75'>Ask our support team</p>
                            <span>
                                <button className='fs_esm fw-normal ff_secondary text-white btn_new '><Iconbulb /> New Idea?</button>
                            </span>
                            <span>
                                <button className='fs_esm fw-normal ff_secondary text-white btn_contacts mt-4'> <span className='me-2'><Iconmessage /></span>Contact Us</button>
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Help