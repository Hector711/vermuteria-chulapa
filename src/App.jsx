import { useState } from 'react';
import mainInfo from '@/../main-info.json';
import MenuBebidas from './componentes/MenuBebidas';
import MenuComidas from './componentes/MenuComidas';
import logo from '@/assets/logo.png';

export default function App() {
  const [menu, setMenu] = useState('bebidas');
  return (
    <>
      <header>
        <figure className='w-full flex justify-center h-[200px] '>
          <img src={logo} alt='' className='h-auto scale-150' />
        </figure>
        <p className='uppercase text-center'>{mainInfo.location}</p>
        <h2 className='text-center text-[3rem]'>Nuestra Carta</h2>
      </header>
      <nav>
        <button onClick={() => setMenu('bebidas')}>Bebidas</button>
        <button onClick={() => setMenu('comidas')}>Comidas</button>
      </nav>

      <main>{menu === 'bebidas' ? <MenuBebidas /> : <MenuComidas />}</main>
      <footer>
        <p>Pulsa aqui cuando estes listo para pedir</p>
        <button>Listo!</button>
      </footer>
    </>
  );
}
