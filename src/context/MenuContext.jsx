import { createContext, useContext, useState } from 'react';

const MenuContext = createContext();

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
};

export function MenuProvider({ children }) {
  const [menu, setMenu] = useState('bebidas');
  const [filter, setFilter] = useState('');
  return (
    <MenuContext.Provider
      value={{
        menu, filter, setMenu
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}
