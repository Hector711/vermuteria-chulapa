import React from 'react';
import { useMenu } from '@/context/MenuContext';
import MenuList from '@/components/MenuList';
// import menuComidasJson from '@/../menu_comidas.json';
import menuBebidasJson from '@/../menu_bebidas.json';
import Filter from '@/components/Filter';

export default function MenuPage() {
  // const menuComidas = Object.entries(menuComidasJson);
  const menuBebidas = Object.entries(menuBebidasJson);
  const { menu, setMenu, platosOrdenados } = useMenu();
  // console.log('MenuComidas:', menuComidas)
  // console.log('platosOrdenados:', platosOrdenados)

  const isActiveBebidas = menu === 'bebidas' ? 'active' : '' 
  const isActiveComidas = menu === 'comidas' ? 'active' : '' 
  return (
    <>
      <Filter />
      <div className='menu'>
        <nav className='menu'>
          <button onClick={() => setMenu('bebidas')} className={isActiveBebidas}>Bebidas</button>
          <button onClick={() => setMenu('comidas')} className={isActiveComidas}>Comidas</button>
        </nav>
        <section className='menu'>
          {menu === 'bebidas' ? (
            <MenuList menu={menuBebidas} />
          ) : (
            <>
              <MenuList menu={platosOrdenados} />
            </>
          )}
        </section>
      </div>
    </>
  );
}
