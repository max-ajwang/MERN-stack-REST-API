import React from 'react'
import { Navbar, Header, Blog, Footer } from '../components'

function Landing() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Blog />
      <Footer />
    </div>
  )
}

export default Landing
