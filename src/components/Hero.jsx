  import React from 'react';
  import { Link } from 'react-router-dom';

  const Hero = () => {
    return (
      <section className="relative  inset-0 h-screen flex items-center justify-center  bg-black text-white">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://wallpaperaccess.com/full/3125410.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(10%) brightness(50%)'

          }}
        />

        


        
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Discover Your Next Adventure
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Embark on a journey of a lifetime with our exclusive travel experiences tailored to inspire and thrill.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/Destination" 
              className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-black bg-white hover:bg-gray-200 hover:text-black transition duration-300 ease-in-out"
            >
              Explore Now <span className="ml-2">→</span>
            </Link>
            {/* <a 
              href="#watch-video" 
              className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-black transition duration-300 ease-in-out"
            >
              Watch Video
            </a> */}
          </div>
        </div>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 z-0"></div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          <span className="text-white text-4xl animate-bounce block">↓</span>
        </div>

        {/* Social media links */}
        <div className="absolute bottom-10 right-10 z-10 flex space-x-4">
          <a href="https://www.instagram.com/premdhote17/" className="text-white hover:text-gray-300 transition duration-300">
            <img className="w-6 h-6 " src="https://cdn-icons-png.freepik.com/256/6422/6422200.png?ga=GA1.1.1187748767.1708226618&semt=ais_hybrid" alt="" />
          </a>
          <a href="#twitter" className="text-white hover:text-gray-300 transition duration-300">
            <img  className="w-6 h-6 brightness-100  "src="https://cdn-icons-png.freepik.com/256/12107/12107611.png?ga=GA1.1.1187748767.1708226618&semt=ais_hybrid" alt="" />
          </a>
          <a href="https://github.com/PR3MM" className="text-white hover:text-gray-300 transition duration-300">
            <img  className="w-6 h-6  brightness-100 "src="https://cdn-icons-png.freepik.com/256/6424/6424084.png?ga=GA1.1.1187748767.1708226618&semt=ais_hybrid" alt="" />
          </a>
        </div>

        {/* Featured destinations */}
        <div className="absolute bottom-20 left-10 z-10 hidden md:block">
          <div className=" backdrop-filter backdrop-blur-lg rounded-lg p-4 border border-white hover:backdrop-blur-none transition duration-100  " >
            <h3 className="text-white text-lg font-semibold mb-2">Featured Destination</h3>
            <ul className="text-gray-300">
              <li>Taj Mahal, Agra, India</li>
              {/* <li>Santorini, Greece</li>
              <li>Bali, Indonesia</li> */}
            </ul>
          </div>
        </div>
      </section>
    );
  };

  export default Hero;
