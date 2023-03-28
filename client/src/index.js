//import ES6 modules
import React from "react"; 
import ReactDom from "react-dom";
//create function based component and capitalize the first letter of the function name. 
//return JSX (html to be displayed in index.html)
function Greeting(){
  return <h4>Max, first component</h4>; 
}
//Render the component to 'root' in index.html by passing two arguments to the render property i.e 
//component to be rendered and where it will be rendered
ReactDom.render(<Greeting/>, document.getElementById('root')); 