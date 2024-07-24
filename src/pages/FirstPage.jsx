import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <h3 className='text-center animate-blink'>¿TIENE ALGUNA INTOLERANCIA?</h3>
      <div className='flex justify-center gap-14 p-5'>
        <button
          onClick={() => {
            navigate('/filtros');
          }}
        >
          <p className='josefin uppercase'>Si</p>
        </button>
        <button
          onClick={() => {
            navigate('/menu');
          }}
        >
          <p className='josefin uppercase'>No</p>
        </button>
      </div>
    </>
  );
}
