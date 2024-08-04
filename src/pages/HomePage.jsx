import React from 'react';
import { useNavigate } from 'react-router-dom';
import InstagramIcon from '../icons/InstagramIcon';
import FacebookIcon from '../icons/FacebookIcon';

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <section className='home-page'>
        <button
          onClick={() => {
            navigate('/menu');
          }}
        >
          Ver Carta
        </button>
      </section>
      <footer className='home-page'>
        <a href=''>
          <InstagramIcon />
        </a>
        <a href=''>
          <FacebookIcon />
        </a>
      </footer>
    </>
  );
}
