import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import styles from './HeroSection.module.css'

const HeroSection = () => {
  return (
    <div className="mx-5 px-5">
      <Row className='d-flex align-items-center'>
        <Col md={6}>
          <h1 className='text-capitalize font-weight-bold'>
            Hungry? You're <br /> in the right place
          </h1>

          <p className='mb-4'>
            voluptatum possimus amet pariatur sequi molestiae id. Ea quia fugit
            quam exercitationem voluptas hic! Nesciunt, neque laudantium nisi
            aliquid rerum eos temporibus explicabo et, tenetur saepe
            voluptatibus quibusdam quas?
          </p>
          <Button className="btn custom-btn">Find Foods</Button>
        </Col>

        <Col md={6} className={styles.hero_bg}></Col>
      </Row>
    </div>
  )
}

export default HeroSection
