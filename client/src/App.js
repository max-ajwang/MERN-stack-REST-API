import React from 'react'
//CSS
import './assets/css/App.css';
import { Navbar, Header } from './components';


//create function based component and capitalize the first letter of the function name. 
//return JSX (html to be displayed in index.html)
function App () {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
    </div>
  )
}

export default App