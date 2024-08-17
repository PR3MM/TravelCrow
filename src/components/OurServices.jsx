import React from 'react';

const OurServices = () => {
  const services = [
    {
      title: "Personalized Itineraries",
      description: "Receive customized travel plans designed to fit your interests and preferences for an unforgettable experience.",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
    },
    {
      title: "Exclusive Travel Deals",
      description: "Unlock special offers and discounts on flights, accommodations, and activities with our exclusive deals.",
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      title: "24/7 Customer Support",
      description: "Get round-the-clock support for any travel-related queries or issues to ensure a smooth journey.",
      icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
    },
  ];

  return (
    <section className="bg-black py-12 sm:py-16 lg:py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl mb-4">Our Premier Travel Services</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We provide a range of premium services to enhance your travel adventures. From curated itineraries to exclusive access, explore how we can make your journey extraordinary.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="bg-white bg-opacity-10 rounded-xl p-8 transition duration-300 hover:bg-opacity-20 hover:shadow-xl">
              <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <a href="#" className="inline-block bg-white text-black font-bold py-2 px-4 rounded hover:bg-gray-200 transition duration-300">Learn More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;