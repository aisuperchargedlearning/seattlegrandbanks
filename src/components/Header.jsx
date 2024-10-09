import React from 'react'
import { Anchor } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Anchor className="w-8 h-8 mr-2" />
          <span className="text-xl font-semibold">Seattle Grand Banks</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#description" className="hover:text-gray-300">Description</a></li>
            <li><a href="#specs" className="hover:text-gray-300">Specs</a></li>
            <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header