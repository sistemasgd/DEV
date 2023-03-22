import { Navbar } from '../Navbar/Navbar'
import imgHorno from '../../assets/images/header_img.png'

export function Header () {
  return (
    <header>
      <Navbar />
      <figure>
        <img className='mt-12 w-full' src={imgHorno} alt='' />
      </figure>
      <div className='relative text-center sm:bottom-0 lg:bottom-44 flex flex-col m-auto max-w-xs items-center gap-4'>
        <h1 className='text-4xl'>delicias con sabor a hogar</h1>
        <p className='text-xl'>Nuestros productos están elaborados con especial atención a los detalles</p>
        <button className='bg-[#e2a40a] hover:bg-[#e2a40a] py-2 px-4 rounded uppercase w-2/4 text-lg'>
          más sobre nosotros
        </button>
      </div>
    </header>
  )
}
