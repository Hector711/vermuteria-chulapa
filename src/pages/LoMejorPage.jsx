import { Link } from 'react-router-dom';
import CarouselNovedades from '@/components/CarouselNovedades';
import { useMenu } from '@/context/MenuContext';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';
import SpecialItemButton from '@/components/SpecialItemButton';

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

export default function LoMejorPage() {
  const { specialItems } = useMenu();
  return (
    <>
      <header className='lo-mejor-page'>
        <Link to='/'>
          <h2 className='lo-mejor-page page-title'>Platos estrella</h2>
        </Link>
      </header>
      <main className='animate-blink lo-mejor-page'>
        <p>
          Te presentamos los platos y bebidas que no solo son los favoritos de
          nuestros clientes, sino también nuestras recomendaciones especiales.
        </p>
        {specialItems.map((section, i) => (
          <ul className='section-menu' key={i}>
            <h3 className='special-title'>{section[0]}</h3>
            <hr />
            <Swiper
              slidesPerView={1.5}
              spaceBetween={30}
              speed={1000}
              centeredSlides={true}
              pagination={{
                clickable: true,
              }}
              loop={true}
              // autoplay={{
              //   delay: 4000,
              //   disableOnInteraction: true,
              // }}
              modules={[Autoplay, Navigation]}
              id='swiper-images'
            >
            {section[1].map(({ nombre }, index) => (
              <li key={i}>
                <SwiperSlide key={index}>
                  <SpecialItemButton title={nombre} />
                </SwiperSlide>
                {/* <Link
                  to=''
                  // to={`/menu/${item.id}`}
                  className='row item-menu'
                  >
                </Link> */}
              </li>
            ))}
            </Swiper>
          </ul>
        ))}

        {/* <section className='special-items-section'>
          <h3 className='special-title'>Vermuts</h3>
          <CarouselNovedades items={SLIDES_ITEMS} />
        </section>
        <section className='special-items-section'>
          <h3 className='special-title'>Tortillas</h3>
          <CarouselNovedades items={SLIDES_ITEMS} />
        </section>
        <section className='special-items-section'>
          <h3 className='special-title'>Cócteles</h3>
          <CarouselNovedades items={SLIDES_ITEMS} />
        </section>
        <section className='special-items-section'>
          <h3 className='special-title'>Otros platos estrella</h3>
          <CarouselNovedades items={SLIDES_ITEMS} />
        </section> */}
      </main>
    </>
  );
}
