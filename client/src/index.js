//import ES6 modules
import React from "react"; 
import ReactDom from "react-dom";

//CSS
import './index.css'
import {books} from './components/Book/books'
import Book from './components/Book/Book'

import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';

//create function based component and capitalize the first letter of the function name. 
//return JSX (html to be displayed in index.html)
function App () {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/blogs' component={Blogs} />
          <Route path='/sign-up' component={SignUp} />
        </Routes>
      </Router>

      <section className="booklist">
        {books.map((book) => {
          return (
            <Book key={book.id} book={book}>

            </Book>
          );
        })}
      </section>
    </>
  );
}

/*const Person = () => ;

const Message = () => {
  return <p>Stables - Premiering Soon!! August 2023</p>
};*/

//Render the component to 'root' in index.html by passing two arguments to the render property i.e 
//component to be rendered and where it will be rendered
ReactDom.render(<App/>, document.getElementById('root')); 