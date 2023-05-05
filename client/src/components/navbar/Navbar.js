import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <Wrapper>
      <div className="gpt3__navbar">
        <div className="gpt3__navbar-links">
          <div className="gpt3__navbar-links_logo">
            <h2>Labeka The Lab</h2>
          </div>
          <div className="gpt3__navbar-links_container">
            <p><a href="#home">Home</a></p>
            <p><a href="#blog">Blog</a></p>
            <p><a href="#wgpt3">About</a></p>
            <p><a href="#possibility">Portfolio</a></p>
            <p><a href="#features">Hire me</a></p>
          </div>
        </div>
        <div className="gpt3__navbar-sign">
          <p>Sign in</p>
          <button type="button">Sign up</button>
        </div>
        <div className="gpt3__navbar-menu">
          {toggleMenu
            ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
          {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p><a href="#home">Home</a></p>
              <p><a href="#blog">Blog</a></p>
              <p><a href="#wgpt3">About</a></p>
              <p><a href="#possibility">Portfolio</a></p>
              <p><a href="#features">Hire me</a></p>
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;

