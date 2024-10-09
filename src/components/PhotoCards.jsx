import React from 'react'

const PhotoCard = ({ image, label }) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
    <img src={image} alt={label} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold">{label}</h3>
    </div>
  </div>
)

const PhotoCards = () => {
  const categories = [
    {
      title: 'Interior',
      images: [
        { src: 'https://ik.imagekit.io/a7tech/Interior/A9326237-EF48-4B73-8852-F8BE794C1547.jpeg?updatedAt=1728512810868', label: 'Salon Overview' },
        { src: 'https://ik.imagekit.io/a7tech/Interior/150BC0A9-C27D-42D0-A5F7-23CE1A4903B0.jpeg?updatedAt=1728512810294', label: 'Galley' },
        { src: 'https://ik.imagekit.io/a7tech/Interior/8F2FA900-91B2-4F00-B2DB-7A2A5821C5D3.jpeg?updatedAt=1728512809804', label: 'Master Cabin' },
        { src: 'https://ik.imagekit.io/a7tech/Interior/122CD087-E24A-42F4-BA9F-9BB9493B1F42.jpeg?updatedAt=1728512809179', label: 'Guest Cabin' },
        { src: 'https://ik.imagekit.io/a7tech/Interior/A4FC242C-0F9B-421A-8B1C-F9EB2073D049.jpeg?updatedAt=1728512808717', label: 'Helm Station' },
        { src: 'https://ik.imagekit.io/a7tech/Interior/4E987CD1-F106-411B-8639-C46020BDA20C.jpeg?updatedAt=1728512738921', label: 'Bathroom' }
      ]
    },
    {
      title: 'Exterior',
      images: [
        { src: 'https://ik.imagekit.io/a7tech/Exterior/A80D12AF-8CE1-4023-8522-425477DA5356.jpeg?updatedAt=1728513179534', label: 'Bow View' },
        { src: 'https://ik.imagekit.io/a7tech/Exterior/C51968EF-7321-4FD0-B305-6F4DFBFEBCE0.jpeg?updatedAt=1728513178886', label: 'Starboard Side' },
        { src: 'https://ik.imagekit.io/a7tech/Exterior/0A770425-262B-445A-9A94-8230C011DC9E.jpeg?updatedAt=1728513158332', label: 'Stern View' },
        { src: 'https://ik.imagekit.io/a7tech/Exterior/EBAE0BFF-907B-4787-9B9A-95978EDA4D9A.jpeg?updatedAt=1728513157789', label: 'Port Side' },
        { src: 'https://ik.imagekit.io/a7tech/Exterior/439DC9F9-C364-4259-9410-08A65475E45C.jpeg?updatedAt=1728513157294', label: 'Flybridge' },
        { src: 'https://ik.imagekit.io/a7tech/Exterior/80031D5B-94C5-43ED-B69F-EC838959C3C4.jpeg?updatedAt=1728513134826', label: 'Aft Deck' },
        { src: 'https://ik.imagekit.io/a7tech/Exterior/D2DB2DF2-F90B-4295-8B80-F3F03C35D899.jpeg?updatedAt=1728513134102', label: 'Swim Platform' },
        { src: 'https://ik.imagekit.io/a7tech/Exterior/60C464F6-2160-4FC5-A9CC-E1E6296385A7.jpeg?updatedAt=1728513133514', label: 'Deck Details' },
        { src: 'https://ik.imagekit.io/a7tech/Exterior/29A4A357-F0D2-4BB3-A944-F85168847219.jpeg?updatedAt=1728512917465', label: 'Full Profile' }
      ]
    },
    {
      title: 'Mechanicals',
      images: [
        { src: 'https://ik.imagekit.io/a7tech/Mechanicals/4C16539B-8F90-4C06-8F8C-CE6861310331.jpeg?updatedAt=1728513240408', label: 'Engine Overview' },
        { src: 'https://ik.imagekit.io/a7tech/Mechanicals/17AD1545-ADA9-4345-B124-F0956FE72ADA.jpeg?updatedAt=1728513220480', label: 'Engine Detail' },
        { src: 'https://ik.imagekit.io/a7tech/Mechanicals/E6B30E06-FC73-4C6C-A46F-A22A633C91B0.jpeg?updatedAt=1728513209894', label: 'Electrical Panel' },
        { src: 'https://ik.imagekit.io/a7tech/Mechanicals/BE8D7ECA-7768-4A99-AEF6-D2AEB0108C61.jpeg?updatedAt=1728513196934', label: 'Fuel System' },
        { src: 'https://ik.imagekit.io/a7tech/Mechanicals/6B376F1C-EC9C-4B85-B63A-095BB06D1E37.jpeg?updatedAt=1728513045474', label: 'Engine Room Access' }
      ]
    }
  ]

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Photo Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <div key={index}>
            <h3 className="text-2xl font-semibold mb-4">{category.title}</h3>
            <div className="space-y-4">
              {category.images.map((image, imgIndex) => (
                <PhotoCard key={imgIndex} image={image.src} label={image.label} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PhotoCards