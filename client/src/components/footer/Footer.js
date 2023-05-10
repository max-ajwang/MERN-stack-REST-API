import React from 'react'
import Wrapper from '../../assets/wrappers/Footer'
//import gpt3Logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <Wrapper>
      <div className='gpt3__footer section__padding'>
        <div className='gpt3__footer-heading'></div>

        <div className='gpt3__footer-links'>
          <div className='gpt3__footer-links_div'>
            <p>
              <a href='www.linkedin.com'> LinkedIn </a>
            </p>
            <p>
              <a href='www.twitter.com'> Twitter </a>
            </p>
            <p>
              <a href='www.instagram.com'> Instagram </a>
            </p>
            <p>
              <a href='www.youtube.com'> YouTube </a>
            </p>
          </div>
        </div>

        <div className='gpt3__footer-copyright'>
          <p>@2023 maxajwang. All rights reserved.</p>
        </div>
      </div>
    </Wrapper>
  )
}

export default Footer
