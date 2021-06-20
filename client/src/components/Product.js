import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'
import styles from './Product.module.css'

const Product = ({ product }) => {
  console.log(product)
  return (
    <Card className={`${styles.product_cart} my-5 p-3 mb-5 w-75`}>
      <div className='position-relative'>
        <div className={styles.product_image_top}>
          <Link to={`/product/${product._id}`}>
            <Card.Img
              src={product.image}
              variant='top'
              className={styles.product_image}
            />
          </Link>
        </div>
      </div>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <h4 className={styles.product_name}>{product.name}</h4>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <div className={styles.product_category}>{product.category}</div>
          <div className='my-3'>
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </div>
        </Card.Text>

        <Card.Text as='h3' className={styles.product_price}>
          ${product.price}
        </Card.Text>

        <Link to={`/product/${product._id}`}>
          <Button className='btn custom-btn btn-block'>Details</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default Product
