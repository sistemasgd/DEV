import './Home.css'
export function Home () {
  const productos = [
    {
      id: 0,
      title: 'besos de nuez',
      img: 'src/assets/images/beso_nuez.png',
      descripcion: 'descripcion'
    },
    {
      id: 1,
      title: 'besos de chocolate',
      img: 'src/assets/images/beso_nuez.png',
      descripcion: 'descripcion'
    },
    {
      id: 2,
      title: 'pay',
      img: 'src/assets/images/pay.png',
      descripcion: 'descripcion'
    }
  ]
  const list = [
    {
      id: 0,
      img: 'src/assets/images/beso_nuez.png',
      descripcion: '¿Quieres distribuir en alguna parte de la República?'
    },
    {
      id: 1,
      img: 'src/assets/images/beso_nuez.png',
      descripcion: '¿Quieres vender nuestrosproductos en tu punto de venta?'
    },
    {
      id: 2,
      img: 'src/assets/images/pay.png',
      descripcion: '¿Quieres nuestros productos para un evento o para consumo personal?'
    }
  ]
  const list2 = [
    {
      id: 0,
      img: 'src/assets/images/prueba.png',
      descripcion: 'envío gratis'
    },
    {
      id: 1,
      img: 'src/assets/images/prueba.png',
      descripcion: 'tu producto esta asegurado'
    },
    {
      id: 2,
      img: 'src/assets/images/prueba.png',
      descripcion: 'aceptamos tarjetas de crédito y débito'
    },
    {
      id: 3,
      img: 'src/assets/images/prueba.png',
      descripcion: 'cobertura en todo méxico'
    }
  ]
  return (
    <main>
      <section className='flex flex-col gap-8'>
        <h1 className='text-7xl text-center uppercase'>productos del mes</h1>
        <div className='grid grid-productos gap-8'>
          {
                productos.map((item) => (
                  <div key={item.id} className='flex flex-col justify-center items-center gap-2'>
                    <div className='flex flex-col justify-center w-64 h-64 bg-[#e2a40a] rounded-full items-center hover:bg-[#360251] hover:cursor-pointer transition-all duration-200 ease-out hover:ease-in'>
                      <img className='max-w-[100px]' src={item.img} alt={item.title} />
                    </div>
                    <h2 className='text-4xl uppercase'>{item.title}</h2>
                    <p className='text-xl uppercase'>{item.descripcion}</p>
                  </div>

                ))
            }
        </div>
      </section>
      <section className='flex flex-col bg-[#001468] text-white'>
        <div className='grid grid-blog p-10'>
          <div className='flex flex-col items-center p-4'>
            <img className='max-w-[150px]' src='src/assets/images/beso_nuez.png' alt='' />
          </div>
          <div className='flex flex-col justify-center gap-10 p-4'>
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
      <section>
        <div className='flex flex-col gap-8'>
          <h1 className='text-7xl text-center uppercase'>emprende con nanná postrero</h1>
          <div className='grid grid-list gap-8'>
            {
                list.map((item) => (
                  <div key={item.id} className='flex flex-col justify-center items-center gap-2'>
                    <div className='bg-[#360251] w-64 h-64 rounded-md' />
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
      <section className='flex flex-col bg-[#001468] text-white'>
        <h1 className='text-7xl text-center uppercase'>¿quieres disttribuir nanná postrero?</h1>
        <form action='#' method='post'>
          <div className='grid grid-cols-2 gap-6 p-4'>
            <div className='col-span-12 lg:col-span-6 sm:col-span-6 xl:col-span-3'>
              <label htmlFor='first-name' className='block text-sm font-medium leading-6 /text-gray-900'>First name</label>
              <input type='text' name='first-name' id='first-name' className='mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
            </div>
            <div className='col-span-12 lg:col-span-6 sm:col-span-6  xl:col-span-3'>
              <label htmlFor='first-name' className='block text-sm font-medium leading-6 /text-gray-900'>First name</label>
              <input type='text' name='first-name' id='first-name' className='mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
            </div>
            <div className='col-span-12 lg:col-span-6 sm:col-span-6  xl:col-span-3'>
              <label htmlFor='first-name' className='block text-sm font-medium leading-6 /text-gray-900'>First name</label>
              <input type='text' name='first-name' id='first-name' className='mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
            </div>
          </div>
        </form>
        {/* <form action='#' method='POST'>
          <div class='overflow-hidden shadow sm:rounded-md'>
            <div class=' p-5 sm:p-6'>
              <div class='grid grid-cols-6 gap-6'>
                <div class='col-span-6 sm:col-span-3'>
                  <label for='first-name' class='block text-sm font-medium leading-6 /text-gray-900'>First name</label>
                  <input type='text' name='first-name' id='first-name' autocomplete='given-name' class='mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                </div>

                <div class='col-span-6 sm:col-span-3'>
                  <label for='last-name' class='block text-sm font-medium leading-6 /text-gray-900'>Last name</label>
                  <input type='text' name='last-name' id='last-name' autocomplete='family-name' class='mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                </div>

                <div class='col-span-6 sm:col-span-4'>
                  <label for='email-address' class='block text-sm font-medium leading-6 /text-gray-900'>Email address</label>
                  <input type='text' name='email-address' id='email-address' autocomplete='email' class='mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                </div>

                <div class='col-span-6 sm:col-span-3'>
                  <label for='country' class='block text-sm font-medium leading-6 text-gray-900'>Country</label>
                  <select id='country' name='country' autocomplete='country-name' class='mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>

                <div class='col-span-6'>
                  <label for='street-address' class='block text-sm font-medium leading-6 text-gray-900'>Street address</label>
                  <input type='text' name='street-address' id='street-address' autocomplete='street-address' class='mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                </div>

                <div class='col-span-6 sm:col-span-6 lg:col-span-2'>
                  <label for='city' class='block text-sm font-medium leading-6 text-gray-900'>City</label>
                  <input type='text' name='city' id='city' autocomplete='address-level2' class='mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                </div>

                <div class='col-span-6 sm:col-span-3 lg:col-span-2'>
                  <label for='region' class='block text-sm font-medium leading-6 /text-gray-900'>State / Province</label>
                  <input type='text' name='region' id='region' autocomplete='address-level1' class='mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                </div>

                <div class='col-span-6 sm:col-span-3 lg:col-span-2'>
                  <label for='postal-code' class='block text-sm font-medium leading-6 /text-gray-900'>ZIP / Postal code</label>
                  <input type='text' name='postal-code' id='postal-code' autocomplete='postal-code' class='mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                </div>
              </div>
            </div>
            <div class='px-4 py-3 text-right sm:px-6'>
              <button type='submit' class='inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'>Save</button>
            </div>
          </div>
        </form> */}
      </section>
    </main>
  )
}
