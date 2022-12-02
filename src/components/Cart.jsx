import React, { useEffect } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { cartThunk, checkoutThunk } from '../store/slices/cart.slice';

const Cart = ( {show, handleClose}) => {
 
  const dispatch = useDispatch();

  const cart = useSelector(state => state.Cart);

  useEffect (() => {
       dispatch(cartThunk());
  },[])

  console.log(cart);
  

  return (
    <Offcanvas show={show} onHide={handleClose} key={cart.id}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title >Cart🛒</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cart.map((cart) => (
      
            <div>
              <p><b>{cart.brand}</b></p>
              <h3>{cart.title}</h3>
              <p>{cart.productsInCart?.quantity}</p>
              <p>Price:</p>
              <p>{cart.price}</p>
              
            </div>
            
          ))}

          <Button onClick={() => dispatch(checkoutThunk())}>Checkout</Button>

        </Offcanvas.Body>
      </Offcanvas>
  );
};

export default Cart;

