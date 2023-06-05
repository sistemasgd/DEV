import { Header } from '../Header/Header'
import { Marcas } from '../Sections/Marcas'
import { Industrial } from '../Sections/Industrial'
import { Institucional } from '../Sections/Institucional'
import { Contacto } from '../Sections/Contacto'
import './Home.css'
export function Home () {
  return (
    <>
      <Header />
      <main>
        <Marcas />
        <div className='parallax'>
          <div className='flex flex-col relative top-36 gap-4'>
            <span className='flex justify-center font-bold text-7xl text-[#FACB22] text-center uppercase texto_borde'>Línea industrial</span>
            <span className='flex justify-center'>
              <img className='w-12 h-12' src='images/icon.png' />
            </span>
          </div>
        </div>
        <Industrial />
        <div className='parallax2'>
          <div className='flex flex-col relative top-36 gap-4'>
            <span className='flex justify-center font-bold text-7xl text-[#FACB22] text-center uppercase texto_borde'>Línea institucional</span>
            <span className='flex justify-center'>
              <img className='w-12 h-12' src='images/icon.png' />
            </span>
          </div>
        </div>
        <Institucional />
        <Contacto />
      </main>
    </>

  )
}
