import React from 'react'
//CSS
import './assets/css/App.css';
//Router
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//Pages
import { Dashboard, Landing, Error, Register } from './pages'

//create function based component and capitalize the first letter of the function name. 
//return JSX (html to be displayed in index.html)
function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Dashboard />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App