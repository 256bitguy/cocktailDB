import React from 'react'
import { useSelector } from 'react-redux';

const Cart = () => {
  const { orderTotal } = useSelector((state) => state.cartState);
  const cartItems = useSelector((state) => state.cartState.cartItems);
console.log(orderTotal,cartItems)
  return (
    <div>
       
       
    
    </div>
  )
}

export default Cart