import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

// .render will put the <App/> component into the root..... so if App has any HTML then it will go to root in index.html
ReactDOM.render(<App/>, document.getElementById('root'));
//            ( component, Reference )

{/* <React.StrictMode>
  <App />
  </React.StrictMode>, 
*/}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
