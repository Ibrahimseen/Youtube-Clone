import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

// Increase the max listeners for EventEmitter
require('events').EventEmitter.defaultMaxListeners = 15;

// Render the App inside BrowserRouter
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// Report web vitals for performance metrics
reportWebVitals();
