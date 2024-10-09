import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4 tracking-wider">
          Everett Ship Repair
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Providing top-tier maintenance and repair services for workboats and commercial vessels
        </p>
      </div>
    </div>
  );
};

export default Hero;