import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Spinner, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import Loader from '../components/Loader'
import { listProductDetail, updateProduct } from '../actions/productActions'
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants'
import leftArrow from '../assets/icons/arrow-left.svg'

const ProductEditScreen = ({ match, history }) => {
  const productId = match.params.id

  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState('')
  const [brand, setBrand] = useState('')
  const [category, setCategory] = useState('')
  const [countInStock, setCountInStock] = useState(0)
  const [description, setDescription] = useState('')
  const [uploading, setUploading] = useState(false)

  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  const productUpdate = useSelector((state) => state.productUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate

  useEffect(() => {
    window.scrollTo(0, 0)
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET })
      history.push('/admin/productlist')
    } else {
      if (!product.name || product._id !== productId) {
        dispatch(listProductDetail(productId))
      } else {
        setName(product.name)
        setPrice(product.price)
        setImage(product.image)
        setBrand(product.brand)
        setCategory(product.category)
        setCountInStock(product.countInStock)
        setDescription(product.description)
      }
    }
  }, [dispatch, productId, product, history, successUpdate])

  const submitHandler = (e) => {
    e.preventDefault()

    dispatch(
      updateProduct({
        _id: productId,
        name,
        price,
        image,
        brand,
        category,
        description,
        countInStock,
      })
    )
  }

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    setUploading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
      const { data } = await axios.post('/api/upload', formData, config)

      setImage(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  return (
    <div className='mx-5 px-5'>
      <Link to='/admin/productlist' className='btn btn-dark my-3'>
        <span>
          <Image src={leftArrow} fluid />
        </span>{' '}
        Go Back
      </Link>

      <FormContainer>
        <h1>Edit Product Details</h1>
        {/*loadingUpdate && <Loader />*/}
        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}

        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input"
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='price'>
              <Form.Label>Price </Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="input"
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='image'>
              <Form.Label>Image Url </Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter image url address'
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="input"
              ></Form.Control>
              <Form.File
                id='image-file'
                label='Choose File'
                custom
                onChange={uploadFileHandler}
              ></Form.File>
              {uploading && <Spinner size='sm' animation='border' />}
            </Form.Group>

            <Form.Group controlId='brand'>
              <Form.Label>Brand </Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter brand'
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="input"
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='countInStock'>
              <Form.Label>Count In Stock </Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter Count In Stock'
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
                className="input"
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='category'>
              <Form.Label>Category </Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter category'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="input"
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='description'>
              <Form.Label>Description </Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="input"
              ></Form.Control>
            </Form.Group>

            {loadingUpdate ? (
              <span>
                <Button type='submit' variant='primary' disabled className="rounded">
                  <Spinner size='sm' animation='border' /> {'  '} Updating...
                </Button>
              </span>
            ) : (
              <Button type='submit' variant='primary' className="">
                Update Product
              </Button>
            )}
          </Form>
        )}
      </FormContainer>
    </div>
  )
}

export default ProductEditScreen
