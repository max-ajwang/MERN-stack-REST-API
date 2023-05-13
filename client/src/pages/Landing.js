import React from 'react'
import { Navbar, Blog, Footer } from '../components'

function Landing() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
      </div>
      <Blog />
      <Footer />
    </div>
  )
}

export default Landing
