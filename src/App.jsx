import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FirstPage from '@/pages/FirstPage';
import FiltersPage from '@/pages/FiltersPage';
import MenuPage from '@/pages/MenuPage';
// import MenuPage2 from '@/pages/MenuPage2';
import FirstLayout from '@/pages/FirstLayout';
import MiniLayout from '@/pages/MiniLayout';
import { MenuProvider } from '@/context/MenuContext';

export default function App() {
  return (
    <MenuProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<FirstLayout />}>
            <Route path='/' element={<FirstPage />} />
            <Route path='/filtros' element={<FiltersPage />} />
          </Route>
          <Route element={<MiniLayout />}>
            <Route path='/menu' element={<MenuPage />} />
            {/* <Route path='/menu2' element={<MenuPage2 />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </MenuProvider>
  );
}
