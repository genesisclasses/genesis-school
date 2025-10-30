import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/global/Navbar'
import Footer from './components/global/Footer'
import Darpan from './pages/Darpan'
import Academics from './pages/Academics'
import Campus from './pages/Campus'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
     <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/campus" element={<Campus />} />
        <Route path="/darpan" element={<Darpan />} />

      </Routes>
      
      <Footer/>
    </Router>
    </>
  )
}

export default App
