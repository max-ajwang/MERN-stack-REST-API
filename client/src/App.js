import React from 'react'

import { Article, Book, Brand, CTA, Feature, Navbar } from './components'

//create function based component and capitalize the first letter of the function name. 
//return JSX (html to be displayed in index.html)
function App () {
  return (
    <div>GPt-3</div>
    /*
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
    </>*/
  );
}

export default App