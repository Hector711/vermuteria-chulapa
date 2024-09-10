import { Outlet } from 'react-router-dom';
import { useMenu } from '@/context/MenuContext';

import logo from '@/assets/logo.png';

export default function HomeLayout() {
  
  return (
    <>
      <header className='animate-blink home-page'>
        <figure>
          <img src={logo} alt='' className='shadoww'/>
        </figure>
        <p className='uppercase text-center text-[0.65rem]'>
          {location}
        </p>
      </header>
      <main className='animate-blink home-page'>
        <Outlet />
      </main>
    </>
  );
}
