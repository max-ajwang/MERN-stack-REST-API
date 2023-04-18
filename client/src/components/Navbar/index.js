import React from 'react';
import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLogo to='/'>
          WBM
        </NavLogo>

        <Bars />
        
        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink> 
          <NavLink to='/about' activeStyle>
            About
          </NavLink>          
          <NavLink to='/blogs' activeStyle>
            Blogs
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;