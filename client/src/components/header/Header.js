import React from 'react'
import Wrapper from '../../assets/wrappers/Header'
import ai from '../../assets/img/ai.png'

const Header = () => {
  return (
    <Wrapper>
      <div className='gpt3__header section__padding' id='home'>
        <div className='gpt3__header-content'>
          <h1>Tools and resources for the modern entrepreneur.</h1>
          <p>
            We are building a set of tools and resources for modern
            entrepreneurs to plan and manage their businesses online. Enter your
            email to get early access.
          </p>

          <div className='gpt3__header-content__input'>
            <input type='email' placeholder='Your Email Address' />
            <button type='button'>Get Started</button>
          </div>
        </div>

        <div className='gpt3__header-image'>
          <img src={ai} alt='AI' />
        </div>
      </div>
    </Wrapper>
  )
}

export default Header
