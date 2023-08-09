import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import Wrapper from '../assets/wrappers/Navbar'
import Logo from './Logo'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <Wrapper>
      <div className='navbar'>
        <div className='navbar-links'>
          <div className='navbar-links-container'>
            {/* <a href='./'>
              <Logo />
            </a> */}
          </div>
        </div>
        <div className='navbar-sign'>
          <a href='./subscribe'>
            <button className='btn btn-hero' type='button'>Subscribe</button>
          </a>
        </div>
        <div className='navbar-menu'>
          {toggleMenu ? (
            <RiCloseLine
              color='#FFC300'
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color='#FFC300'
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className='navbar-menu-container scale-up-center'>
              <div className='navbar-menu-container-links'>
                <div className='navbar-menu-container-links-sign'>
                  <h4>Get insights delivered to your inbox</h4>
                  <h6>Get our latest insights plus informative content emailed to you</h6>
                  <a href='./subscribe'>
                    <button className='btn btn-hero' type='button'>Subscribe</button>
                  </a>
                </div>
                <a href='#'>
                  <p>Home</p>
                </a>
                <a href='./portfolio'>
                  <p>Portfolio</p>
                </a>
                <a href='./blog'>
                  <p>Blog</p>
                </a>
                <a href='./about'>
                  <p>About</p>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  )
}

export default Navbar
