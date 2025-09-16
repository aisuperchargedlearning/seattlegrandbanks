import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-xl font-semibold">Seattlegrandbanks.com</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><a href="#description" className="hover:text-gray-300">Description</a></li>
            <li><a href="#specs" className="hover:text-gray-300">Specs</a></li>
            <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-gray-300 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 right-0 bg-gray-800 md:hidden z-50 rounded-lg shadow-lg min-w-48">
            <nav className="container mx-auto px-4 py-4">
              <ul className="space-y-4">
                <li>
                  <a 
                    href="#description" 
                    className="block hover:text-gray-300 py-2"
                    onClick={closeMenu}
                  >
                    Description
                  </a>
                </li>
                <li>
                  <a 
                    href="#specs" 
                    className="block hover:text-gray-300 py-2"
                    onClick={closeMenu}
                  >
                    Specs
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className="block hover:text-gray-300 py-2"
                    onClick={closeMenu}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header