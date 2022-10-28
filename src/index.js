import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {ErrorBoundary} from './components/ErrorBoundary.js'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ErrorBoundary>
    <App />
    </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);
