export function Navbar () {
  const menu = [
    {
      id: 0,
      title: 'nosotros',
      url: 'url'
    },
    {
      id: 1,
      title: 'productos',
      url: 'url'
    },
    {
      id: 2,
      title: 'distribución',
      url: 'url'
    },
    {
      id: 3,
      title: 'nosotros',
      url: 'url'
    },
    {
      id: 4,
      title: 'blog',
      url: 'url'
    },
    {
      id: 5,
      title: 'contacto',
      content: 'This is content 3'
    }
  ]

  return (
    <nav className='fixed w-full top-0 z-50 bg-white border-b-2 border-[#001468]'>
      <ul className='flex flex-wrap justify-evenly uppercase text-4xl list-none'>
        {
        menu.map((item) => (
          <li
            key={item.id}
            className='flex-auto text-center p-2 hover:bg-[#e2a40a] hover:cursor-pointer hover:text-white transition-all duration-200 ease-out hover:ease-in'
          >
            {item.title}
          </li>
        ))
        }
      </ul>
    </nav>
  )
}
