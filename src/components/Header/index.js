import {Link} from 'react-router-dom'
import {IoMdCart} from 'react-icons/io'
import CartContext from '../../context/CartContext'
import './index.css'

const Header = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      return (
        <nav className="nav-bar">
          <div className="header">
            <h1 className="resto-name">UNI Resto Cafe</h1>
            <div className="order-cont">
              <p className="note">My Orders</p>
              <div className="cart-cont">
                <IoMdCart className="icon" />
                <p className="orders-number">{cartList.length}</p>
              </div>
            </div>
          </div>
        </nav>
      )
    }}
  </CartContext.Consumer>
)
export default Header
