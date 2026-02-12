import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/CartSlice.jsx'

export default function CartItem({ navigate }) {
  const items = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()

  const grandTotal = items.reduce((s, it) => s + it.price * it.quantity, 0)

  return (
    <div className="container">
      <h2>Your Cart</h2>
      <div className="cart-list">
        {items.length === 0 && (
          <div>
            <p>Your cart is empty.</p>
            <button className="btn" onClick={() => navigate('products')}>Continue Shopping</button>
          </div>
        )}

        {items.map((it) => (
          <div className="cart-row" key={it.id}>
            <img src={it.image} alt={it.name} />
            <div style={{flex:1}}>
              <div style={{fontWeight:600}}>{it.name}</div>
              <div className="product-price">Unit: ${it.price.toFixed(2)}</div>
              <div style={{marginTop:6}} className="cart-actions">
                <button className="qty-btn" onClick={() => dispatch(decreaseQuantity(it.id))}>-</button>
                <div>Qty: {it.quantity}</div>
                <button className="qty-btn" onClick={() => dispatch(increaseQuantity(it.id))}>+</button>
                <button className="btn" style={{marginLeft:12}} onClick={() => dispatch(removeFromCart(it.id))}>Delete</button>
              </div>
            </div>
            <div style={{minWidth:120,textAlign:'right'}}>
              <div style={{fontWeight:700}}>${(it.price * it.quantity).toFixed(2)}</div>
            </div>
          </div>
        ))}

        {items.length > 0 && (
          <div className="summary">
            <div>
              <button className="btn" onClick={() => alert('Coming Soon')}>Checkout</button>
              <button className="btn" style={{marginLeft:8}} onClick={() => navigate('products')}>Continue Shopping</button>
            </div>
            <div style={{fontWeight:700}}>Total: ${grandTotal.toFixed(2)}</div>
          </div>
        )}
      </div>
    </div>
  )
}
