import React from 'react'
const CartContext = React.createContext({
  catList: [],
  addToCart: () => {},
  removeCartItem: () => {},
})
export default CartContext