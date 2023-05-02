import React from 'react'

import { Blog } from './containers';
import { Navbar } from './components';
//CSS
import './App.css';

//create function based component and capitalize the first letter of the function name. 
//return JSX (html to be displayed in index.html)
function App () {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
      </div>
      <Blog />
    </div>
  )
}

export default App