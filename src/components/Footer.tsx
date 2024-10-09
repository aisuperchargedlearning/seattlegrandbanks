import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 text-center text-sm">
      <p>&copy; 2024 Workboats Showcase. All rights reserved.</p>
      <div className="mt-2">
        <a href="#" className="text-gray-300 hover:text-white mx-2">Privacy Policy</a>
        <a href="#" className="text-gray-300 hover:text-white mx-2">Terms of Service</a>
        <a href="#" className="text-gray-300 hover:text-white mx-2">Contact Us</a>
      </div>
    </footer>
  );
};

export default Footer;