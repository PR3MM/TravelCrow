import React from 'react';

function Testimonials() {
  return (
    <section className="text-gray-300 bg-black body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-4xl font-bold title-font text-white mb-12 text-center">
          What Our Clients Say
        </h1>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/2 w-full">
            <div className="bg-white bg-opacity-10 rounded-xl p-8 transition duration-300 hover:bg-opacity-20 hover:shadow-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="block w-5 h-5 text-white mb-4"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601 20.4 143.3 55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed mb-6 text-white font-semibold">
                "Our experience with this travel agency was nothing short of outstanding. They meticulously planned our itinerary, ensuring every detail was perfect. The personalized service and seamless execution made our vacation stress-free and unforgettable. Highly recommend for anyone looking for a top-notch travel experience."
              </p>
              <a className="inline-flex items-center">
                <img
                  alt="testimonial"
                  src="https://img.freepik.com/free-photo/young-adult-enjoying-virtual-date_23-2149328221.jpg?ga=GA1.1.1187748767.1708226618&semt=ais_hybrid"
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center border-2 border-gray-800"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-white">
                    Rajesh Mehta
                  </span>
                  <span className="text-white text-sm">Travel Enthusiast</span>
                </span>
              </a>
            </div>
          </div>
          <div className="p-4 md:w-1/2 w-full">
            <div className="bg-white bg-opacity-10 rounded-xl p-8 transition duration-300 hover:bg-opacity-20 hover:shadow-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="block w-5 h-5 text-white mb-4"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601 20.4 143.3 55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed mb-6 text-white font-semibold">
                "The travel agency went above and beyond to make our trip memorable. From the initial consultation to the final farewell, their team provided exceptional service and valuable insights. We were impressed with their attention to detail and the quality of the accommodations they arranged. A truly remarkable experience."
              </p>
              <a className="inline-flex items-center">
                <img
                  alt="testimonial"
                  src="https://img.freepik.com/premium-photo/woman-with-her-arms-crossed-front-building_1186156-479.jpg?ga=GA1.1.1187748767.1708226618&semt=ais_hybrid"
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center border-2 border-gray-800"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-white">
                    Ananya Kapoor
                  </span>
                  <span className="text-white text-sm">Frequent Traveler</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;