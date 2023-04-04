import './Home.css'
import Beso from '../../assets/images/beso_nuez.png'
import Pay from '../../assets/images/pay.png'
import Circulo from '../../assets/images/prueba.png'
export function Home () {
  const productos = [
    {
      id: 0,
      title: 'besos de nuez',
      img: Beso,
      descripcion: 'descripcion'
    },
    {
      id: 1,
      title: 'besos de chocolate',
      img: Beso,
      descripcion: 'descripcion'
    },
    {
      id: 2,
      title: 'pay',
      img: Pay,
      descripcion: 'descripcion'
    }
  ]
  const list = [
    {
      id: 0,
      img: Beso,
      descripcion: '¿Quieres distribuir en alguna parte de la República?'
    },
    {
      id: 1,
      img: Beso,
      descripcion: '¿Quieres vender nuestrosproductos en tu punto de venta?'
    },
    {
      id: 2,
      img: Pay,
      descripcion: '¿Quieres nuestros productos para un evento o para consumo personal?'
    }
  ]
  const list2 = [
    {
      id: 0,
      img: Circulo,
      descripcion: 'envío gratis'
    },
    {
      id: 1,
      img: Circulo,
      descripcion: 'tu producto esta asegurado'
    },
    {
      id: 2,
      img: Circulo,
      descripcion: 'aceptamos tarjetas de crédito y débito'
    },
    {
      id: 3,
      img: Circulo,
      descripcion: 'cobertura en todo méxico'
    }
  ]
  return (
    <main>
      {/* section productos del mes */}
      <section className='flex flex-col gap-8 container m-auto px-10 my-10'>
        <h1 className='text-7xl text-center uppercase'>productos del mes</h1>
        <div className='grid grid-productos gap-8'>
          {
                productos.map((item) => (
                  <div key={item.id} className='flex flex-col justify-center items-center gap-2'>
                    <figure className='flex flex-col justify-center w-64 h-64 bg-[#e2a40a] rounded-full items-center hover:bg-[#360251] hover:cursor-pointer transition-all duration-200 ease-out hover:ease-in'>
                      <img className='max-w-[100px]' src={item.img} alt={item.title} />
                    </figure>
                    <h2 className='text-4xl uppercase'>{item.title}</h2>
                    <p className='text-xl uppercase'>{item.descripcion}</p>
                  </div>

                ))
            }
        </div>
      </section>

      {/* section carrito */}
      <section className='flex flex-col bg-[#001468] text-white my-10'>
        <div className='grid grid-blog container m-auto px-10'>
          <div className='flex flex-col items-center p-8'>
            <img className='max-w-[150px]' src={Beso} alt='' />
          </div>
          <div className='flex flex-col justify-center gap-10 p-8'>
            <h1 className='text-4xl uppercase'>nuestra más reciente creació<span className='alter'>n</span></h1>
            <p className='text-xl uppercase'>
              El mes de Marzo viene acompañado de un increíble nuevoproducto
            </p>
            <button className='bg-[#e2a40a] text-[#001468] hover:bg-[#e2a40a] m-auto py-2 px-4 rounded uppercase md:w-1/3 text-2xl w-1/2'>
              conócelo
            </button>
          </div>
        </div>
      </section>

      {/* section emprende */}
      <section className='container m-auto px-10 my-10'>
        <div className='flex flex-col gap-8'>
          <h1 className='text-7xl text-center uppercase'>emprende con nanná postrero</h1>
          <div className='grid grid-list gap-8'>
            {
                list.map((item) => (
                  <div key={item.id} className='flex flex-col justify-center items-center gap-2'>
                    <div className='bg-[#360251] w-24 h-24 rounded-md' />
                    <p className='text-xl text-center p-5'>{item.descripcion}</p>
                  </div>
                ))
            }
          </div>
          <div className='grid grid-list gap-8'>
            {
              list2.map((item) => (
                <div key={item.id} className='flex flex-col justify-center items-center gap-2'>
                  <img className='max-w-[150px]' src={item.img} alt='' />
                  <p className='text-lg uppercase text-center p-5'>{item.descripcion}</p>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      {/* section form */}
      <section className='flex flex-col bg-[#001468] text-white mt-10'>
        <div className='flex flex-col container m-auto md:p-10 p-4 gap-10'>
          <h1 className='text-7xl text-center uppercase'>¿quieres disttribuir nanná postrero?</h1>
          <form action='#' method='post'>
            <div className='grid grid-cols-2 gap-6'>
              <div className='col-span-1 lg:col-span-1 sm:col-span-1 xl:col-span-1'>
                <label htmlFor='name' className='block uppercase leading-6 /text-gray-900 text-3xl'><h1>nombre</h1></label>
                <input id='name' name='name' type='text' className='mt-2 block w-full rounded-md border-0 p-2 text-gray-900 placeholder:text-gray-400' />
              </div>
              <div className='col-span-1 lg:col-span-1 sm:col-span-1 xl:col-span-1'>
                <label htmlFor='mail' className='block uppercase leading-6 /text-gray-900 text-3xl'><h1>mail</h1></label>
                <input id='mail' name='mail' type='mail' className='mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 placeholder:text-gray-400' />
              </div>
              <div className='col-span-1 lg:col-span-1 sm:col-span-1 xl:col-span-1'>
                <label htmlFor='phone' className='block uppercase leading-6 /text-gray-900 text-3xl'><h1>número telefónico</h1></label>
                <input id='phone' name='phone' type='text' className='mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 placeholder:text-gray-400' />
              </div>
              <div className='col-span-2'>
                <label htmlFor='message' className='block uppercase leading-6 /text-gray-900 text-3xl'><h1>mensaje</h1></label>
                <textarea id='message' name='message' rows='4' className='mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 placeholder:text-gray-400' />
              </div>
            </div>
          </form>
        </div>
      </section>
      {/* <section className='parallax' /> */}
    </main>
  )
}
