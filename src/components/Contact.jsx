import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
        <p className="text-lg mb-8">
          Welcome to SeattleGrandBanks.com, your premier destination for classic trawler yachts. We specialize in showcasing and connecting enthusiasts with exceptional vessels like the 1991 Grand Banks 36 Europa. We have been actively involved with Grand Banks Yachts for 20 years and have gained both technical knowledge and understanding of the vessels, including mechanical, electronics, autopilot systems, and diesel technology. We are dedicated to providing detailed information and assistance to help you find the perfect yacht for your maritime adventures. Feel free to email us if you have Grand Banks-related questions at info@seattlegrandbanks.com.
        </p>
        <div className="mb-8">
          <p className="text-lg font-semibold mb-2">For phone inquiries, please contact us at:</p>
          <img 
            src="https://dummyimage.com/200x50/000/fff&text=206-601-4815" 
            alt="Contact Phone Number" 
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  )
}

export default Contact