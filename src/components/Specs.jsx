import React from 'react'

const SpecTable = ({ title, specs }) => (
  <div className="mb-8">
    <h3 className="text-2xl font-semibold mb-4 text-amber-500">{title}</h3>
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <table className="w-full">
        <tbody>
          {specs.map((spec, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-700' : ''}>
              <td className="py-2 px-4 border-b border-gray-600">{spec.label}</td>
              <td className="py-2 px-4 border-b border-gray-600">{spec.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)

const Specs = () => {
  const mainSpecifications = [
    { label: 'Model', value: '36 Europa' },
    { label: 'LOA (m)', value: '11.28 m' },
    { label: 'Beam (m)', value: '3.86 m' },
    { label: 'Draft (m)', value: '1.22 m' },
    { label: 'Year', value: '1991' },
    { label: 'Hull Material', value: 'GRP' },
    { label: 'Cabins', value: '2' },
    { label: 'Sleeping places', value: '3' },
    { label: 'Number of main engine(s)', value: '2 x' },
    { label: 'Power of main engine(s) (hp)', value: '150' },
    { label: 'Brand of main engine(s)', value: 'Cummins BT6' },
  ]

  const generalSpecifications = [
    { label: 'Air draft (m)', value: '6.65' },
    { label: 'Year built', value: '1991' },
    { label: 'Displacement (t)', value: '13' },
    { label: 'Hull material', value: 'GRP' },
    { label: 'Deck material', value: 'GRP' },
    { label: 'Superstructure material', value: 'GRP' },
    { label: 'Deck finish', value: 'Teak' },
    { label: 'Fuel tank (Litre and material)', value: '2 x 750L, Fiberglass' },
    { label: 'Freshwater Tank (Liter and material)', value: '1135L (300 gal), Fiberglass' },
    { label: 'Antifouling (Year)', value: '2023' },
    { label: 'Maximum speed (Kn)', value: '-' },
  ]

  const additionalSpecifications = [
    { label: 'Length Overall (LOA)', value: '11.28 m (37 ft)' },
    { label: 'Beam', value: '3.86 m (12.7 ft)' },
    { label: 'Draft', value: '1.22 m (4 ft)' },
    { label: 'Displacement', value: '13 tonnes' },
    { label: 'Fuel Capacity', value: '2 x 750L (396 gal), Fiberglass Tanks' },
    { label: 'Fresh Water Capacity', value: '1135L (300 gal), Fiberglass' },
    { label: 'Engines', value: '2x Cummins BT6, 210HP each' },
    { label: 'Cruising Speed', value: '7 knots' },
    { label: 'Berths', value: '3 (1 double, 2 single)' },
    { label: 'Toilets', value: '1 (electric)' },
    { label: 'Showers', value: '1' },
    { label: 'Generator', value: 'No Generator-Solar' },
    { label: 'Bow Thruster', value: 'None' },
  ]

  return (
    <section id="specs" className="py-16">
      <h2 className="text-4xl font-bold mb-8 text-center">Specifications</h2>
      <div className="max-w-4xl mx-auto">
        <SpecTable title="Main specifications" specs={mainSpecifications} />
        <SpecTable title="General" specs={generalSpecifications} />
        <SpecTable title="Additional Details" specs={additionalSpecifications} />
      </div>
    </section>
  )
}

export default Specs