import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';
import SpecialItem from '@/components/SpecialItem';

export default function CarouselNovedades({ items }) {
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
        delay: 4000,
        disableOnInteraction: true,
      }}
      modules={[Autoplay, Navigation]}
      id='swiper-images'
    >
      {items.map(({ title, img, to }, i) => (
        <SwiperSlide key={i}>

          {/* <SpecialItemButton title={title} img={img} to={to} /> */}

        </SwiperSlide>
      ))}
    </Swiper>
  );
}
 