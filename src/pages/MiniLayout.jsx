import React from 'react';
import { Outlet } from 'react-router-dom';

export default function FirstLayout() {
  return (
    <>
      <header id='layout'>
        <h2 className='text-center text-[3rem]'>Nuestra Carta</h2>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
