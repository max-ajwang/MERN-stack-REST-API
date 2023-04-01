//import ES6 modules
import React from "react"; 
import ReactDom from "react-dom";
//create function based component and capitalize the first letter of the function name. 
//return JSX (html to be displayed in index.html)
function App () {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>Max Ajwang'</h2>;

const Message = () => {
  return <p>Stables - Premiering Soon!! August 2023</p>
};

//Render the component to 'root' in index.html by passing two arguments to the render property i.e 
//component to be rendered and where it will be rendered
ReactDom.render(<App/>, document.getElementById('root')); 