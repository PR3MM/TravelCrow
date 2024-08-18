import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer className="text-gray-400 bg-black body-font border-t border-gray-800">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10 md:mb-0">
            <h2 className="title-font font-bold text-white tracking-widest text-lg mb-3">ABOUT US</h2>
            <nav className="list-none mb-10">
              <li className="mb-2">
                <a className="text-gray-400 hover:text-white transition-colors duration-300">Our Story</a>
              </li>
              <li className="mb-2">
                <a className="text-gray-400 hover:text-white transition-colors duration-300">Team</a>
              </li>
              <li className="mb-2">
                <a className="text-gray-400 hover:text-white transition-colors duration-300">Careers</a>
              </li>
              <li className="mb-2">
                <a className="text-gray-400 hover:text-white transition-colors duration-300">Press</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10 md:mb-0">
            <h2 className="title-font font-bold text-white tracking-widest text-lg mb-3">SERVICES</h2>
            <nav className="list-none mb-10">
              <li className="mb-2">
                <Link to="/tour-packages" className="text-gray-400 hover:text-white transition-colors duration-300 "> Tour Packages</Link>
              </li>
              <li className="mb-2">
                <a className="text-gray-400 hover:text-white transition-colors duration-300">Flight Booking</a>
              </li>
              <li className="mb-2">
                <a className="text-gray-400 hover:text-white transition-colors duration-300">Hotel Reservations</a>
              </li>
              <li className="mb-2">
                <a className="text-gray-400 hover:text-white transition-colors duration-300">Travel Insurance</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10 md:mb-0">
            <h2 className="title-font font-bold text-white tracking-widest text-lg mb-3">DESTINATIONS</h2>
            <nav className="list-none mb-10">
              <li className="mb-2">
                <a className="text-gray-400 hover:text-white transition-colors duration-300">Rajasthan</a>
              </li>
              <li className="mb-2">
                <a className="text-gray-400 hover:text-white transition-colors duration-300">Kerala</a>
              </li>
              <li className="mb-2">
                <a className="text-gray-400 hover:text-white transition-colors duration-300">Goa</a>
              </li>
              <li className="mb-2">
                <a className="text-gray-400 hover:text-white transition-colors duration-300">Himachal Pradesh</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-white tracking-widest text-lg mb-3">CONTACT</h2>
            <nav className="list-none mb-10">
              <li className="mb-2 flex items-center justify-center md:justify-start">
                <Phone size={18} className="mr-2" />
                <a className="text-gray-400 hover:text-white transition-colors duration-300">+91 123 456 7890</a>
              </li>
              <li className="mb-2 flex items-center justify-center md:justify-start">
                <Mail size={18} className="mr-2" />
                <a className="text-gray-400 hover:text-white transition-colors duration-300">info@travelcrow.com</a>
              </li>
              <li className="mb-2 flex items-center justify-center md:justify-start">
                <MapPin size={18} className="mr-2" />
                <a className="text-gray-400 hover:text-white transition-colors duration-300">123 Travel Street, Mumbai</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="container mx-auto py-6 px-5 flex flex-wrap flex-col sm:flex-row">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white mb-4 md:mb-0">
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-gray-800 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg> */}
            <span className="ml-3 text-xl">TravelCrow</span>
          </a>
          <p className="text-sm text-gray-400 sm:ml-6 sm:mt-0 mt-4">© 2024 TravelCrow —
            <a href="https://www.instagram.com/premdhote17/" rel="noopener noreferrer" className="text-gray-500 ml-1" target="_blank">@PremvedDhote</a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-400 hover:text-white transition-colors duration-300">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-400 hover:text-white transition-colors duration-300">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-400 hover:text-white transition-colors duration-300">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-400 hover:text-white transition-colors duration-300">
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;