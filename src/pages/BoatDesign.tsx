import React from 'react';

const BoatDesign: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-white mb-8">Boat Design Process</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold text-orange-500 mb-4">Concept Development</h2>
          <p className="text-gray-300 mb-4">
            Our design process begins with understanding your specific needs and requirements. We work closely with you to develop a concept that aligns with your operational goals and budget.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-orange-500 mb-4">Engineering and Analysis</h2>
          <p className="text-gray-300 mb-4">
            Our team of experienced naval architects and marine engineers use advanced software to create detailed designs and perform thorough analyses to ensure optimal performance and safety.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-orange-500 mb-4">3D Modeling and Visualization</h2>
          <p className="text-gray-300 mb-4">
            We create detailed 3D models of your vessel, allowing you to visualize the final product and make informed decisions throughout the design process.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-orange-500 mb-4">Regulatory Compliance</h2>
          <p className="text-gray-300 mb-4">
            Our designs adhere to all relevant maritime regulations and classification society rules, ensuring that your vessel meets the highest standards of safety and compliance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BoatDesign;