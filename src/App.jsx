import { useState } from 'react'
import Navbar from './components/Header/Header'
import Contect from './components/Home/Home'
function App() {

  return (
    <div className='h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500 overflow-hidden'>
      <div className='bg-white/30 h-full overflow-auto pt-0 md:pt-0'>
      <Navbar />
      <Contect />
      </div>
    </div>
  )
}

export default App
