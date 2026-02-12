import React from 'react'
import { useSelector } from 'react-redux'

export default function Navbar({ goToCart }) {
  const total = useSelector((state) => state.cart.items.reduce((s, it) => s + it.quantity, 0))

  return (
    <div className="navbar">
      <div className="nav-left">
        <div style={{fontWeight:700}}>Paradise Nursery</div>
      </div>

      <div>
        <button className="btn" onClick={goToCart}>
          🛒 <span className="cart-bubble">{total}</span>
        </button>
      </div>
    </div>
  )
}
