import React, { useState } from 'react'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import CartItem from './components/CartItem'
import AboutUs from './components/AboutUs'

export default function App() {
  const [view, setView] = useState('home') // 'home' | 'products' | 'cart' | 'about'

  const navigate = (v) => setView(v)

  return (
    <div className="app-root">
      {view !== 'home' && <Navbar navigate={navigate} />}

      {view === 'home' && (
        <div className="landing">
          <div className="landing-inner">
            <h1 className="title">Paradise Nursery</h1>
            <p className="subtitle">Bring nature home — one plant at a time</p>
            <div className="cta-row">
              <button className="btn primary" onClick={() => navigate('products')}>Get Started</button>
              <button className="btn" onClick={() => navigate('about')}>About Us</button>
            </div>
          </div>
        </div>
      )}

      {view === 'products' && <ProductList navigate={navigate} />}
      {view === 'cart' && <CartItem navigate={navigate} />}
      {view === 'about' && <AboutUs navigate={navigate} />}
    </div>
  )
}
