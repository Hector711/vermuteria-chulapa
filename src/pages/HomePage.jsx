import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate  = useNavigate();
  return (
    <>
      <main className='flex flex-col gap-4 justify-center'>
        <h3 className='text-center'>¿Alguna intolerancia?</h3>
        <div className='flex justify-center gap-4 '>
          <button onClick={() => {navigate('/filtros')}}>Si</button>
          <button onClick={() => {navigate('/carta')}}>No</button>
        </div>
      </main>
    </>
  );
}
