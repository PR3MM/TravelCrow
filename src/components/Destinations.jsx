import React from "react";

function Destinations() {
  return (
    <>
      <section className="text-gray-200 body-font bg-black">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Top Destinations</h1>
              <div className="h-1 w-20 bg-white rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-400">
              Discover the most iconic and captivating destinations in India. From historical marvels to serene retreats, our curated list showcases places that offer rich cultural experiences and breathtaking beauty.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-black p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/720x400"
                  alt="Taj Mahal"
                />
                <h3 className="tracking-widest text-white text-xs font-medium title-font">Historical Monument</h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">Taj Mahal</h2>
                <p className="leading-relaxed text-base text-gray-300">
                  Visit the Taj Mahal, an iconic symbol of love and one of the Seven Wonders of the World. This stunning white marble mausoleum in Agra is renowned for its architectural beauty and intricate craftsmanship.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-black p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/721x401"
                  alt="Jaipur"
                />
                <h3 className="tracking-widest text-white text-xs font-medium title-font">Royal Heritage</h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">Jaipur</h2>
                <p className="leading-relaxed text-base text-gray-300">
                  Explore the vibrant city of Jaipur, known for its stunning palaces, forts, and rich Rajasthani heritage. Experience the grandeur of the Amber Fort and the elegance of the Hawa Mahal.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-black p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/722x402"
                  alt="Varanasi"
                />
                <h3 className="tracking-widest text-white text-xs font-medium title-font">Spiritual Haven</h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">Varanasi</h2>
                <p className="leading-relaxed text-base text-gray-300">
                  Experience the spiritual essence of Varanasi, one of the oldest living cities in the world. Witness the sacred rituals on the ghats of the Ganges River and immerse yourself in the city's rich spiritual heritage.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-black p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/723x403"
                  alt="Goa"
                />
                <h3 className="tracking-widest text-white text-xs font-medium title-font">Beach Paradise</h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">Goa</h2>
                <p className="leading-relaxed text-base text-gray-300">
                  Unwind in Goa, a coastal paradise known for its beautiful beaches, vibrant nightlife, and Portuguese heritage. Enjoy the sun, sea, and sand, and explore the charming streets of Old Goa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Destinations;
