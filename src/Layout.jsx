import React from 'react';
import { Outlet } from 'react-router-dom';
import mainInfo from '@/../main-info.json';
import logo from '@/assets/logo.png';

export default function Layout() {
  return (
    <>
      <header>
        <figure className='w-full flex justify-center h-[200px] '>
          <img src={logo} alt='' className='h-auto scale-150' />
        </figure>
        <p className='uppercase text-center'>{mainInfo.location}</p>
      </header>
      <Outlet />
    </>
  );
}
