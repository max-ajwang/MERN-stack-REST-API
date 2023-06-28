//Router
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//Pages
import { Landing, Register, Dashboard, Error, Blog, About, Portfolio, Hireme } from './pages'

//create function based component and capitalize the first letter of the function name. 
//return JSX (html to be displayed in index.html)
function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/landing' element={<Landing />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Dashboard />} />
        <Route path='/blog' element={<Blog />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/portfolio' element={<Portfolio />}/>
        <Route path='/hireme' element={<Hireme />}/>
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App