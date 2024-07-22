import { useState } from 'react';
import mainInfo from '@/../main-info.json';
import MenuBebidas from './componentes/MenuBebidas';
import MenuComidas from './componentes/MenuComidas';

export default function App() {
  const [menu, setMenu] = useState('bebidas');

  return (
    <>
      <header>
        <h2 className='uppercase font-extrabold text-[1.1rem] text-center'>
          Vermutería
        </h2>
        <h1 className='uppercase text-center font-[800] text-[1.8rem]'>
          Chu <br /> la <br /> pa
        </h1>
        <p className='uppercase text-center'>{mainInfo.location}</p>
        <p className='text-center text-[1.2rem]'>Nuestra Carta</p>
      </header>
      <nav>
        <button onClick={() => setMenu('bebidas')}>Bebidas</button>
        <button onClick={() => setMenu('comidas')}>Comidas</button>
      </nav>

      <main>
        {menu === 'bebidas' ? (
          <MenuBebidas />
        ) : (
          <MenuComidas />
        )}
      </main>
      <footer >
        <p>Pulsa aqui cuando estes listo para pedir</p>
        <button>Listo!</button>
      </footer>
    </>
  );
}