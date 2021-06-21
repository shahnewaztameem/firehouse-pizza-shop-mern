import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col, Spinner, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import { login } from '../actions/userActions'
import FormContainer from '../components/FormContainer'
import styles from './LoginScreen.module.css'
import mailIcon from '../assets/icons/mail.svg'
import { ToastContainer, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <FormContainer>
      <div className='login_wrapper text-center mb-5'>
        <h1 className='p-0'>Hello</h1>
        <h4>Sign into your account </h4>
      </div>

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
        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          ></Form.Control>
        </Form.Group>

        {loading ? (
          <span>
            <Button
              type='submit'
              variant='primary'
              className='rounded'
              disabled
            >
              <Spinner size='sm' animation='border' /> Sign In
            </Button>
          </span>
        ) : (
          <Button type='submit' variant='primary' className='rounded'>
            Sign In
          </Button>
        )}
      </Form>

      <Row className='py-3'>
        <Col>
          Don't Have an account?{' '}
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
            <strong className='font-weight-bold' style={{ color: '#ff4555' }}>
              Signup
            </strong>
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default LoginScreen
