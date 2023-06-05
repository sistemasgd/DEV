import { Link } from 'react-router-dom'
export function Navbar () {
  const menu = [
    // {
    //   id: 0,
    //   title: 'Inicio',
    //   url: '/'
    // },
    {
      id: 1,
      title: 'distribución',
      url: '/construction'
    },
    {
      id: 2,
      title: 'línea institucional',
      url: '/construction'
    },
    {
      id: 3,
      title: 'línea industrial',
      url: '/construction'
    },
    {
      id: 4,
      title: 'nosotros',
      url: '/construction'
    },
    {
      id: 5,
      title: 'blog',
      url: '/construction'
    },
    {
      id: 6,
      title: 'contacto',
      url: '/construction'
    }
  ]

  return (
    <>
      <header>
        <div className='fixed bg-black text-white z-[1000] w-[150px] rounded-b-[10px] p-4 left-28'>
          <Link to='/' className='uppercase font-bold text-center'>
            <img className='' src='images/logo_mango.webp' alt='logo' />
          </Link>

        </div>
        <nav className='fixed flex justify-center z-[999] w-full bg-[#FACB22] text-xs h-12'>
          <ul className='flex items-center justify-center gap-8'>
            {
              menu.map((item) => (
                <li
                  key={item.id}
                  className='flex justify-center items-center bg-[#FACB22] rounded-[100px] p-4 h-[30px] hover:bg-black hover:text-white'
                >
                  <Link to={item.url} className='uppercase font-bold text-center'> {item.title}</Link>
                </li>
              ))
            }
          </ul>
        </nav>
      </header>
    </>

  )
}
