import React from 'react'

export default function AboutUs({ navigate }) {
  return (
    <div className="container">
      <h2>About Paradise Nursery</h2>
      <p>
        Paradise Nursery is a friendly small plant shop focused on indoor and outdoor plants.
        We believe plants make spaces happier and healthier.
      </p>
      <div style={{marginTop:12}}>
        <button className="btn" onClick={() => navigate('products')}>Browse Plants</button>
      </div>
    </div>
  )
}
