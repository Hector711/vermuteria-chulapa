import { Link } from 'react-router-dom';
import CarouselNovedades from '@/components/CarouselNovedades';

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
        <section className='special-items-section'>
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
        </section>
      </main>
    </>
  );
}
