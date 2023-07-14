//import ES6 modules
import React from "react"; 
import ReactDom from "react-dom";
import 'normalize.css'
//CSS
import './index.css';
import App from './App';
import { AppProvider } from "./context/appContext";


//Render the component to 'root' in index.html by passing two arguments to the render property i.e 
//component to be rendered and where it will be rendered
ReactDom.render(
    <React.StrictMode>
        <AppProvider>
            <App />
        </AppProvider>
    </React.StrictMode>, 
    document.getElementById('root')
); 