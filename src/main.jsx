import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// CSS
import '@/css/reset/reset.scss';
import '@/css/init.scss';

// PAGES
import '@/css/page_menu.scss';
import '@/css/page_home.scss';
import '@/css/page_lo-mejor.scss';

// COMPONENTS
import '@/css/comp_button.scss';
import '@/css/comp_carousel.scss';
import '@/css/comp_item-card.scss';

// TYPOGRAPHY
// Supports weights 300-800 : 'Open Sans Variable'
import '@fontsource-variable/open-sans';
// Supports weights 100-700 : 'Josefin Sans Variable'
import '@fontsource-variable/josefin-sans';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
);
