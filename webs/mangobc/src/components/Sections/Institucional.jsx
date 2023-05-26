export function Institucional () {
  return (
    <section id='institucional' className='container mx-auto p-10 w-[80%]'>
      <div className='flex flex-col gap-20'>
        <h1 className='text-4xl font-bold text-center'>
          Conoce nuestra Línea Institucional
        </h1>
        <p className='text-lg text-justify'>
          Nuestra línea institucional cuenta con sistemas de cobertura para mejor eficiencia en el sector food
          service mejorando los rendimientos y haciendo más rentable tu negocio.
        </p>
        <div className='grid grid-cols-12'>
          <div className='flex flex-col flex-wrap gap-3 justify-center items-center col-span-12  md:col-span-4 lg:col-span-4 xl:col-span-4 2xl:col-span-4'>
            <img className='w-[45%] hover:scale-110 transition-all duration-200 ease-out hover:ease-in' src='images/productos/sabormio_inst.webp' alt='empanizador' />
            <img className='w-[75%]' src='images/marcas/base_marcas.webp' alt='base_prod' />
          </div>
          <div className='flex flex-col flex-wrap gap-3 justify-center items-center col-span-12  md:col-span-4 lg:col-span-4 xl:col-span-4 2xl:col-span-4'>
            <img className='w-[45%] hover:scale-110 transition-all duration-200 ease-out hover:ease-in' src='images/productos/sabormio_inst.webp' alt='empanizador' />
            <img className='w-[75%]' src='images/marcas/base_marcas.webp' alt='base_prod' />
          </div>
          <div className='flex flex-col flex-wrap gap-3 justify-center items-center col-span-12  md:col-span-4 lg:col-span-4 xl:col-span-4 2xl:col-span-4'>
            <img className='w-[45%] hover:scale-110 transition-all duration-200 ease-out hover:ease-in' src='images/productos/sabormio_inst.webp' alt='empanizador' />
            <img className='w-[75%]' src='images/marcas/base_marcas.webp' alt='base_prod' />
          </div>
        </div>
        <h2 className='text-3xl font-bold'>
          Sabor Mío Institucional
        </h2>
        <p className='text-lg text-justify'>
          Tenemos la mejor calidad de insumos e ingredientes para tu negocio. Pregunra por los precios especiales que tenemos para el sector food service, déjanos tus datos si necesitas más información
          o estás interesados en trabajar con nosotros.
        </p>
        <div className='flex justify-center'>
          <a className='btn_pulse text-center uppercase' href='#'>
            ver catálogo
          </a>
        </div>
      </div>
    </section>
  )
}
