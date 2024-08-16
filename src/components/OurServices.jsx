import React from 'react';

const OurServices = () => {
  return (
    <section className="bg-black py-6 sm:py-8 lg:py-12 text-white z-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-10 md:mb-16 text-center">
          <h2 className="text-2xl font-bold mb-4 md:text-3xl">Our Premier Travel Services</h2>
          <p className="text-gray-400 max-w-screen-md mx-auto">
            We provide a range of premium services to enhance your travel adventures. From curated itineraries to exclusive access, explore how we can make your journey extraordinary.
          </p>
        </div>

        <div className="grid gap-12 sm:grid-cols-2 xl:grid-cols-3 xl:gap-16">
          {/* Service 1: Personalized Itineraries */}
          <div className="flex flex-col items-center">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-white text-black shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a2 2 0 012-2h13a2 2 0 012 2v13a2 2 0 01-2 2H5a2 2 0 01-2-2V4z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a2 2 0 012-2h13a2 2 0 012 2v13a2 2 0 01-2 2H5a2 2 0 01-2-2V4z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Personalized Itineraries</h3>
            <p className="text-center text-gray-300 mb-2">Receive customized travel plans designed to fit your interests and preferences for an unforgettable experience.</p>
            <a href="#" className="font-bold text-white hover:text-gray-400 transition duration-300">Learn More</a>
          </div>

          {/* Service 2: Exclusive Travel Deals */}
          <div className="flex flex-col items-center">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-white text-black shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 00-2 2v10a2 2 0 002 2h18a2 2 0 002-2V7a2 2 0 00-2-2H3zm0 0v12m18-12v12" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Exclusive Travel Deals</h3>
            <p className="text-center text-gray-300 mb-2">Unlock special offers and discounts on flights, accommodations, and activities with our exclusive deals.</p>
            <a href="#" className="font-bold text-white hover:text-gray-400 transition duration-300">Learn More</a>
          </div>

          {/* Service 3: 24/7 Customer Support */}
          <div className="flex flex-col items-center">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-white text-black shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11.228V9.75c0-.61-.465-1.164-1.073-1.22a1.25 1.25 0 00-1.13 1.07L13 10v1.228a4.992 4.992 0 01-2 .473A5 5 0 015 10v-1.228C5.465 8.586 6 8.034 6 7.414V5.5a.5.5 0 00-.5-.5h-2a.5.5 0 00-.5.5v1.414A1.5 1.5 0 002 8v1.586a2 2 0 001 1.732V10c0 .786.162 1.514.453 2.16a5.002 5.002 0 003.027 2.236A1.99 1.99 0 0010 16c0 .226.043.45.122.655a1.9 1.9 0 00.634.634A2.005 2.005 0 0012 18a2.002 2.002 0 00.95-.236c.188-.091.357-.207.503-.336a1.992 1.992 0 00.497-2.19A5.027 5.027 0 0016 13v-1.25a1.5 1.5 0 01-1-1.732z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">24/7 Customer Support</h3>
            <p className="text-center text-gray-300 mb-2">Get round-the-clock support for any travel-related queries or issues to ensure a smooth journey.</p>
            <a href="#" className="font-bold text-white hover:text-gray-400 transition duration-300">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
