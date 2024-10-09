import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import BoatDesign from './pages/BoatDesign'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />
      case 'about':
        return <AboutUs />
      case 'boat-design':
        return <BoatDesign />
      default:
        return <Home />
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-image"></div>
      <div className="bg-overlay"></div>
      <Navbar setCurrentPage={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  )
}

export default App