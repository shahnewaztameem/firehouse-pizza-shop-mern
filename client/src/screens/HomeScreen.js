import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import { listProducts } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
import Meta from '../components/Meta'
import HeroSection from '../components/HeroSection'
import AwesomeFeatures from '../components/AwesomeFeatures'
import Slogan from '../components/Slogan'
import { motion } from 'framer-motion'

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword
  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, products, error, page, pages } = productList

  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <motion.div exit={{ opacity: 0 }}>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <HeroSection />
          <AwesomeFeatures />

          <Meta />
          {/*!keyword ? <ProductCarousel /> : <Link to="/" className="btn btn-light">Go Back</Link>*/}
          <div className='mx-5 px-5 my-5 py-5'>
            <h1 className='font-weight-bold text-center mb-5'>
              Discover Our Menu
            </h1>
            {loading ? (
              <Loader />
            ) : error ? (
              <Message variant='danger'>{error}</Message>
            ) : (
              <>
                <Row>
                  {products.map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                      <Product product={product} />
                    </Col>
                  ))}
                </Row>
                <Paginate
                  pages={pages}
                  page={page}
                  keyword={keyword ? keyword : ''}
                />
              </>
            )}
          </div>
          <Slogan />
        </>
      )}
    </motion.div>
  )
}

export default HomeScreen
