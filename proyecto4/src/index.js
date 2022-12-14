import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Navbar } from './components/nav.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <App />
  </React.StrictMode>
);


