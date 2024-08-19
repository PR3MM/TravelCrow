import React from "react";
import { Link } from "react-router-dom";

const tourPackages = [
  {
    title: "Spiritual Tour",
    description:
      "Experience the spiritual essence of India with visits to sacred temples and holy sites.",
    image: "https://img.freepik.com/free-photo/lohri-punjabi-folk-festival-with-people_23-2151020162.jpg?ga=GA1.1.1187748767.1708226618&semt=ais_hybrid",
  },
  {
    title: "Adventure Tour",
    description:
      "Embark on thrilling adventures with treks, rafting, and more in the mountains and rivers of India.",
    image: "https://images.unsplash.com/photo-1620720970374-5b7e67e1e610?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFydW5hY2hhbCUyMHByYWRlc2glMkMlMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Cultural Heritage Tour",
    description:
      "Explore India's rich cultural heritage, including forts, palaces, and UNESCO World Heritage sites.",
    image: "https://img.freepik.com/free-photo/tourist-carrying-luggage_23-2151747354.jpg?ga=GA1.1.1187748767.1708226618&semt=ais_hybrid",
  },
  {
    title: "Wildlife Safari",
    description:
      "Discover the diverse wildlife of India with safaris in national parks and wildlife sanctuaries.",
    image: "https://img.freepik.com/premium-photo/wild-animals-silhouette_1029622-20868.jpg?ga=GA1.1.1187748767.1708226618&semt=ais_hybrid",
  },
  {
    title: "Beach Vacation",
    description:
      "Relax on the pristine beaches of Goa, Kerala, and Andaman with sun, sand, and sea.",
    image: "https://img.freepik.com/premium-photo/palm-tree-is-beach-sun-is-setting_1110958-18233.jpg?ga=GA1.1.1187748767.1708226618&semt=ais_hybrid",
  },
  {
    title: "Hill Station Retreat",
    description:
      "Escape to the cool and serene hill stations of India for a peaceful retreat.",
    image: "https://img.freepik.com/free-photo/luxurious-villa-with-modern-architectural-design_23-2151694095.jpg?ga=GA1.1.1187748767.1708226618&semt=ais_hybrid",
  },
  {
    title: "South India Tour",
    description:
      "Experience the royal treatment with luxurious stays at palaces and 5-star resorts.",
    image: "https://wallpaperaccess.com/full/1301223.jpg",
  },
  {
    title: "North-East India Tour",
    description:
      "Indulge in the diverse and flavorful culinary delights of India, from street food to gourmet cuisine.",
    image: "https://wallpaperaccess.com/full/9550781.jpg",
  },
];

const TourPackagesPage = () => {
  return (
    <div className="bg-black  text-white min-h-screen pt-16 p-10">
      <h1 className="text-4xl font-bold text-center mb-12">
        Explore Our Tour Packages
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {tourPackages.map((pkg, index) => (
          <div
            key={index}
            className="bg-white text-white  rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 bg-opacity-10"
          >
            <img
              src={pkg.image}
              alt={pkg.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">{pkg.title}</h2>
              <p className="text-lg mb-6">{pkg.description}</p>
              <button className="w-full py-2 px-4 bg-black  text-white rounded-lg hover:bg-white hover:text-black  transition duration-300">
                <Link to={`/tour-packages/${encodeURIComponent(pkg.title)}`} > 
                Learn More
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourPackagesPage;