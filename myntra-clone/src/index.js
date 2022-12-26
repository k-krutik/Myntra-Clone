import React from 'react';
import ReactDOM from 'react-dom/client';
// import Home from './Components/Home/Home';
// import Product from './Components/Product/Product';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Men from './Components/Men/Men';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Home/> */}
    {/* <Product/> */}
    <Men/>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
