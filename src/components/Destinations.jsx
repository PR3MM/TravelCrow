import React from "react";

const destinations = [
  {
    name: "Taj Mahal",
    category: "Historical Monument",
    description: "Visit the Taj Mahal, an iconic symbol of love and one of the Seven Wonders of the World. This stunning white marble mausoleum in Agra is renowned for its architectural beauty and intricate craftsmanship.",
    image: "https://img.freepik.com/free-photo/architecture-ancient-monument-world-heritage-day-celebration_23-2151297194.jpg?t=st=1723887349~exp=1723890949~hmac=90d2729fd600ff76e0565dcfd9332b799215e7873e1605e7990a2fa64eeee6ef&w=996",
    imageDescription: "A black and white image of the Taj Mahal, showcasing its majestic domes and minarets reflected in the still waters of the front pool at sunrise."
  },
  {
    name: "Jaipur",
    category: "Royal Heritage",
    description: "Explore the vibrant city of Jaipur, known for its stunning palaces, forts, and rich Rajasthani heritage. Experience the grandeur of the Amber Fort and the elegance of the Hawa Mahal.",
    image: "https://img.freepik.com/premium-photo/amber-fort-jaipur-rajasthan-india-amber-fort-maota-lake-jaipur-rajasthan-india-ai-generated_585735-4856.jpg?ga=GA1.1.1187748767.1708226618&semt=ais_hybrid",
    imageDescription: "A monochrome aerial view of Jaipur's Amber Fort, highlighting its intricate architecture and the surrounding Aravalli Hills."
  },
  {
    name: "Varanasi",
    category: "Spiritual Haven",
    description: "Experience the spiritual essence of Varanasi, one of the oldest living cities in the world. Witness the sacred rituals on the ghats of the Ganges River and immerse yourself in the city's rich spiritual heritage.  ",
    image: "https://img.freepik.com/premium-photo/river-ganges-sunrise-india-sunrise-holy-river-ganges-hindu-ghats-varanasi-uttar-pradesh-region-northern-india_1028938-237179.jpg?ga=GA1.1.1187748767.1708226618&semt=ais_hybrid",
    imageDescription: "A high-contrast black and white image of the Varanasi ghats at dusk, with silhouettes of boats on the Ganges and the glow of ritual fires."
  },
  {
    name: "Goa",
    category: "Beach Paradise",
    description: "Unwind in Goa, a coastal paradise known for its beautiful beaches, vibrant nightlife, and Portuguese heritage. Enjoy the sun, sea, and sand, and explore the charming streets of Old Goa.",
    image: "https://img.freepik.com/free-photo/miami-bayside-marketplace_23-2151599535.jpg?ga=GA1.1.1187748767.1708226618&semt=ais_hybrid",
    imageDescription: "A striking black and white photograph of a palm-fringed Goan beach at sunset, with traditional fishing boats in the foreground."
  }
];

function Destinations() {
  return (
    <section className="bg-black text-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Top Destinations in India</h2>
          <div className="h-1 w-24 bg-white mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover the most iconic and captivating destinations in India. From historical marvels to serene retreats, our curated list showcases places that offer rich cultural experiences and breathtaking beauty.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {destinations.map((destination, index) => (
            <div key={index} className="bg-white bg-opacity-10 rounded-lg overflow-hidden transition duration-300 transform hover:-translate-y-2 hover:shadow-xl">
              <div className="relative h-64">
                <img
                  className="w-full h-full object-cover"
                  src={destination.image}
                  alt={destination.name}
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-center px-4">{destination.imageDescription}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-sm font-medium text-gray-400 mb-2">{destination.category}</h3>
                <h2 className="text-2xl font-bold mb-4">{destination.name}</h2>
                <p className="text-gray-300 mb-6">{destination.description}</p>
                <a href="#" className="inline-block bg-white text-black font-bold py-2 px-4 rounded hover:bg-gray-200 transition duration-300">
                  Explore
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Destinations;