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
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';
import SpecialItem from '@/components/SpecialItem';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';

export default function HomePage() {
  const { info, specialItems, mainSpecialItems } = useMenu();
  return (
    <>
      <header className='animate-fade-in-down animate-delay-100 animate-duration-400 home-page'>
        <figure>
          <img src={logo} alt='' className='shadoww' />
        </figure>
        <p className='uppercase text-center text-[0.65rem]'>
          {info?.ubicacion}
        </p>
      </header>
      <main className='home-page animate-fade-in-up animate-delay-300 animate-duration-900'>
        <section className='home-page main-buttons'>
          <WideButton
            type='link'
            to='/menu'
            title='Ver Toda La Carta'
            icon={<MenuIcon />}
          />
          {info?.whatsapp_url && (
            <WideButton
              type='a'
              title='Chatbot AI'
              subtitle='Reservas, horarios, preguntas, etc.'
              href={info?.whatsapp_url}
              target='_blank'
              icon={<ChatbotIcon />}
            />
          )}
        </section>
        <hr />
        <section className='home-page special-items-section'>
          {mainSpecialItems?.length > 0 && (
            <>
              <Link to='/lomejor' className='lo-mejor-link shadoww'>
                <header className='lo-mejor-title'>
                  <StarIcon />
                  <h3 className='special-title'>Lo mejor de Chulapa</h3>
                </header>
              </Link>
              <div className='special-items-container'>
                <Swiper
                  slidesPerView={1.5}
                  spaceBetween={30}
                  speed={2000}
                  centeredSlides={true}
                  pagination={{
                    clickable: true,
                  }}
                  loop={true}
                  autoplay={{
                    delay: 1000,
                    disableOnInteraction: true,
                  }}
                  modules={[Autoplay, Navigation]}
                  id='swiper-images'
                >
                  {mainSpecialItems?.map(({ nombre, imagen_url }, i) => (
                    <SwiperSlide key={i}>
                      <SpecialItem title={nombre} img={imagen_url} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </>
          )}
        </section>
        <footer className='home-page'>
          <div className='social-links-container'>
            {info && (
              <>
                <ProfileLink href={info.instagram_url}>
                  <InstagramIcon />
                </ProfileLink>
                <ProfileLink href={info.facebook_url}>
                  <FacebookIcon />
                </ProfileLink>
              </>
            )}
          </div>

          {/* <Credits /> */}
        </footer>
      </main>
    </>
  );
}
