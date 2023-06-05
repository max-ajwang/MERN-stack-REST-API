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
          <Logo />
          <div className='navbar-links-container'>
            <p>
              <a href='#home'>Home</a>
            </p>
            <p>
              <a href='#blog'>Blog</a>
            </p>
            <p>
              <a href='#about'>About</a>
            </p>
          </div>
        </div>
        <div className='navbar-sign'>
          <a href='./signup'>
            <p>Sign in</p>
          </a>
          <a href='./register'>
            <button type='button'>Sign up</button>
          </a>
        </div>
        <div className='navbar-menu'>
          {toggleMenu ? (
            <RiCloseLine
              color='#fff'
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color='#fff'
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className='navbar-menu-container scale-up-center'>
              <div className='navbar-menu-container-links'>
                <p>
                  <a href='#home'>Home</a>
                </p>
                <p>
                  <a href='#blog'>Blog</a>
                </p>
                <p>
                  <a href='#wgpt3'>About</a>
                </p>
              </div>
              <div className='navbar-menu-container-links-sign'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  )
}

export default Navbar
