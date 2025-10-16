import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Career from './pages/Career'
import Blog from './pages/Blog'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Portfolio from './pages/Portfolio'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/career" element={<Career />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
