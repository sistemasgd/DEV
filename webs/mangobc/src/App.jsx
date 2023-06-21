import './App.css'
import { Routes, Route } from 'react-router-dom'

import { Home } from './components/Home/Home'
import { Construction } from './components/Construction/Construction'
import { Jobs } from './components/Jobs/Jobs'

function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='construction' element={<Construction />} />
        <Route path='jobs' element={<Jobs />} />
      </Routes>
    </>
  )
}

export default App
