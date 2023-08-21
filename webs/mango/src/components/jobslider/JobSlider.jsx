import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './style.css'

// import required modules
import { FreeMode, Navigation, Thumbs, Autoplay} from 'swiper';

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#facb22',
          '--swiper-pagination-color': '#facb22',
        }}
        spaceBetween={10}
        loop={true}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false
        }}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img className='aspect-[750/460] max-w-[800px]' src="../images/jobs/slider/slider1.webp" alt='equipo mangobc' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='aspect-[750/460] max-w-[800px]' src="../images/jobs/slider/slider2.webp" alt='equipo mangobc' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='aspect-[750/460] max-w-[800px]' src="../images/jobs/slider/slider3.webp" alt='equipo mangobc' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='aspect-[750/460] max-w-[800px]' src="../images/jobs/slider/slider4.webp" alt='equipo mangobc' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='aspect-[750/460] max-w-[800px]' src="../images/jobs/slider/slider5.webp" alt='equipo mangobc' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='aspect-[750/460] max-w-[800px]' src="../images/jobs/slider/slider6.webp" alt='equipo mangobc' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='aspect-[750/460] max-w-[800px]' src="../images/jobs/slider/slider7.webp" alt='equipo mangobc' />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
        breakpoints={
          {
            320: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4
            }
          }
        }
      >
        <SwiperSlide>
          <img src="../images/jobs/slider/slider1.webp" alt='equipo mangobc' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../images/jobs/slider/slider2.webp" alt='equipo mangobc' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../images/jobs/slider/slider3.webp" alt='equipo mangobc' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../images/jobs/slider/slider4.webp" alt='equipo mangobc' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../images/jobs/slider/slider5.webp" alt='equipo mangobc' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../images/jobs/slider/slider6.webp" alt='equipo mangobc' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../images/jobs/slider/slider7.webp" alt='equipo mangobc' />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
