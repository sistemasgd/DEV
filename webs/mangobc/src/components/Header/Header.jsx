import { Navbar } from '../Navbar/Navbar'

export function Header () {
  return (
    <>
      <header>
        <div className='fixed bg-black text-white z-[1000] w-[150px] rounded-b-[10px] p-4 left-28'>
          <img className='' src='images/logo_mango.webp' alt='logo' />
        </div>
        <Navbar />
      </header>

      <div className='flex flex-wrap h-[87vh] w-full bg-[#FACB22] overflow-hidden'>
        <section
          id='boxes' className='flex items-center'
        >
          <div>
            <img src='images/caja_izq.webp' alt='caja_izq' />
          </div>
          <div>
            <img className='relative w-[70%] mx-auto bottom-[-4rem]' src='images/logo_mango.webp' alt='logo' />
            <img className='relative bottom-[-6rem]' src='images/base.webp' alt='base' />
          </div>
          <div>
            <img src='images/caja_der.webp' alt='caja_der' />
          </div>
        </section>
      </div>
    </>
  )
}
