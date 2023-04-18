//import ES6 modules
import React from "react"; 
import ReactDom from "react-dom";
//CSS
import './index.css'
//App
import App from './App'


//Render the component to 'root' in index.html by passing two arguments to the render property i.e 
//component to be rendered and where it will be rendered
ReactDom.render(<App/>, document.getElementById('root')); 