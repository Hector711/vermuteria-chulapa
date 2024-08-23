import { Outlet } from 'react-router-dom';

export default function MenuLayout() {
  return (
    <>
      <header id='layout' className='animate-blink'>
        <h2 className='shadoww'>Menu Chulapa</h2>
      </header>
      <main className='animate-blink menu-page'>
        <Outlet />
      </main>
    </>
  );
}
