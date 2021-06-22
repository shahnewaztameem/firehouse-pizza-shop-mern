import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer>
      <Container fluid className=' my-5'>
        <Row className='mx-5 px-5'>
          <Col md={4}>
            <h3>Firehouse Pizza Shop</h3>
            <p className='text-justify'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate autem suscipit harum, consequatur nulla incidunt
              possimus facilis quaerat nam vel earum nesciunt, magnam laboriosam
            </p>
          </Col>
          <Col md={3}>
            <h3 className='pt-0'>Services</h3>
            <Link to='/' className='d-block mb-3'>
              Delivery Services
            </Link>
            <Link to='/' className='d-block mb-3'>
              Contact Us
            </Link>
            <Link to='/' className='d-block mb-3'>
              Terms of Use
            </Link>
            <Link to='/' className='d-block mb-3'>
              Privecy Policy
            </Link>
          </Col>

          <Col md={3}>
            <h3 className='pt-0'>Users</h3>
            <Link to='/login' className='d-block mb-3'>
              User Login
            </Link>
            <Link to='/register' className='d-block mb-3'>
              User Register
            </Link>
            <Link to='/profile' className='d-block mb-3'>
              Account Settings
            </Link>
            <Link to='/orders' className='d-block mb-3'>
              Orders
            </Link>
          </Col>

          <Col md={2}>
            <h3 className='pt-0'>Pages</h3>
            <Link to='/' className='d-block mb-3'>
              Near Restaurants
            </Link>
            <Link to='/' className='d-block mb-3'>
              Restaurant Details
            </Link>
            <Link to='/' className='d-block mb-3'>
              Available Regions
            </Link>
            <Link to='/' className='d-block mb-3'>
              Shipping Terms
            </Link>
          </Col>
        </Row>
        <Row>
          <Col className='text-center pt-3 mt-5'>
            Copyright &copy; Firehouse Pizza Shop <br />
            Shahnewaz Tameem All rights reserved
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
