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

import logo from '@/assets/logo.png';

const SLIDES_NOVEDADES = [
  {
    title: 'Hamburguesa con guacamole',
    img: 'https://www.cnature.es/wp-content/uploads/2021/12/hamburguesa-con-guacamole.jpg',
    to: '/menu',
  },
  {
    title: 'Hamburguesa con guacamole',
    img: 'https://www.cnature.es/wp-content/uploads/2021/12/hamburguesa-con-guacamole.jpg',
    to: '/menu',
  },
  {
    title: 'Hamburguesa con guacamole',
    img: 'https://www.cnature.es/wp-content/uploads/2021/12/hamburguesa-con-guacamole.jpg',
    to: '/menu',
  },
  {
    title: 'Hamburguesa con guacamole',
    img: 'https://www.cnature.es/wp-content/uploads/2021/12/hamburguesa-con-guacamole.jpg',
    to: '/menu',
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
          {info.whatsapp_url && (
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
        <section className='home-page novedades-section'>
          {/* <header className='novedades-section'>
            <StarIcon />
            <h3 className='novedades-section'>Lo mejor de Chulapa</h3>
          </header>
          <div className='novedades-container'>
            <CarouselNovedades images={SLIDES_NOVEDADES} />
          </div> */}
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

          <div className='credits-container'>
            <p>Diseño y desarrollo por</p>
            <a
              href='https://hector-guerra.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              Héctor Guerra
            </a>
          </div>
        </footer>
      </main>
    </>
  );
}
