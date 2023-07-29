//Router
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//Pages
import { Landing, Register, Dashboard, Error, About } from './pages'

//create function based component and capitalize the first letter of the function name. 
//return JSX (html to be displayed in index.html)
function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/register' element={<Register />} />
        <Route path='/about' element={<About />}/>
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App