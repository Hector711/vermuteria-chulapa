import { Outlet, Link } from 'react-router-dom';

export default function MenuLayout() {
  return (
    <>
      <header id='layout' className='animate-blink'>
        <Link to='/'>
          <h2 className='shadoww'>Menu Chulapa</h2>
        </Link>
      </header>
      <main className='animate-blink menu-page'>
        <Outlet />
      </main>
    </>
  );
}
