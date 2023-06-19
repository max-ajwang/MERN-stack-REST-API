import React from 'react'
import Wrapper from '../assets/wrappers/Header'
import main from '../assets/images/main.svg'

const Header = () => {
  return (
    <Wrapper>
      <div className='container page'>
        {/* info */}
        <div className="info">
          <h1>Hey there, I'm <span>Max</span></h1>
          <p> I'm a professional web developer and cyber security analyst based out of Nairobi, Kenya. I'm building a 
              portfolio of internet businesses and sharing the journey to $1000 in monthly revenue.
              <a href='#subscribe2newsletter'> Follow my journey here.</a> 
          </p>
          {/*<button className='btn btn-hero'>Login/Register</button>*/}
          <h3>Quick Links</h3>
          <ul>
            <li><a href='#MyServices'>Services Offered</a></li>
            <li><a href='#Twitter'>Twitter (best place to connect)</a></li>
            <li><a href='#YT'>My YouTube Channel</a></li>
            <li><a href='#MyPortfolio'>My Portfolio</a></li>
          </ul>
        </div>
        {/* main image */}
        <img src={main} alt="revenue tracker" className='img main-img' />
      </div>
    </Wrapper>
  )
}

export default Header
