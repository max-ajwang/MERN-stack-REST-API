import React from 'react'
import Wrapper from '../assets/wrappers/Header'
import main from '../assets/images/main.svg'

const Header = () => {
  return (
    <Wrapper>
      <div className='container page'>
        {/* info */}
        <div className="info">
          <h1>Cyber Security <span>Awareness</span> App</h1>
          <p> Practical Cyber Security tools and resources for the modern entrepreneur. 
              From finance and economics to themes such as branding, marketing, communication, 
              story telling, persuasion, negotiation, mental health and physical fitness.
              ( podcast, Linkedin, Youtube, Facebook, Instagram, Twitter )
          </p>
          <button className='btn btn-hero'>Login/Register</button>
        </div>
        {/* main image */}
        <img src={main} alt="financial wellness" className='img main-img' />
      </div>
    </Wrapper>
  )
}

export default Header
