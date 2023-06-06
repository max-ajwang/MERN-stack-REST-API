import React from 'react'
import { Navbar, Blog, Footer } from '../components'
import Wrapper from '../assets/wrappers/Landing'

function Landing() {
  return (
    <Wrapper>
      <nav>
        <Navbar />
      </nav>
      {/*<Blog />
      <Footer />*/}
    </Wrapper>
  )
}

export default Landing
