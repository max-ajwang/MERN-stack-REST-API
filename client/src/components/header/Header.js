import React from 'react'
import Wrapper from '../../assets/wrappers/Header'
import ai from '../../assets/img/ai.png'

const Header = () => {
  return (
    <Wrapper>
      <div className='header section-padding' id='home'>
        <div className='header-content'>
          <h1>Resources for the modern entrepreneur.</h1>
          <p>
            We are building a set of resources for modern
            entrepreneurs to plan and manage their businesses online. Enter your
            email to get early access.
          </p>

          <div className='header-content-input'>
            <input type='email' placeholder='Your Email Address' />
            <button type='button'>Get Started</button>
          </div>
        </div>

        <div className='header-image'>
          <img src={ai} alt='AI' />
        </div>
      </div>
    </Wrapper>
  )
}

export default Header
