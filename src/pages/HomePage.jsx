import React from 'react';
import InstagramIcon from '../icons/InstagramIcon';
import FacebookIcon from '../icons/FacebookIcon';
import WideButton from '@/components/WideButton';
import { useMenu } from '@/context/MenuContext';
import ProfileLink from '@/components/ProfileLink';
import ChatbotIcon from '@/icons/ChatbotIcon';
import MenuIcon from '@/icons/MenuIcon';
import NovedadButton from '@/components/NovedadButton';

export default function HomePage() {
  const { info } = useMenu();
  // console.log('info:', info);
  const social = info && info[0].profiles_rrss;
  // console.log('social:', social);
  return (
    <>
      <section className='home-page'>
        <WideButton
          type='link'
          to='/menu'
          title='Ver Carta'
          icon={<MenuIcon />}
        />
        <WideButton
          type='a'
          title='Chatbot AI'
          subtitle='Reservas, horarios, preguntas, etc.'
          href='https://wa.me/message/CCNHZSUT7LIDE1'
          target='_blank'
          icon={<ChatbotIcon />}
        />
      </section>
      <hr />
      <section className='home-page novedades-section'>
        <h3>NOVEDADES</h3>
        <div className='novedades-container'>
          <NovedadButton
            title='Hamburguesa con guacamole'
            to='/menu'
            img='https://www.cnature.es/wp-content/uploads/2021/12/hamburguesa-con-guacamole.jpg'
          />
          <NovedadButton
            title='Hamburguesa con guacamole'
            to='/menu'
            img='https://www.cnature.es/wp-content/uploads/2021/12/hamburguesa-con-guacamole.jpg'
          />
          <NovedadButton
            title='Hamburguesa con guacamole'
            to='/menu'
            img='https://www.cnature.es/wp-content/uploads/2021/12/hamburguesa-con-guacamole.jpg'
          />
        </div>
      </section>
      <footer className='home-page'>
        {info && (
          <>
            <ProfileLink href={social.instagram}>
              <InstagramIcon />
            </ProfileLink>
            <ProfileLink href={social.facebook}>
              <FacebookIcon />
            </ProfileLink>
          </>
        )}
      </footer>
    </>
  );
}
