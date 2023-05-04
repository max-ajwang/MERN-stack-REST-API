import React from 'react';
//import gpt3Logo from '../../assets/logo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <h1> Max Ajwang' </h1>  
        <p> All Rights Reserved </p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p><a href='www.linkedin.com'> LinkedIn </a></p>
        <p><a href='www.twitter.com'> Twitter </a></p>
        <p><a href='www.instagram.com'> Instagram </a></p>
        <p><a href='www.youtube.com'> YouTube </a></p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2023 maxajwang. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
