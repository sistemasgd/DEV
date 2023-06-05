import { Navbar } from '../Navbar/Navbar'

export function Construction () {
  return (
    <>
      <Navbar />
      <div className='flex h-[100vh] w-full bg-[#FACB22] overflow-hidden'>
        <section className='flex flex-col flex-wrap justify-center w-full items-center'>
          <img className='w-1/2' src='/images/proximamente.gif' alt='coming soon' />
        </section>
      </div>
    </>
  )
}
