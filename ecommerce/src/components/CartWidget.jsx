import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const CartWidget = () => {
  const cantElementos = 4; 
  return (
    <a href="#" className="cart-widget d-flex align-items-center mt-2 mx-3" >
    <FontAwesomeIcon icon={faShoppingCart} className="me-2 align-bottom" style={{ color: 'white' }} />
    <span className="badge bg-danger">{cantElementos}</span>
  </a>
  );
};

export default CartWidget;

