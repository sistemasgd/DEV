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
        <Industrial />
        <Institucional />
        <Contacto />
      </main>
    </>

  )
}
