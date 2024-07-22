import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// CSS
import '@/css/init.css';
import '@/css/reset/reset.css';
import '@/css/section-nav.css';
import '@/css/section-main.css';

// TYPOGRAPHY
// Supports weights 300-800 : 'Open Sans Variable'
import '@fontsource-variable/open-sans';
// Supports weights 100-900 : 'Noto Sans JP Variable'
import '@fontsource-variable/noto-sans-jp';
// Supports weights 100-700 : 'Josefin Sans Variable'
import '@fontsource-variable/josefin-sans';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
