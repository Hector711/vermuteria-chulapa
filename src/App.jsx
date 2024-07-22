import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import CartaPage from '@/pages/CartaPage';
import Layout from '@/Layout';
import { MenuProvider } from '@/context/MenuContext';

export default function App() {
  return (
    <MenuProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<HomePage />} />
          </Route>
          <Route path='/carta' element={<CartaPage />} />
        </Routes>
      </BrowserRouter>
    </MenuProvider>
  );
}
