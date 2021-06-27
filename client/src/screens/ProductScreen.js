import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
  Spinner,
} from 'react-bootstrap'
import Rating from '../components/Rating'
import { useDispatch, useSelector } from 'react-redux'
import {
  listProductDetail,
  createProductReview,
} from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { PRODUCT_CREATE_REVIEW_RESET } from '../constants/productConstants'
import styles from '../components/Product.module.css'
import leftArrow from '../assets/icons/arrow-left.svg'
import shoppingCart from '../assets/icons/shopping-cart-white.svg'
import { motion } from 'framer-motion'

// Custom easing
let easing = [1, -0.05, 0.01, 0.99]

// Custom variant
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 1, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: easing,
    },
  },
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const ProductScreen = ({ match, history }) => {
  const [qty, setQty] = useState(1)
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')

  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, product, error } = productDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const productReviewCreate = useSelector((state) => state.productReviewCreate)
  const {
    loading: loadingProductReview,
    error: errorProductReview,
    success: successProductReview,
  } = productReviewCreate

  useEffect(() => {
    window.scrollTo(0, 0)

    if (successProductReview) {
      alert('Review Submitted!')
      setRating(0)
      setComment('')
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET })
    }
    dispatch(listProductDetail(match.params.id))
    dispatch({ type: PRODUCT_CREATE_REVIEW_RESET })
  }, [dispatch, match, successProductReview])

  const addToCardHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(createProductReview(match.params.id, { rating, comment }))
  }

  return (
    <motion.div className='mx-5 px-5' initial='initial' animate='animate'>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <motion.div variants={fadeInUp}>
            <Link className='btn btn-dark my-3' to='/'>
              <span>
                <Image src={leftArrow} fluid />
              </span>{' '}
              Go Back
            </Link>
          </motion.div>
          <Row style={{ fontSize: '17px' }}>
            <Col md={4}>
              <motion.img
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                src={product.image}
                alt={product.name}
                className='img-fluid'
              />
            </Col>
            <Col md={4}>
              <ListGroup variant='flush'>
                <motion.div variants={fadeInUp}>
                  <ListGroup.Item className='pt-0 border-0'>
                    <h2 style={{ fontSize: '30px' }}>{product.name}</h2>
                  </ListGroup.Item>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <ListGroup.Item className='border-0 pt-0'>
                    <h4
                      className={styles.product_category}
                      style={{ color: '#ff4a59' }}
                    >
                      {product.category}
                    </h4>
                  </ListGroup.Item>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <ListGroup.Item className='border-0'>
                    <Rating
                      value={product.rating}
                      text={`${product.numReviews} Reviews`}
                    />
                  </ListGroup.Item>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <ListGroup.Item
                    className='border-0'
                    style={{
                      color: '#FF4555',
                      fontWeight: 900,
                      fontSize: '23px',
                    }}
                  >
                    Price: ${product.price}
                  </ListGroup.Item>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <ListGroup.Item className='border-0'>
                    Description: {product.description}
                  </ListGroup.Item>
                </motion.div>
              </ListGroup>
            </Col>

            <Col md={3}>
              <Card>
                <ListGroup variant='flush'>
                  <motion.div variants={fadeInUp}>
                    <ListGroup.Item className='border-0'>
                      <Row>
                        <Col>Price:</Col>
                        <Col>
                          <strong>${product.price}</strong>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <ListGroup.Item className='border-0'>
                      <Row>
                        <Col>Status:</Col>
                        <Col>
                          {product.countInStock > 0
                            ? 'In Stock'
                            : 'Out Of Stock'}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  </motion.div>

                  {product.countInStock > 0 && (
                    <motion.div variants={fadeInUp}>
                      <ListGroup.Item>
                        <Row>
                          <Col>Qty</Col>
                          <Col>
                            <Form.Control
                              as='select'
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(product.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </Form.Control>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    </motion.div>
                  )}

                  <motion.div variants={fadeInUp}>
                    <ListGroup.Item>
                      <Button
                        onClick={addToCardHandler}
                        className='btn-block btn-dark'
                        disabled={product.countInStock === 0}
                      >
                        <span className='position-relative'>
                          <Image
                            src={shoppingCart}
                            style={{ right: '10px', color: '#fff' }}
                            className='position-absolute'
                          />
                        </span>
                        <span>Add To Cart</span>
                      </Button>
                    </ListGroup.Item>
                  </motion.div>
                </ListGroup>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <h2>Reviews</h2>
              {product.reviews.length === 0 && <Message>No reviews</Message>}
              <ListGroup variant='flush'>
                {product.reviews.map((review) => (
                  <ListGroup.Item key={review._id}>
                    <strong>{review.name}</strong>
                    <Rating value={review.rating} />
                    <p>{review.createdAt.substring(0, 10)}</p>
                    <p>{review.comment}</p>
                  </ListGroup.Item>
                ))}

                <ListGroup.Item>
                  <h2>Write a review</h2>
                  {errorProductReview && (
                    <Message variant='danger'>{errorProductReview}</Message>
                  )}
                  {userInfo ? (
                    <Form onSubmit={submitHandler}>
                      <Form.Group controlId='rating'>
                        <Form.Label>Rating</Form.Label>
                        <Form.Control
                          as='select'
                          value={rating}
                          onChange={(e) => setRating(e.target.value)}
                        >
                          <option value=''>Select an option</option>
                          <option value='1'>1 - Poor</option>
                          <option value='2'>2 - Fair</option>
                          <option value='3'>3 - Good</option>
                          <option value='4'>4 - Very Good</option>
                          <option value='5'>5 - Excellent</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId='comment'>
                        <Form.Label>Comment</Form.Label>
                        <Form.Control
                          as='textarea'
                          row='3'
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                      {loadingProductReview ? (
                        <span>
                          <Button type='submit' variant='primary' disabled>
                            <Spinner size='sm' animation='border' /> Posting
                            Review
                          </Button>
                        </span>
                      ) : (
                        <Button type='submit' variant='primary'>
                          Leave a review
                        </Button>
                      )}
                    </Form>
                  ) : (
                    <Message variant='danger'>
                      Please <Link to='/login'>Login</Link> to write a review{' '}
                    </Message>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </>
      )}
    </motion.div>
  )
}

export default ProductScreen
