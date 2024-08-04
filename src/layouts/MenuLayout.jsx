import { Outlet } from 'react-router-dom';

export default function MenuLayout() {
  return (
    <>
      <header id='layout' className='animate-blink'>
        <h2 >Nuestra Carta</h2>
      </header>
      <main className='animate-blink'>
        <Outlet />
      </main>
    </>
  );
}
