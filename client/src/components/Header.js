import React from 'react'
import { Route } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'
import SearchBox from './SearchBox'
import HeroSection from './HeroSection'
import logo from '../assets/logo/logo.png'
import userProfile from '../assets/icons/user-profile.svg'
import shoppingCart from '../assets/icons/shopping-cart.svg'
import styles from './Header.module.css'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart
  console.log(cartItems.length)

  const logoutHandler = () => {
    dispatch(logout())
  }
  return (
    <header>
      <Navbar className="pt-0" bg='white' variant='dark' expand='lg' collapseOnSelect>
        <Container fluid className='mx-5 px-5'>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <Image
                src={logo}
                alt='logo'
                style={{ width: '140px', height: '140px' }}
                fluid
              />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Route render={({ history }) => <SearchBox history={history} />} />
            <Nav className='ml-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link className='mr-3'>
                  {' '}
                  <span className='position-relative'>
                    <Image src={shoppingCart} alt='shopping cart' fluid />{' '}
                    <div className={styles.cartCount}>{cartItems.length}</div>
                  </span>
                </Nav.Link>
              </LinkContainer>

              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <span>
                      <Image
                        src={userProfile}
                        alt='user profile'
                        fluid
                        style={{ height: '20px' }}
                      />
                    </span>{'  '}
                    <span>Sign In</span>
                  </Nav.Link>
                </LinkContainer>
              )}

              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminMenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>

                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>

                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
