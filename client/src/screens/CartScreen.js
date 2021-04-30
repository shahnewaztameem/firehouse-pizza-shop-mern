import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addToCart } from '../actions/cartActions'
const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id
  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const dispatch = useDispatch()

  const cart = useSelector(state => state.cart)
  const {cartItems} = cart

  
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])
  return <div>cart</div>
}

export default CartScreen
