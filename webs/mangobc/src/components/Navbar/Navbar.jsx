export function Navbar () {
  const menu = [
    {
      id: 0,
      title: 'home',
      url: 'url'
    },
    {
      id: 1,
      title: 'distribución',
      url: 'url'
    },
    {
      id: 2,
      title: 'línea institucional',
      url: 'url'
    },
    {
      id: 3,
      title: 'línea industrial',
      url: 'url'
    },
    {
      id: 4,
      title: 'nosotros',
      url: 'url'
    },
    {
      id: 5,
      title: 'blog',
      url: 'url'
    },
    {
      id: 6,
      title: 'contacto',
      content: 'This is content 3'
    }
  ]

  return (
    <nav className='container mx-auto flex flex-wrap p-5 flex-col items-center'>
      <ul className='flex flex-wrap items-center text-base justify-center'>
        {
            menu.map((item) => (
              <li
                key={item.id}
                className='bg-[#FACB22] border rounded-[10px] h-[30px] text-center hover:bg-black hover:text-white'
              >
                <a href='#' className='uppercase font-bold'>
                  {item.title}
                </a>
              </li>
            ))
        }
      </ul>
    </nav>
  )
}
