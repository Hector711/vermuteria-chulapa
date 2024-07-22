import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// CSS
import '@/css/init.css';
import '@/css/reset/reset.css';
import '@/css/elements.css';
import '@/css/nav.css';
import '@/css/main.css';

// TYPOGRAPHY
// Supports weights 300-800 : 'Open Sans Variable'
import '@fontsource-variable/open-sans';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
