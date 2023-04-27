import React from 'react'

import {Footer, Blog, Possibility, Features, WhatGPT3, Header} from './containers';
import { CTA, Brand, Navbar } from './components';
//CSS
import './App.css';

//create function based component and capitalize the first letter of the function name. 
//return JSX (html to be displayed in index.html)
function App () {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App