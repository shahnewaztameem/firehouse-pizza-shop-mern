import React from 'react'
import { Row, Col, Button, Image } from 'react-bootstrap'
import sloganImg from '../assets/slogan.png'
const Slogan = () => {
  return (
    <div className='mx-5 px-5 my-5 py-5'>
      <Row className='d-flex align-items-center'>
        <Col md={5}>
          <h1 className='font-weight-bold'>
            Real Delicious food Straight to your door
          </h1>
          <p>
            {' '}
            Ea consequatur corrupti ullam cumque! Magni officiis dolor qui
            laudantium hic fuga quod assumenda deleniti, praesentium voluptatem,
            vel animi quia ab non harum corporis commodi?
          </p>
          <Button className='btn custom-btn mt-3'>Ah! I want to order</Button>
        </Col>
        <Col md={7} className='text-right'>
          <Image src={sloganImg} alt='slogan' fluid />
        </Col>
      </Row>
    </div>
  )
}

export default Slogan
