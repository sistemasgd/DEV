export function Navbar () {
  const menu = [
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
    <nav className='fixed flex justify-center z-[999] w-full bg-[#FACB22] text-xs h-12'>
      <ul className='flex items-center justify-center gap-8'>
        {
            menu.map((item) => (
              <li
                key={item.id}
                className='flex justify-center items-center bg-[#FACB22] rounded-[100px] p-4 h-[30px] hover:bg-black hover:text-white'
              >
                <a href='#' className='uppercase font-bold text-center'>
                  {item.title}
                </a>
              </li>
            ))
        }
      </ul>
    </nav>
  )
}
