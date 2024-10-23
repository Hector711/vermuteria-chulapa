import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/App';

// CSS
import '@/styles/reset/reset.scss';
import '@/styles/init.scss';

// PAGES
import '@/styles/page_menu.scss';
import '@/styles/page_home.scss';
import '@/styles/page_lo-mejor.scss';
import '@/styles/page_item-page.scss';

// COMPONENTS
import '@/styles/comp_button.scss';
import '@/styles/comp_carousel.scss';
import '@/styles/comp_filter.scss';
import '@/styles/comp_spinner.scss';

// TYPOGRAPHY
// Supports weights 300-800 : 'Open Sans Variable'
import '@fontsource-variable/open-sans';
// Supports weights 100-700 : 'Josefin Sans Variable'
import '@fontsource-variable/josefin-sans';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<h2 id='suspense'>LOADING...</h2>}>
      <App />
    </Suspense>
  </StrictMode>,
);
