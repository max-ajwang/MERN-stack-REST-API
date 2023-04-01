//import ES6 modules
import React from "react"; 
import ReactDom from "react-dom";

//CSS
import './index.css'
import {books} from './books'
import Book from './Book'

//create function based component and capitalize the first letter of the function name. 
//return JSX (html to be displayed in index.html)
function App () {
  return (
    <section className="booklist">
      {books.map((book) => {
        return (
          <Book key={book.id} book={book}>

          </Book>
        );
      })}
    </section>
  );
}

/*const Person = () => <h2>Max Ajwang'</h2>;

const Message = () => {
  return <p>Stables - Premiering Soon!! August 2023</p>
};*/

//Render the component to 'root' in index.html by passing two arguments to the render property i.e 
//component to be rendered and where it will be rendered
ReactDom.render(<App/>, document.getElementById('root')); 