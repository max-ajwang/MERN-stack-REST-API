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
            <a href='./home'>
              <Logo />
            </a>
            <a href='./home'>
              <p>Home</p>
            </a>
            <a href='./blog'>
              <p>Blog</p>
            </a>
            <a href='./about'>
              <p>About</p>
            </a>
            <a href='./portfolio'>
              <p>Portfolio</p>
            </a>
            <a href='./hireme'>
              <p>Hire Me</p>
            </a>
          </div>
        </div>
        <div className='navbar-sign'>
          <a href='./register'>
            <p>Sign in</p>
          </a>
          <a href='./register'>
            <button className='btn btn-hero' type='button'>Sign up</button>
          </a>
        </div>
        <div className='navbar-menu'>
          {toggleMenu ? (
            <RiCloseLine
              color='#2cb1bc'
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color='#2cb1bc'
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className='navbar-menu-container scale-up-center'>
              <div className='navbar-menu-container-links'>
                <a href='./home'>
                  <p>Home</p>
                </a>
                <a href='./blog'>
                  <p>Blog</p>
                </a>
                <a href='./about'>
                  <p>About</p>
                </a>
                <a href='./portfolio'>
                  <p>Portfolio</p>
                </a>
                <a href='./hireme'>
                  <p>Hire Me</p>
                </a>
              </div>
              <div className='navbar-menu-container-links-sign'>
                <a href='./register'>
                  <p>Sign in</p>
                </a>
                <a href='./register'>
                  <button className='btn btn-hero' type='button'>Sign up</button>
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
