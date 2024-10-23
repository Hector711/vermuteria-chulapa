import { BrowserRouter, Route, Routes } from 'react-router-dom';
// CONTEXT
import { MenuProvider } from '@/context/MenuContext';
// PAGES
import HomePage from '@/pages/HomePage';
import MenuPage from '@/pages/MenuPage';
import ItemPage from '@/pages/ItemPage';
import LoMejorPage from '@/pages/LoMejorPage';
import SpecialItemPage from '@/pages/SpecialItemPage';
function App() {
  return (
    <MenuProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/menu' element={<MenuPage />} />
          <Route path='/menu/:itemId' element={<ItemPage />} />
          <Route path='/lomejor' element={<LoMejorPage />} />
          <Route path='/lomejor/:itemId' element={<SpecialItemPage />} />
        </Routes>
      </BrowserRouter>
    </MenuProvider>
  );
}

export default App;
