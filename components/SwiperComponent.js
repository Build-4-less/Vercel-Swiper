
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import 'swiper/swiper-bundle.min.css';

const SwiperComponent = () => {
  return (
    <Swiper
      direction={'vertical'}
      slidesPerView={1}
      spaceBetween={30}
      mousewheel={true}
      modules={[Mousewheel]}
      className="mySwiper"
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
