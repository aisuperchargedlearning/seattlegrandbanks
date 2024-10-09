import React from 'react';
import { Anchor } from 'lucide-react';

interface NavbarProps {
  setCurrentPage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setCurrentPage }) => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-900 z-10 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Anchor className="text-orange-500 mr-2" size={24} />
            <h1 className="text-2xl font-bold text-white tracking-wider">WorkBoat<span className="text-orange-500">Showcase</span></h1>
          </div>
          <ul className="flex space-x-6">
            <li><a onClick={() => setCurrentPage('home')} className="nav-link text-lg font-semibold text-white hover:text-orange-300 transition-colors duration-300 cursor-pointer">Home</a></li>
            <li><a onClick={() => setCurrentPage('about')} className="nav-link text-lg font-semibold text-white hover:text-orange-300 transition-colors duration-300 cursor-pointer">About Us</a></li>
            <li><a onClick={() => setCurrentPage('boat-design')} className="nav-link text-lg font-semibold text-white hover:text-orange-300 transition-colors duration-300 cursor-pointer">Boat Design</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;