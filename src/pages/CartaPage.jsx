import React from 'react';
import { useMenu } from '@/context/MenuContext';
import MenuList from '@/components/MenuList';
import menuComidasJson from '@/../menu-comidas.json';
import menuBebidasJson from '@/../menu-bebidas.json';

export default function CartaPage() {
  const menuComidas = Object.entries(menuComidasJson);
  const menuBebidas = Object.entries(menuBebidasJson);
  const { menu, filter, setMenu } = useMenu();
  return (
    <>
      <h2 className='text-center text-[3rem]'>Nuestra Carta</h2>
      <nav>
        <button onClick={() => setMenu('bebidas')}>Bebidas</button>
        <button onClick={() => setMenu('comidas')}>Comidas</button>
      </nav>
      {menu === 'bebidas' ? (
        <MenuList menu={menuBebidas} />
      ) : (
        <MenuList menu={menuComidas} />
      )}
    </>
  );
}
