import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import { register } from '../actions/userActions'
import FormContainer from '../components/FormContainer'
import { ToastContainer, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { motion } from 'framer-motion'

const RegisterScreen = ({ location, history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    window.scrollTo(0, 0)
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()

    //check password equality
    if (password !== confirmPassword) {
      setMessage('Passwords do not match!')
    } else {
      //dispatch register
      dispatch(register(name, email, password))
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <FormContainer>
        <h1 className='text-center'>Sign Up</h1>
        {message && <Message variant='danger'>{message}</Message>}
        {error && (
          <ToastContainer
            transition={Slide}
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHoverautoClose={2000}
          />
        )}
        {/*loading && <Loader />*/}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='name'>
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type='name'
              placeholder='Enter name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='input'
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='input'
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Enter password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='input'
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='confirmPassword'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Enter Confirm Password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className='input'
            ></Form.Control>
          </Form.Group>

          {loading ? (
            <span>
              <Button
                type='submit'
                variant='primary'
                disabled
                style={{ width: '20%' }}
                className='rounded'
              >
                <Spinner size='sm' animation='border' />
              </Button>
            </span>
          ) : (
            <Button
              type='submit'
              variant='primary'
              style={{ width: '20%' }}
              className='rounded'
            >
              Sign Up
            </Button>
          )}
        </Form>

        <Row className='py-3'>
          <Col>
            Already Have an Account?{' '}
            <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
              <strong className='font-weight-bold' style={{ color: '#ff4555' }}>
                Login
              </strong>
            </Link>
          </Col>
        </Row>
      </FormContainer>
    </motion.div>
  )
}

export default RegisterScreen
