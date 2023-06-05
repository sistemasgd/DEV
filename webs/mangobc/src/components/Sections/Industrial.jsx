import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import './Sections.css'

export function Industrial () {
  return (
    <section id='industrial' className='container mx-auto p-10 w-[80%]'>
      <div className='grid grid-cols-12 my-10'>
        <div className='col-span-12 lg:col-span-6 xl:col-span-6 2xl:col-span-6 my-auto'>
          <Swiper
            spaceBetween={10}
            centeredSlides
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
            pagination={{
              clickable: true
            }}
            navigation
            modules={[Autoplay, Pagination, Navigation]}
            className=''
          >
            <SwiperSlide>
              <img className='m-auto' src='images/industrial/slider1.webp' alt='slider1' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='m-auto' src='images/industrial/slider2.webp' alt='slider2' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='m-auto' src='images/industrial/slider3.webp' alt='slider3' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='m-auto' src='images/industrial/slider4.webp' alt='slider4' />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className='flex flex-col justify-center gap-8 pl-16 col-span-12 lg:col-span-6 xl:col-span-6 2xl:col-span-6'>
          <h1 className='text-3xl font-bold'>
            Transformamos la fórmula
            en producto. Hacemos que
            tu idea cobre vida.
          </h1>
          <p className='text-lg text-justify'>
            Ofrecemos soluciones personalizadas y eficientes para satisfacer las necesidades de nuestros
            clientes, ya sea por módulo o el desarrollo del
            producto de tu elección, vamos de la mano contigo desde la idea hasta que esté listo para la comercialización.
          </p>
          <div className='flex justify-center'>
            <a className='btn_pulse text-center uppercase' href='download/mango_labs.pdf' target='_blank'>
              ver catálogo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
