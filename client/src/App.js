import React from 'react'
//CSS
import './assets/css/App.css';
import Landing from './pages/Landing';
//Router
import {BrowserRouter, Routes, Route} from 'react-router-dom'


//create function based component and capitalize the first letter of the function name. 
//return JSX (html to be displayed in index.html)
function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>Dashboard</div>} />
        <Route path='/register' element={<div>Register</div>} />
        <Route path='/landing' element={<Landing />} />
        <Route path='*' element={<h1>Error</h1>} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App