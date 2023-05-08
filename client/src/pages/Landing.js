import React from 'react'
import { Navbar, Header, Blog, Footer, CTA } from '../components'

function Landing() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Blog />
      <CTA />
      <Footer />
    </div>
  )
}

export default Landing
