import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Imgcustmr from '../assets/image/png/imgcustomercopm.png'
import { Iconfeature1img } from './Icon'
import { Iconfeature2img } from './Icon'
import { Iconfeature3img } from './Icon'
import { Iconfeature4img } from './Icon'
import Elpise from '../assets/image/png/elipse1s.png'

const Customer = () => {
  return (
      <>
          <div className='bg-hero-img-customer bg-blue position-relative' id='pricing'>
              <span className='elps_customer'></span>
              <Container className='py-lg-5'>
                  <Row className='pt-lg-5'>
                      <Col lg={6} className='pt-5' data-aos="fade-down-right">
                          <p className='ff_secondary primary_color fw-medium fs_lg text-capitalize text-center text-lg-start'>Let your customer experience shine</p>
                          <p className='primary_color ff_primary fw-light fs_xs  line_height-automated mx-width-automated text-center text-lg-start'>Automated client rating, provides instant feedback on client booking history, partner this with your own Loyalty program.</p>
                          <span className='d-flex justify-content-center justify-content-lg-start'>
                              <button className='btn-trial fw-normal ff_secondary text-white fs_esm'>Free Trial</button>
                         </span>
                      </Col>
                      <Col lg={6} data-aos="fade-down-left">
                          <div className=' position-relative z-1'>
                              <img src={Imgcustmr} alt="#" className='w-100' />
                              <div className='half-day position-absolute z-3'>
                                  <span className='inner-half-day position-absolute'>
                                      <p className='text-black ff_primary fw-medium fs_sxms mb-0'>1:00 - 7:00</p>
                                      <p className='fs_evsm fw-medium ff_primary text-black'>Half Day</p>
                                  </span>
                              </div>
                     </div>
                        
                      </Col>
                  </Row>

                      <Row className='pt-lg-5 '>
                          <div className='d-flex justify-content-center flex-column align-items-center text-center py-md-5'>
                              <p className='ff_secondary fw-medium text-white fs_lg pt-lg-5 text-center text-lg-start'>Features</p>
                          <p className='text-white fs_xs fw-light ff_primary max-width-shakeyour text-center text-lg-start'>ShakeYourTail provides your business with the following key features to run an successful dog grooming business.</p>
                          </div>
                      <Col sm={6} md={4} lg={3} className='d-flex justify-content-center' data-aos="flip-left">
                              <div className='card-feature1s'>
                                  <img src={Elpise} alt="#" className='ellipe1ss'/>
                                  <Iconfeature1img />
                                  <p className=' ff_secondary primary_color fw-medium fs_esm mb-0 pb-2'>Schedule</p>
                                  <p className='primary-color ff_primary fs_xs fw-light opacity-75 mb-0'>Powerful and easy to use, book appointments for your team members and view a colour coded schedule, at a glance.</p>
                              </div>
                          </Col>
                      <Col sm={6} md={4} lg={3} className='mt-4 mt-sm-0 d-flex justify-content-center' data-aos="flip-right">
                          <div className='card-feature1s'>
                              <img src={Elpise} alt="#" className='ellipe1ss' />
                                  < Iconfeature2img />
                                  <p className=' ff_secondary primary_color fw-medium fs_esm mb-0 pb-2'>Clients & Pets</p>
                                  <p className='primary-color ff_primary fs_xs fw-light opacity-75 mb-0'>Managing your Clients is effortless; Record Client details, view appointment history, breed, photos, medical notes, vet contact, groom note Client loyalty and more.</p>
                              </div>
                          </Col>
                      <Col sm={6} md={4} lg={3} className='mt-4 mt-md-0 d-flex justify-content-center' data-aos="flip-left">
                          <div className='card-feature1s'>
                              <img src={Elpise} alt="#" className='ellipe1ss' />
                                  < Iconfeature3img />
                                  <p className=' ff_secondary primary_color fw-medium fs_esm mb-0 pb-2'>Reports</p>
                                  <p className='primary-color ff_primary fs_xs fw-light opacity-75 mb-0'>Report and export client details, appointments, marketing, no shows and more..</p>
                              </div>
                          </Col>
                      <Col sm={6} md={4} lg={3} className='mt-4 mt-lg-0 d-flex justify-content-center' data-aos="flip-right">
                          <div className='card-feature1s'>
                              <img src={Elpise} alt="#" className='ellipe1ss' />
                                  < Iconfeature4img />
                                  <p className=' ff_secondary primary_color fw-medium fs_esm mb-0 pb-2'>Services</p>
                                  <p className='primary-color ff_primary fs_xs fw-light opacity-75 mb-0'>Add custom services to appointments, supplementary treatments, collection and drop offs, promotion packages and more.</p>
                              </div>
                          </Col>
                          <div className='d-flex justify-content-center py-5'>
                              <button className='fs_esm fw-normal text-white ff_secondary btn_view'>View All Features</button>
                          </div>
                      </Row>
                
              </Container>
          </div>
    </>
  )
}

export default Customer