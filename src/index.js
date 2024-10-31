import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import WardenMain from './Warden/WardenMain';
import Fauth from './Food_auth/fauth';
import Routerpage from './Routerpage';
import reportWebVitals from './reportWebVitals';
import AdminMain from './Admin/AdminMain';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css' 
import 'react-toastify/dist/ReactToastify.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routerpage  />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
