import React from 'react'

const Hero = () => {
  return (
    <div className="relative h-screen">
      <img
        src="https://ik.imagekit.io/a7tech/0432BE1B-D0C4-47E6-B89D-867BBB02A6FB.jpeg?updatedAt=1728512656212"
        alt="1991 Grand Banks 36 Europa"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-start items-center text-center pt-24">
        <h1 className="text-5xl font-bold mb-4">1991 Grand Banks 36 Europa</h1>
        <p className="text-2xl">A Classic Trawler Yacht</p>
      </div>
    </div>
  )
}

export default Hero