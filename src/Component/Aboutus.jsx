import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Imggoogle from '../assets/image/png/google1img.png'
import Imageapp from '../assets/image/png/appimg.png'
import Imgmobile2s from '../assets/image/png/imgmobile2s.png'
import { Iconabout1s } from './Icon'
import { Iconabout2s } from './Icon'
import { Iconabout3s } from './Icon'
import { Iconabout4s } from './Icon'
import Elpise from '../assets/image/png/elipse1s.png'

const Aboutus = () => {
  return (
      <>
          <div className='bg_hero_about pb-aboutsection mt-lg-5 pt-lg-5'>
              <Container className='pb-lg-5 pt-lg-5 '>
                  <Row className='pt-3 align-items-center'>
                      <Col lg={6} className='pt-5' data-aos="fade-up-right">
                          <p className='fs_lg fw-medium ff_secondary text-white mb-0 pb-2 text-center text-lg-start'>Download App</p>
                          <p className='fs_xs fw-light ff_primary text-white opacity-75 mx-width-are mb-0 text-center text-lg-start'>Are you a mobile groomer or just want to access your appointments and client on the go?
                          </p>
                          <p className='fs_xs fw-light ff_primary text-white opacity-75 mx-width-are mb-3 text-center text-lg-start'>Try our app, available to Premier or Premier Plus subscribers.</p>
                          <div className='d-flex align-items-center gap-3 justify-content-center justify-content-lg-start'>
                              <img src={Imggoogle} alt="#" />
                              <img src={Imageapp} alt="#"/>
                          </div>
                      </Col>
                      <Col lg={6}>
                          <span className='my-4 d-flex align-items-center justify-content-center justify-content-lg-start ptopmobile'>
                              <img src={Imgmobile2s} alt="#" className='w-100 immobile2s' />
                         </span>
                      </Col>
                  </Row>
                  <div className='d-flex justify-content-center align-items-center flex-column margin-top-about '>
                      <p className='fs_lg fw-medium ff_secondary text-white'>About Us</p>
                      <p className='text-white fs_xs fw-light ff_primary mb-0'>Software developed by groomers for groomers
                      </p>
                      <p className='text-white fs_xs fw-light ff_primary max_width_software text-center'> Our team has a wealth of experience, over 30 years combined working in dog grooming salons and over 45 years combined in working in software development.</p>
                  </div>
                  <Row className='pt-4 '>
                      <Col sm={6} md={4} lg={3} data-aos="zoom-in-down">
                          <div className='card_about1s position-relative'>
                              <img src={Elpise} alt="#" className='ellipe1s' />
                              <Iconabout1s />
                              <p className='primary_color ff_secondary fs_esm fw-medium'>Founded</p>
                              <p className='fs_xs fw-medium ff_primary dec_color'>Dec 2009</p>
                              <p className='primary_color ff_primary fs_xs fw-light opacity-75'>Founded in 2009 to support pet grooming industry to reduce the the administration burden of running a business.</p>
                          </div>
                      </Col>
                      <Col sm={6} md={4} lg={3} className='mt-4 mt-sm-0' data-aos="zoom-in-left">
                          <div className='card_about1s position-relative'>
                              <img src={Elpise} alt="#"  className='ellipe1s'/>
                              <Iconabout2s />
                              <p className='primary_color ff_secondary fs_esm fw-medium'>Product Launch</p>
                              <p className='fs_xs fw-medium ff_primary july_color'>July 2010</p>
                              <p className='primary_color ff_primary fs_xs fw-light opacity-75'>We released our first product 'Border' and made our first sales into 3 different countries.</p>
                          </div>
                      </Col>
                      <Col sm={6} md={4} lg={3} className='mt-4 mt-md-0' data-aos="zoom-in-down">
                          <div className='card_about1s'>
                              <img src={Elpise} alt="#" className='ellipe1s' />
                              <Iconabout3s />
                              <p className='primary_color ff_secondary fs_esm fw-medium'>Pet Schedule Released</p>
                              <p className='fs_xs fw-medium ff_primary decs_color'>Dec 2012</p>
                              <p className='primary_color ff_primary fs_xs fw-light opacity-75'>Our new Web based platform was created and released.</p>
                          </div>
                      </Col>
                      <Col sm={6} md={4} lg={3} className='mt-4 mt-lg-0' data-aos="zoom-in-left">
                          <div className='card_about1s'>
                              <img src={Elpise} alt="#" className='ellipe1s' />
                              <Iconabout4s />
                              <p className='primary_color ff_secondary fs_esm fw-medium'>Subscription Service</p>
                              <p className='fs_xs fw-medium ff_primary aug_color'>Aug 2013</p>
                              <p className='primary_color ff_primary fs_xs fw-light opacity-75'>We released our first premier subscription to the market</p>
                          </div>
                      </Col>
                  </Row>
                  <div className='d-flex justify-content-center py-3 py-lg-5'>
                      <button className='ff_secondary text-white fs_esm fw-medium btn-view_all'>View All</button>
                  </div>
              </Container>
          </div>
    </>
  )
}

export default Aboutus