import React from 'react';
import ReactDOM from 'react-dom/client';
import Routerpage from './Warden/Routerpage';
import './index.css';
import WardenMain from './Warden/WardenMain';
import Fauth from './Food_auth/fauth';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Fauth />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
