import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Img1mp from '../assets/image/png/img1srdmp.png'
import { Icon1mps } from './Icon'
import { Icon2mps } from './Icon'
import { Icon3mps } from './Icon'
import { Icon4mps } from './Icon'

const Work = () => {
  return (
    <>
      <Container>
        <div className='mt-lg-5 py-5'>
          <p className='primary_color ff_secondary fw-medium fs_lg text-center text-lg-start'>How It Work</p>
          <p className='primary_color ff_primary fs_xs fw-light max_widths text-center text-lg-start'>ShakeYourTail is an online scheduling and CRM service & is super easy to use, you can trial our premier service free for 30 days.</p>
        </div>

        <Row className='position-relative row_after'>
          <Col md={3}
            className=" d-flex justify-content-md-center justify-content-start"
          >
            <div className=" d-flex flex-column align-items-start position-relative z-1 padding yello">
              <div className=" d-flex flex-column align-items-start">
                {<img className="imgrodmp d-md-block mb-4" src={Img1mp} alt="" />}
                <span>
                  {<Icon1mps />}
                </span>
                <p className=" fw-medium fs_esm ff_secondary text-black mt-2">
                  Register
                </p>
                <p className=" fs_xs fw-light ff_primary primary_color">
                  Create a account
                </p>
                <p className=" fs_xl fw-bold ff_primary position-absolute clr1 img_postion z-n1">
                  01
                </p>
              </div>
            </div>
          </Col>
          <Col
            md={3}
            className=" d-flex justify-content-md-center justify-content-start"
          >
            <div className=" d-flex flex-column align-items-start position-relative padding yello">
              <div className=" d-flex flex-column align-items-start">
                {<img className=" imgrodmp d-md-block mb-4" src={Img1mp} alt="" />}
                <span>
                  {<Icon2mps/>}
                </span>
                <p className=" fw-medium fs_esm ff_secondary text-black mt-2">
                  Login
                </p>
                <p className=" fs_xs fw-light ff_primary primary_color">
                  Create a account
                </p>
                <p className=" fs_xl fw-bold ff_primary position-absolute clr2 img_postion z-n1">
                  02
                </p>
              </div>
            </div>
          </Col>
          <Col md={3} className=" d-flex justify-content-md-center justify-content-start">
            <div className=" d-flex flex-column align-items-start position-relative padding yello">
              <div className=" d-flex flex-column align-items-start">
                {<img className=" imgrodmp3 d-md-block mb-4" src={Img1mp} alt="#" />}
                <span>
                  {<Icon3mps />}
                </span>
                <p className=" fw-medium fs_esm ff_secondary text-black mt-2">
                  Customise
                </p>
                <p className=" fs_xs fw-light ff_primary primary_color mx-widthsms">
                  Customise your emails, SMS & settings.
                </p>
                <p className=" fs_xl fw-bold ff_primary position-absolute clr3 img_postion z-n1">
                  03
                </p>
              </div>
            </div>
          </Col>
          <Col
            md={3}
            className=" d-flex justify-content-md-center justify-content-start"
          >
            <div className=" d-flex flex-column align-items-start position-relative padding yello">
              <div className=" d-flex flex-column align-items-start">
                {<img className="imgrodmp4 d-md-block mb-4" src={Img1mp} alt="#" />}
                <span>
                  {<Icon4mps />}
                </span>
                <p className=" fw-medium fs_esm ff_secondary text-black mt-2">
                  Done
                </p>
                <p className=" fs_xs fw-light ff_primary primary_color max_width_done">
                  You're Ready to Rock! Add clients & start booking appointments.
                </p>
                <p className=" fs_xl fw-bold ff_primary position-absolute clr4 img_postion z-n1">
                  04
                </p>
              </div>
            </div>
          </Col>
        </Row>



      </Container>
    </>
  )
}

export default Work