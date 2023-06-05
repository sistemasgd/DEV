import './App.css'
import { Routes, Route } from 'react-router-dom'

import { Home } from './components/Home/Home'
import { Construction } from './components/Construction/Construction'

function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='construction' element={<Construction />} />
      </Routes>
    </>
  )
}

export default App
