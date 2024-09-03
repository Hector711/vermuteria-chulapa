import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';
import NovedadButton from '@/components/NovedadButton';

export default function CarouselNovedades({ images }) {
  return (
    <Swiper
      slidesPerView={1.5}
      spaceBetween={30}
      speed={1000}
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
      {images.map(({ title, img, to }, index) => (
        <SwiperSlide key={index}>
          <NovedadButton title={title} img={img} to={to} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
