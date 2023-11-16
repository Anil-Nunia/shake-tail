import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Iconclients } from './Icon'
import { Iconreminder } from './Icon'
import { Iconshedule } from './Icon'
import Imgmainfetr from '../assets/image/png/mainf-ellpise.png'

const Mainfeatures = () => {
  return (
      <>
          <Container className='py-3 py-lg-5' id='features'>
              <Row className='align-items-center py-md-4'>
                  <Col lg={6} className='' data-aos="fade-up-right">
                      <div className='d-flex flex-column flex-md-row align-items-center gap-3 gap-md-4'>
                          <div className='d-flex flex-column align-items-center gap-3 gap-md-4'>
                              <div className='card-client position-relative'>
                                  <span><img src={Imgmainfetr} alt="#" className='Img_ellipse-mfeature position-absolute'/></span>
                                  <Iconclients/>
                                  <p className='fs_esm fw-medium ff-secondary primary_color'>Clients & Pets</p>
                                  <p className='opacity-0.opacity-75 fs_xs fw-light primary_color mx_width_managing'>Managing your Clients and their Pets is effortless; Record their details, add emergency contacts, Medical Notes, Grooming notes, view their appointment history, set alerts and much more…</p>
                              </div>
                              <div className='card-client mt-2'>
                                  <span><img src={Imgmainfetr} alt="#" className='Img_ellipse-mfeature position-absolute' /></span>
                                  <Iconreminder/>
                                  <p className='fs_esm fw-medium ff-secondary primary_color'>Notifications & Reminders</p>
                                  <p className='opacity-0.opacity-75 fs_xs fw-light primary_color mx_width_well'>We’ll take the strain by automatically sending your Clients, their appointment reminders, confirmations, ‘Miss You’s and No Shows, by text or email.</p>
                              </div>
                          </div>
                          <div className='card-client ms--md-2'>
                              <span><img src={Imgmainfetr} alt="#" className='Img_ellipse-mfeature position-absolute' /></span>
                              <Iconshedule />
                              <p className='fs_esm fw-medium ff-secondary primary_color'>Schedule</p>
                              <p className='opacity-0.opacity-75 fs_xs fw-light primary_color mx_width_powerful'>Powerful and easy to use, book appointments to your team members and view your colour coded schedule, ‘at a glance’.</p>
                          </div>
                      </div>
                  </Col>
                  <Col lg={6} className='py-4 py-lg-0' data-aos="fade-up-left">
                      <p className='ff_secondary fw-medium primary_color fs_lg text-center text-lg-start'>Main Features</p>
                      <p className='fw-light fs_xs ff_primary primary_color line-height-shake opacity-75 mb-0 pb-2'>ShakeYourTail is an trusted dog grooming software based in the cloud; Client, appointment, scheduling and document management service.</p>
                      <p className='fw-light fs_xs ff_primary primary_color line-height-shake opacity-75 mb-0 pb-2'>Great for Salons & Groomers on the move; Run it on your PC, laptop, Ipad, Tablet or Mobile with a standard internet connection.</p>
                      <p className='fw-light fs_xs ff_primary primary_color line-height-shake opacity-75 mb-0 pb-2'>Store everything in one place and leave the tech stuff to us.</p>
                      <p className='fw-light fs_xs ff_primary primary_color line-height-shake opacity-75 mb-0 pb-2'>We provide a complete service solution, giving you peace of mind, we support, secure, update and keep your data, all safely backed up.</p>
                  </Col>
              </Row>
          </Container>
    </>
  )
}

export default Mainfeatures