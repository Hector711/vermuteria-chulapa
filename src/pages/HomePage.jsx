import React from 'react';
import { useNavigate } from 'react-router-dom';
import InstagramIcon from '../icons/InstagramIcon';
import FacebookIcon from '../icons/FacebookIcon';
import WideButton from '@/components/WideButton';
import { useMenu } from '@/context/MenuContext';
import ProfileLink from '@/components/ProfileLink';

export default function HomePage() {
  const navigate = useNavigate();
  const { info } = useMenu();
  console.log('info:', info);
  const social = info && info[0].profiles_rrss;
  console.log('social:', social);
  return (
    <>
      <section className='home-page'>
        <WideButton
          onClick={() => {
            navigate('/menu');
          }}
        >
          Ver Carta
        </WideButton>
        <WideButton>Reservas</WideButton>
        <WideButton>Contacto</WideButton>
      </section>
      <footer className='home-page'>
        {info && (
          <>
            <ProfileLink href={social.instagram}>
              <InstagramIcon />
            </ProfileLink>
            <ProfileLink href={social.instagram}>
              <FacebookIcon />
            </ProfileLink>
          </>
        )}
      </footer>
    </>
  );
}
