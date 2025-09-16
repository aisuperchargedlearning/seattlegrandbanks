import React, { useState, useEffect } from 'react'

const Hero = () => {
  const [showOverlay, setShowOverlay] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative h-screen">
      <video
        src="https://ik.imagekit.io/a7tech/Exterior/GB3.mp4?updatedAt=1758043045056"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      >
        Your browser does not support the video tag.
      </video>
      {showOverlay && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-start items-center text-center pt-24 transition-opacity duration-500">
          <h1 className="text-5xl font-bold mb-4">1991 Grand Banks 36 Europa</h1>
          <p className="text-2xl">A Classic Trawler Yacht</p>
        </div>
      )}
    </div>
  )
}

export default Hero