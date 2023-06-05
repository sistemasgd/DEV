import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper'
// Import Swiper styles
import 'swiper/css'
import './Sections.css'

export function Marcas () {
  const marcas = [
    {
      id: 0,
      title: 'delibarras',
      img: 'images/marcas/logo_deli.webp',
      img2: 'images/marcas/menu_deli.webp',
      descripcion: 'logo_deli'
    },
    {
      id: 1,
      title: 'sabor mío',
      img: 'images/marcas/logo_sabormio.webp',
      img2: 'images/marcas/menu_sabormio.webp',
      descripcion: 'logo_sabormio'
    },
    {
      id: 2,
      title: 'nanná postrero',
      img: 'images/marcas/logo_nanna.webp',
      img2: 'images/marcas/menu_nanna.webp',
      descripcion: 'logo_nanna'
    },
    {
      id: 3,
      title: 'began',
      img: 'images/marcas/logo_began.webp',
      img2: 'images/marcas/menu_began.webp',
      descripcion: 'logo_began'
    }
  ]

  const ImageToggleOnMouseOver = ({ primaryImg, secondaryImg, alt }) => {
    const imageRef = useRef(null)
    return (
      <figure
        onMouseOver={() => {
          imageRef.current.src = secondaryImg
        }}
        onMouseOut={() => {
          imageRef.current.src = primaryImg
        }}
        className='flex flex-col m-auto justify-center bg-white w-48 h-48 rounded-full items-center hover:bg-[#FACB22] transition-all duration-200 ease-out hover:ease-in'
      >
        <img
          src={primaryImg}
          className='max-w-[120px]'
          alt={alt}
          ref={imageRef}
        />
      </figure>
    )
  }

  return (
    <section id='marcas' className='container mx-auto p-10 w-[80%]'>

      <div className='grid grid-cols-12 my-10'>
        <div className='flex flex-col gap-10 px-8 justify-center col-span-12  md:col-span-7 lg:col-span-7 xl:col-span-7 2xl:col-span-7'>
          <h2 className='text-3xl font-bold'>
            Haz negocio con
            nosotros y
            distribuye productos
            Mango.
          </h2>
          <p className='text-lg'>
            Estás buscando iniciar un negocio o
            incrementar los productos en tu red
            de distribución. Tenemos una variedad de productos para la venta al detalle.
          </p>
          <div className='flex justify-center'>
            <a className='btn_pulse text-center uppercase' href='download/mango_cliente.pdf' target='_blank'>
              ver catálogo
            </a>
          </div>
        </div>
        <div className='col-span-12  md:col-span-5 lg:col-span-5 xl:col-span-5 2xl:col-span-5'>
          <div>
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
              className='mySwiper'
            >
              <SwiperSlide>
                <img className='w-[20%] m-auto' src='images/productos/delibarra.webp' alt='delibarra' />
              </SwiperSlide>
              <SwiperSlide>
                <img className='w-[35%] m-auto' src='images/productos/sabormio.webp' alt='empanizador' />
              </SwiperSlide>
              <SwiperSlide>
                <img className='w-[43%] m-auto' src='images/productos/besonuez.webp' alt='besodenuez' />
              </SwiperSlide>
            </Swiper>
          </div>
          <img className='w-[65%] m-auto' src='images/marcas/base_marcas.webp' alt='base_prod' />
        </div>
      </div>

      <h1 className='text-4xl font-bold text-center uppercase my-24'>nuestras marcas</h1>
      <div className='marcas-grid justify-center gap-10 items-center'>
        {
          marcas.map((marca) => (
            <div className='' key={marca.id}>
              <ImageToggleOnMouseOver
                primaryImg={marca.img}
                secondaryImg={marca.img2}
                alt={marca.descripcion}
              />
              <p className='text-lg font-bold text-center uppercase mt-4'>{marca.title}</p>
            </div>
          ))
        }
      </div>

      <div className='grid grid-cols-12 mt-36'>
        <div className='flex flex-col flex-wrap gap-3 justify-center items-center col-span-12  md:col-span-5 lg:col-span-5 xl:col-span-5 2xl:col-span-5'>
          <img className='w-[22%] rotate-[-10deg]' src='images/productos/delibarra.webp' alt='delibarra' />
          <img className='w-[65%]' src='images/marcas/base_marcas.webp' alt='base_prod' />
        </div>
        <div className='flex flex-col gap-8 px-8 justify-center col-span-12  md:col-span-7 lg:col-span-7 xl:col-span-7 2xl:col-span-7'>
          <h2 className='text-3xl font-bold'>
            Deli Barras
          </h2>
          <p className='text-lg'>
            Barra de harina integral con granola y rellena
            de fruta.
          </p>
          <ul>
            <li className='mb-6'><span className='bg-[#545DF5] font-bold rounded-xl p-1'>-Zonas con exclusividad disponibles.</span></li>
            <li className='mb-6'><span className='bg-[#545DF5] font-bold rounded-xl p-1'>-Inversión inicial a partir de $5,500.</span></li>
            <li className='mb-6'><span className='bg-[#545DF5] font-bold rounded-xl p-1'>-3 productos con 10 sabores disponibles.</span></li>
          </ul>
          <div className='flex justify-start'>
            <a className='btn_pulse text-center uppercase' href='#'>
              conoce más
            </a>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-12 mt-36 text-right'>
        <div className='flex flex-col gap-8 px-8 justify-center col-span-12  md:col-span-6 lg:col-span-6 xl:col-span-6 2xl:col-span-6'>
          <h2 className='text-3xl font-bold'>
            Nanná Postrero
          </h2>
          <p className='text-lg'>
            Galletería y Postres.
          </p>
          <ul>
            <li className='mb-6'><span className='bg-[#FF71AF] font-bold rounded-xl p-1'>-Zonas con exclusividad disponibles.</span></li>
            <li className='mb-6'><span className='bg-[#FF71AF] font-bold rounded-xl p-1'>-Inversión inicial a partir de $800.</span></li>
            <li className='mb-6'><span className='bg-[#FF71AF] font-bold rounded-xl p-1'>-Más de 4 productos listos para distribuir.</span></li>
          </ul>
          <div className='flex justify-end'>
            <a className='btn_pulse text-center uppercase' href='#'>
              conoce más
            </a>
          </div>
        </div>
        <div className='flex flex-col flex-wrap gap-3 justify-center items-center col-span-12  md:col-span-5 lg:col-span-5 xl:col-span-5 2xl:col-span-5'>
          <img className='w-[35%] rotate-[10deg]' src='images/productos/besonuez.webp' alt='besonuez' />
          <img className='w-[65%]' src='images/marcas/base_marcas.webp' alt='base_prod' />
        </div>
      </div>

      <div className='grid grid-cols-12 mt-36'>
        <div className='flex flex-col flex-wrap gap-3 justify-center items-center col-span-12  md:col-span-5 lg:col-span-5 xl:col-span-5 2xl:col-span-5'>
          <img className='w-[35%] rotate-[-10deg]' src='images/productos/sabormio.webp' alt='empanizador' />
          <img className='w-[65%]' src='images/marcas/base_marcas.webp' alt='base_prod' />
        </div>
        <div className='flex flex-col gap-8 px-8 justify-center col-span-12  md:col-span-7 lg:col-span-7 xl:col-span-7 2xl:col-span-7'>
          <h2 className='text-3xl font-bold'>
            Sabor Mío
          </h2>
          <p className='text-lg'>
            Empanizadores y condimentos.
          </p>
          <ul>
            <li className='mb-6'><span className='bg-[#8953F6] font-bold rounded-xl p-1'>-Zonas con exclusividad disponibles.</span></li>
            <li className='mb-6'><span className='bg-[#8953F6] font-bold rounded-xl p-1'>-Inversión inicial a partir de $3,762.</span></li>
            <li className='mb-6'><span className='bg-[#8953F6] font-bold rounded-xl p-1'>-Más de 10 sabores de empanizador.</span></li>
          </ul>
          <div className='flex justify-start'>
            <a className='btn_pulse text-center uppercase' href='#'>
              conoce más
            </a>
          </div>
        </div>
      </div>

    </section>
  )
}
