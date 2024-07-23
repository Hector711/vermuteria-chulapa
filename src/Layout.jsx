import React from 'react';
import { Outlet } from 'react-router-dom';
import mainInfo from '@/../main-info.json';
import logo from '@/assets/logo.png';

export default function Layout() {
  return (
    <>
      <header className='flex flex-col items-center'>
        <figure className='w-[50vw] justify-center h-[200px] '>
          <img src={logo} alt='' className='h-auto scale-150' />
        </figure>
        <p className='uppercase text-center text-[0.65rem]'>
          {mainInfo.location}
        </p>
        <h2 className='text-center text-[3rem] mt-2'>Nuestra Carta</h2>
      </header>
      <main className='flex flex-col gap-4  justify-center my-4'>
        <Outlet />
      </main>
    </>
  );
}
