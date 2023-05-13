import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import Wrapper from '../assets/wrappers/Navbar'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <Wrapper>
      <div className='navbar'>
        <div className='navbar-links'>
          <div className='navbar-links-logo'>
            <h2>Max Ajwang</h2>
          </div>
          <div className='navbar-links-container'>
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
        </div>
        <div className='navbar-sign'>
          <p>Sign in</p>
          <button type='button'>Sign up</button>
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
