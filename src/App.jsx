import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FirstPage from '@/pages/FirstPage';
import FiltersPage from '@/pages/FiltersPage';
import MenuPage from '@/pages/MenuPage';
import Layout from '@/Layout';
import { MenuProvider } from '@/context/MenuContext';

export default function App() {
  return (
    <MenuProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<FirstPage />} />
            <Route path='/filtros' element={<FiltersPage />} />
          </Route>
          <Route path='/menu' element={<MenuPage />} />
        </Routes>
      </BrowserRouter>
    </MenuProvider>
  );
}
