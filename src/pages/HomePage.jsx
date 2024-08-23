import React from 'react';
import InstagramIcon from '../icons/InstagramIcon';
import FacebookIcon from '../icons/FacebookIcon';
import WideButton from '@/components/WideButton';
import { useMenu } from '@/context/MenuContext';
import ProfileLink from '@/components/ProfileLink';
import ChatbotIcon from '@/icons/ChatbotIcon';
import MenuIcon from '@/icons/MenuIcon';

export default function HomePage() {
  const { info } = useMenu();
  console.log('info:', info);
  const social = info && info[0].profiles_rrss;
  console.log('social:', social);
  return (
    <>
      <section className='home-page'>
        <WideButton
          to='/menu'
          title='Ver Carta'
          icon={<MenuIcon />}
        />
        <WideButton
          title='Chatbot AI'
          subtitle='Reservas, horarios, preguntas, etc.'
          href='https://wa.me/message/CCNHZSUT7LIDE1'
          target='_blank'
          icon={<ChatbotIcon />}

        />
      </section>
      <section className='home-page'>
        <WideButton
          subtitle='Prueba nuestra nueva hamburguesa'
          to='/menu'
          img='https://www.cnature.es/wp-content/uploads/2021/12/hamburguesa-con-guacamole.jpg'
        />
      </section>
      <footer className='home-page'>
        {info && (
          <>
            <ProfileLink href={social.instagram} >
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
