
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper'
// Import Swiper styles
// <MySwiper client:load />
import 'swiper/css'
import 'swiper/css/navigation'

export default function MySwiper() {

    return (
        <Swiper
            slidesPerView={4}
            navigation={true}
            loop={true}
            autoplay={{
                delay: 1000,
                disableOnInteraction: false
            }}
            modules={[Autoplay, Navigation]}
            className='mySwiper'
            breakpoints={
                {
                    320: {
                        slidesPerView: 1,
                    },
                    760: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4
                    }
                }
            }
            style={{
                ".swiper-button-next": "red"
            }}
        >
            <SwiperSlide>
                <img className='aspect-[120/120] object-contain max-w-[120px] m-auto p-5' src='images/about/swiper/brand1.webp' alt='oxxo' />
            </SwiperSlide>
            <SwiperSlide>
                <img className='aspect-[120/120] object-contain max-w-[120px] m-auto' src='images/about/swiper/brand2.webp' alt='calimax' />
            </SwiperSlide>
            <SwiperSlide>
                <img className='aspect-[120/120] object-contain max-w-[120px] m-auto' src='images/about/swiper/brand3.webp' alt='alsuper' />
            </SwiperSlide>
            <SwiperSlide>
                <img className='aspect-[120/120] object-contain max-w-[120px] m-auto' src='images/about/swiper/brand4.webp' alt='lacomer' />
            </SwiperSlide>
            <SwiperSlide>
                <img className='aspect-[120/120] object-contain max-w-[120px] m-auto' src='images/about/swiper/brand5.webp' alt='shell' />
            </SwiperSlide>
            <SwiperSlide>
                <img className='aspect-[120/120] object-contain max-w-[120px] m-auto p-8 ' src='images/about/swiper/brand6.webp' alt='superq' />
            </SwiperSlide>
            <SwiperSlide>
                <img className='aspect-[120/120] object-contain max-w-[120px] m-auto' src='images/about/swiper/brand7.webp' alt='aki' />
            </SwiperSlide>
            <SwiperSlide>
                <img className='aspect-[120/120] object-contain max-w-[120px] m-auto' src='images/about/swiper/brand8.webp' alt='woolworth' />
            </SwiperSlide>
            <SwiperSlide>
                <img className='aspect-[120/120] object-contain max-w-[120px] m-auto' src='images/about/swiper/brand9.webp' alt='kiosko' />
            </SwiperSlide>
            <SwiperSlide>
                <img className='aspect-[120/120] object-contain max-w-[120px] m-auto' src='images/about/swiper/brand10.webp' alt='gomart' />
            </SwiperSlide>
            <SwiperSlide>
                <img className='aspect-[120/120] object-contain max-w-[120px] m-auto p-8' src='images/about/swiper/brand11.webp' alt='amazon' />
            </SwiperSlide>
            <SwiperSlide>
                <img className='aspect-[120/120] object-contain max-w-[120px] m-auto' src='images/about/swiper/brand12.webp' alt='7eleven' />
            </SwiperSlide>
        </Swiper>
    );
}