import { BrowserRouter, Route, Routes } from 'react-router-dom';
// CONTEXT
import { MenuProvider } from '@/context/MenuContext';
// LAYOUTS
import HomeLayout from '@/layouts/HomeLayout';
import MenuLayout from '@/layouts/MenuLayout';
// PAGES
import HomePage from '@/pages/HomePage';
import MenuPage from '@/pages/MenuPage';
import ItemPage from '@/pages/ItemPage';

export default function App() {
  return (
    <MenuProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route element={<MenuLayout />}>
            <Route path='/menu' element={<MenuPage />} />
            <Route path='/menu/:itemId' element={<ItemPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MenuProvider>
  );
}

