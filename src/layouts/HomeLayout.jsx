import { Outlet } from 'react-router-dom';
import { useMenu } from '@/context/MenuContext';

import logo from '@/assets/logo.png';

export default function HomeLayout() {
  const { info } = useMenu();
  const location = info && info[0].location 
  return (
    <>
      <header className='animate-blink home-page'>
        <figure >
          <img src={logo} alt='' />
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
