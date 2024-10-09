import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-white mb-8">About Everett Ship Repair</h1>
      <p className="text-xl text-gray-300 mb-6">
        Everett Ship Repair is a leading provider of maintenance and repair services for workboats and commercial vessels. With decades of experience and a team of skilled professionals, we deliver top-quality solutions to keep your fleet in optimal condition.
      </p>
      <p className="text-xl text-gray-300 mb-6">
        Our state-of-the-art facilities and commitment to innovation allow us to handle a wide range of repair and maintenance tasks, from routine upkeep to complex overhauls. We pride ourselves on our attention to detail, quick turnaround times, and dedication to customer satisfaction.
      </p>
      <p className="text-xl text-gray-300">
        At Everett Ship Repair, we understand the critical role that your vessels play in your operations. That's why we're committed to providing services that not only meet but exceed industry standards, ensuring that your fleet remains safe, efficient, and reliable.
      </p>
    </div>
  );
};

export default AboutUs;