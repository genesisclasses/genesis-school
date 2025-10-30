import { useState } from 'react'
import './App.css'
import Navbar from './global/Navbar'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Navbar/>
<Footer />
    </>
  )
}

export default App
