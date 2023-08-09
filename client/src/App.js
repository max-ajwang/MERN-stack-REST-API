//Router
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//Pages
import { Landing, Subscribe, Error, About, Portfolio, Blog } from './pages'

//create function based component and capitalize the first letter of the function name. 
//return JSX (html to be displayed in index.html)
function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/subscribe' element={<Subscribe />} />
        <Route path='/about' element={<About />}/>
        <Route path='/portfolio' element={<Portfolio />}/>
        <Route path='./blog' element={<Blog />}/>
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App