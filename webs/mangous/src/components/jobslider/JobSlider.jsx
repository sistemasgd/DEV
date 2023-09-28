import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './style.css'

import { sliders } from './SliderImages';

// import required modules
import { EffectFade ,FreeMode, Navigation, Thumbs, Autoplay} from 'swiper';

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
        effect={'fade'}
        loop={true}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[EffectFade, FreeMode, Navigation, Thumbs, Autoplay]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false
        }}
        className="mySwiper2"
      >
        {
          sliders.map((img) => (
            <SwiperSlide key={img.id}>
              <img className='max-w-[800px]' src={img.image} alt='equipo mangobc' />
            </SwiperSlide>
          ))
        }
       
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
        {
          sliders.map((img) => (
            <SwiperSlide key={img.id}>
              <img className='max-w-[800px]' src={img.image} alt='equipo mangobc' />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}
