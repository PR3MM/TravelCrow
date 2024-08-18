import React from "react";

const tourPackages = [
  {
    title: "Spiritual Tour",
    description:
      "Experience the spiritual essence of India with visits to sacred temples and holy sites.",
    image: "https://via.placeholder.com/300?text=Spiritual+Tour",
  },
  {
    title: "Adventure Tour",
    description:
      "Embark on thrilling adventures with treks, rafting, and more in the mountains and rivers of India.",
    image: "https://via.placeholder.com/300?text=Adventure+Tour",
  },
  {
    title: "Cultural Heritage Tour",
    description:
      "Explore India's rich cultural heritage, including historic forts, palaces, and UNESCO World Heritage sites.",
    image: "https://via.placeholder.com/300?text=Cultural+Heritage+Tour",
  },
  {
    title: "Wildlife Safari",
    description:
      "Discover the diverse wildlife of India with safaris in national parks and wildlife sanctuaries.",
    image: "https://via.placeholder.com/300?text=Wildlife+Safari",
  },
  {
    title: "Beach Vacation",
    description:
      "Relax on the pristine beaches of Goa, Kerala, and Andaman with sun, sand, and sea.",
    image: "https://via.placeholder.com/300?text=Beach+Vacation",
  },
  {
    title: "Hill Station Retreat",
    description:
      "Escape to the cool and serene hill stations of India for a peaceful retreat.",
    image: "https://via.placeholder.com/300?text=Hill+Station+Retreat",
  },
  {
    title: "Luxury Tour",
    description:
      "Experience the royal treatment with luxurious stays at palaces and 5-star resorts.",
    image: "https://via.placeholder.com/300?text=Luxury+Tour",
  },
  {
    title: "Food & Culinary Tour",
    description:
      "Indulge in the diverse and flavorful culinary delights of India, from street food to gourmet cuisine.",
    image: "https://via.placeholder.com/300?text=Food+%26+Culinary+Tour",
  },
];

const TourPackagesPage = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-16 p-10 ">
      <h1 className="text-4xl font-bold text-center mb-12">
        Explore Our Tour Packages
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
        {tourPackages.map((pkg, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 bg-white bg-opacity-10 rounded-lg overflow-hidden transition duration-300 transform hover:-translate-y-2 hover:shadow-xl text-white bg-opacity-10 rounded-lg overflow-hidden transition duration-300 transform hover:-translate-y-2 hover:shadow-xl "
          >
            <img
              src={pkg.image}
              alt={pkg.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">{pkg.title}</h2>
              <p className="text-lg">{pkg.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourPackagesPage;
