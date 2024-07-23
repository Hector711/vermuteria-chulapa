import React from 'react';
import { Outlet } from 'react-router-dom';
import mainInfo from '@/../main-info.json';
import logo from '@/assets/logo.png';

export default function MainLayout() {
  return (
    <>
      <header id='layout'>
        <figure className='w-[50vw] justify-center h-[200px] '>
          <img src={logo} alt='' className='h-auto scale-150' />
        </figure>
        <p className='uppercase text-center text-[0.65rem]'>
          {mainInfo.location}
        </p>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
