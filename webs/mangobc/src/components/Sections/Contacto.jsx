import React, { useState } from 'react'

export function Contacto () {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    // Handle submission logic here
  }

  return (
    <section id='contacto' className='container mx-auto p-10 w-[80%] back-img'>
      {/* <figure className='absolute w-[8%] right-28 animate-wiggle animate-infinite animate-duration-[5000ms]'>
        <img src='images/3d/galleta.webp' alt='galleta_3d' />
      </figure>
      <figure className='absolute w-[8%] left-28 animate-bounce animate-infinite animate-duration-[5000ms]'>
        <img src='images/3d/galleta.webp' alt='galleta_3d' />
      </figure>
      <figure className='absolute w-[8%] right-1/2 animate-bounce animate-infinite animate-duration-[5000ms]'>
        <img src='images/3d/galleta.webp' alt='galleta_3d' />
      </figure> */}
      <h1 className='text-3xl font-bold mb-10 text-left break-words w-1/2'>
        Quieres más información, nos ponemos
        en contacto contigo.
      </h1>
      <form className='grid grid-cols-12 gap-4' onSubmit={handleSubmit}>
        <div className='mb-4 col-span-6'>
          <label
            htmlFor='name'
            className='block font-bold mb-2'
          >
            Nombre:
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            className='shadow-[#FACB22] appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-[#FACB22] focus:shadow-outline'
          />
        </div>
        <div className='mb-4 col-span-6'>
          <label
            htmlFor='email'
            className='block font-bold mb-2'
          >
            Email:
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-[#FACB22] focus:shadow-outline'
          />
        </div>
        <div className='mb-4 col-span-6'>
          <label
            htmlFor='phone'
            className='block font-bold mb-2'
          >
            Teléfono:
          </label>
          <input
            type='text'
            id='phone'
            name='phone'
            value={formData.name}
            onChange={handleChange}
            className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-[#FACB22] focus:shadow-outline'
          />
        </div>
        <div className='relative inline-block w-full col-span-6 mb-6'>
          <label
            htmlFor='service'
            className='block font-bold mb-2'
          >
            Servicio:
          </label>
          <select
            type='text'
            id='service'
            name='service'
            value={formData.service}
            onChange={handleChange}
            className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-[#FACB22] focus:shadow-outline'
          >
            <option>Maquila</option>
            <option>Marcas Blancas</option>
            <option>Distribución de productos</option>
            <option>Línea institucional</option>
          </select>
          <div className='absolute bottom-0 top-8 right-0 flex items-center px-2 pointer-events-none'>
            <svg className='w-4 h-4 fill-current' viewBox='0 0 20 20'>
              <path d='M14.95 5.95a1 1 0 1 0-1.41-1.41l-3.54 3.54a1 1 0 0 0-.29.71v.59l-4-4V4a1 1 0 0 0-2 0v4c0 .28.11.53.29.71l4 4c.18.18.43.29.71.29h.59a1 1 0 0 0 .71-.29l3.54-3.54z' />
            </svg>
          </div>
        </div>

        <div className='mb-6 col-span-12'>
          <label
            htmlFor='message'
            className='block font-bold mb-2'
          >
            Mensaje:
          </label>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-[#FACB22]  focus:shadow-outline'
          />
        </div>

      </form>
      <div className='flex justify-center'>
        <button type='submit' className='btn_pulse text-center w-1/5 uppercase'>
          enviar
        </button>
      </div>
    </section>
  )
}
