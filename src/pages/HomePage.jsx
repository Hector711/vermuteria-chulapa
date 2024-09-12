import React from 'react';
import InstagramIcon from '../icons/InstagramIcon';
import FacebookIcon from '../icons/FacebookIcon';
import WideButton from '@/components/WideButton';
import { useMenu } from '@/context/MenuContext';
import ProfileLink from '@/components/ProfileLink';
import ChatbotIcon from '@/icons/ChatbotIcon';
import MenuIcon from '@/icons/MenuIcon';
import CarouselNovedades from '@/components/CarouselNovedades';
import StarIcon from '@/icons/StarIcon';
import Credits from '@/components/Credits';

import logo from '@/assets/logo.png';

const SLIDES_ITEMS = [
  {
    title: 'Hamburguesa con guacamole',
    img: 'https://www.cnature.es/wp-content/uploads/2021/12/hamburguesa-con-guacamole.jpg',
    to: '/lomejor',
  },
  {
    title: 'Hamburguesa con guacamole',
    img: 'https://www.cnature.es/wp-content/uploads/2021/12/hamburguesa-con-guacamole.jpg',
    to: '/lomejor',
  },
  {
    title: 'Hamburguesa con guacamole',
    img: 'https://www.cnature.es/wp-content/uploads/2021/12/hamburguesa-con-guacamole.jpg',
    to: '/lomejor',
  },
  {
    title: 'Hamburguesa con guacamole',
    img: 'https://www.cnature.es/wp-content/uploads/2021/12/hamburguesa-con-guacamole.jpg',
    to: '/lomejor',
  },
];

export default function HomePage() {
  const { info } = useMenu();
  const social = info && info.profiles_rrss;
  const location = info && info.location;

  return (
    <>
      <header className='animate-blink home-page'>
        <figure>
          <img src={logo} alt='' className='shadoww' />
        </figure>
        <p className='uppercase text-center text-[0.65rem]'>{location}</p>
      </header>
      <main className='animate-blink home-page'>
        <section className='home-page main-buttons'>
          <WideButton
            type='link'
            to='/menu'
            title='Ver Toda La Carta'
            icon={<MenuIcon />}
          />
          {info &&info.whatsapp_url && (
            <WideButton
              type='a'
              title='Chatbot AI'
              subtitle='Reservas, horarios, preguntas, etc.'
              href={info.whatsapp_url}
              target='_blank'
              icon={<ChatbotIcon />}
            />
          )}
        </section>
        <hr />
        <section className='home-page special-items-section'>
          <header className='lo-mejor-title'>
            <StarIcon />
            <h3 className='special-title'>Lo mejor de Chulapa</h3>
          </header>
          <div className='special-items-container'>
            <CarouselNovedades items={SLIDES_ITEMS} />
          </div>
        </section>
        <footer className='home-page'>
          <div className='social-links-container'>
            {social && (
              <>
                <ProfileLink href={social.instagram}>
                  <InstagramIcon />
                </ProfileLink>
                <ProfileLink href={social.facebook}>
                  <FacebookIcon />
                </ProfileLink>
              </>
            )}
          </div>

          <Credits />
        </footer>
      </main>
    </>
  );
}
