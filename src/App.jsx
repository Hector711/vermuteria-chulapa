import { BrowserRouter, Route, Routes } from 'react-router-dom';
// CONTEXT
import { MenuProvider } from '@/context/MenuContext';
// LAYOUTS
import HomeLayout from '@/layouts/HomeLayout';
import MenuLayout from '@/layouts/MenuLayout';
// PAGES
import HomePage from '@/pages/HomePage';
import MenuPage from '@/pages/MenuPage';

export default function App() {
  return (
    <MenuProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<HomeLayout />}>
            <Route path='/' element={<HomePage />} />
          </Route>
          <Route element={<MenuLayout />}>
            <Route path='/menu' element={<MenuPage />} />
            <Route path='/menu/:id' element={<MenuPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MenuProvider>
  );
}

