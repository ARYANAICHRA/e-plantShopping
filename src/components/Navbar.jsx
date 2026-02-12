import React from 'react'
import { useSelector } from 'react-redux'

export default function Navbar({ navigate }) {
  const total = useSelector((state) => state.cart.items.reduce((s, it) => s + it.quantity, 0))

  return (
    <div className="navbar">
      <div className="nav-left">
        <div style={{fontWeight:700}}>Paradise Nursery</div>
        <div className="nav-links">
          <button onClick={() => navigate('home')}>Home</button>
          <button onClick={() => navigate('products')}>Plants</button>
          <button onClick={() => navigate('cart')}>Cart</button>
        </div>
      </div>

      <div>
        <button className="btn" onClick={() => navigate('cart')}>
          🛒 <span className="cart-bubble">{total}</span>
        </button>
      </div>
    </div>
  )
}
