import React from 'react'
import { Anchor, Menu } from 'lucide-react'
import Header from './components/Header'
import Hero from './components/Hero'
import PhotoCards from './components/PhotoCards'
import Description from './components/Description'
import Specs from './components/Specs'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header />
      <Hero />
      <main className="container mx-auto px-4">
        <PhotoCards />
        <Description />
        <Specs />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App