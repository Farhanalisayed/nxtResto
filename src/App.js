import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Component} from 'react'
import AllRestaurant from './components/AllRestaurant'
import CartContext from './context/CartContext'

import './App.css'

class App extends Component {
  state = {
    cartList: [],
  }

  addToCart = id => {
    const {cartList} = this.state
    if (!cartList.includes(id)) {
      this.setState(prev => ({cartList: [...prev.cartList, id]}))
    }
  }

  removeCartItem = id => {
    const {cartList} = this.state
    if (cartList.includes(id)) {
      this.setState(prev => ({
        cartList: prev.cartList.filter(each => each !== id),
      }))
    }
  }

  render() {
    const {cartList} = this.state

    return (
      <CartContext.Provider
        value={{
          cartList,
          addToCart: this.addToCart,
          removeCartItem: this.removeCartItem,
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={AllRestaurant} />
          </Switch>
        </BrowserRouter>
      </CartContext.Provider>
    )
  }
}

export default App
