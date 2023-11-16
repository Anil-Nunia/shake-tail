import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Imgdogslider from '../assets/image/png/imgdogslider.png'
import { Imagstar } from './Icon'
import Slider from 'react-slick'
import { Arrow1s } from './Icon'
import { Arrow2s } from './Icon'
import Imgdogsall from '../assets/image/png/dogsall.png'
import Imgellpstestmonial1s from '../assets/image/png/Ellipseimgs1s.png'


const Testemonial = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false

    };
    const first = React.useRef();
    
  return (
    <>
          <div className=' position-relative'>
              <img src={Imgellpstestmonial1s} alt="#" className='Imgeslltestmonil1s position-absolute'/>
              <div className='d-flex justify-content-center py-lg-5'>
                  <p className='primary_color ff_secondary fs_lg fw-medium'>Testimonial</p>
              </div>
              <Container>
                  <Row>
                      <Col lg={6} data-aos="fade-up-right">
                          <img src={Imgdogsall} alt="#" className='w-100' />
                      </Col>
                      <Col lg={6} className='pt-4 pt-lg-0 ' data-aos="fade-up-left">
                          <Slider {...settings} ref={first}>
                              <div className='d-flex justify-content-end'>
                                  <div className='d-flex flex-column'>
                                      <span>  <img src={Imgdogslider} alt="#" /></span>
                                      <p className='fs_esm fw-light ff_primary primary_color opacity-75 max-width-amazing'>“ShakeYourTail is amazing, helping me easily manage my appointments and reduce my business admin with automated confirmations and reminders.”</p>
                                      <span className='d-flex align-items-center'>
                                          <Imagstar />
                                          <Imagstar />
                                          <Imagstar />
                                          <Imagstar />
                                          <Imagstar />
                                      </span>
                                      <p className='fw-bold ff_primary fs_md math_color'>Mathew Spry</p>
                                      <p className='ff_primary fw-medium primary_color opacity-75 fs_sm'>Director @ BArkingham, UK</p>
                                  </div>
                              </div>
                              <div className='d-flex justify-content-end'>
                                  <div className='d-flex flex-column'>
                                      <span>  <img src={Imgdogslider} alt="#" /></span>
                                      <p className='fs_esm fw-light ff_primary primary_color opacity-75 max-width-amazing'>“ShakeYourTail is amazing, helping me easily manage my appointments and reduce my business admin with automated confirmations and reminders.”</p>
                                      <span className='d-flex align-items-center'>
                                          <Imagstar />
                                          <Imagstar />
                                          <Imagstar />
                                          <Imagstar />
                                          <Imagstar />
                                      </span>
                                      <p className='fw-bold ff_primary fs_md math_color'>Mathew Spry</p>
                                      <p className='ff_primary fw-medium primary_color opacity-75 fs_sm'>Director @ BArkingham, UK</p>
                                  </div>
                              </div>
                              <div className='d-flex justify-content-end'>
                                  <div className='d-flex flex-column'>
                                      <span>  <img src={Imgdogslider} alt="#" /></span>
                                      <p className='fs_esm fw-light ff_primary primary_color opacity-75 max-width-amazing'>“ShakeYourTail is amazing, helping me easily manage my appointments and reduce my business admin with automated confirmations and reminders.”</p>
                                      <span className='d-flex align-items-center'>
                                          <Imagstar />
                                          <Imagstar />
                                          <Imagstar />
                                          <Imagstar />
                                          <Imagstar />
                                      </span>
                                      <p className='fw-bold ff_primary fs_md math_color'>Mathew Spry</p>
                                      <p className='ff_primary fw-medium primary_color opacity-75 fs_sm'>Director @ BArkingham, UK</p>
                                  </div>
                              </div>
                          </Slider>
                          <div className='d-flex align-items-center margin_start_slider'>
                              <span onClick={() => first.current.slickPrev()} className='arrowsd'><Arrow1s /></span>
                              <span onClick={() => first.current.slickNext()} className='arrowsd'><Arrow2s /></span>
                          </div>
                      </Col>
                  </Row>
              </Container>
       </div>
    </>
)
}

export default Testemonial