// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import Navbar from "./components/Navbar.jsx"

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Navbar />
//     <App />
//   </StrictMode>,
// )


// index.js or App.js

import React from 'react';
import ReactDOM from 'react-dom/client';  // Use the correct import for React 18
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
// Get the root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app with BrowserRouter wrapped around it
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
