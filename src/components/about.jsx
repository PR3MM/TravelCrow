import React from "react";
import { MapPin, Users, Heart, Compass } from 'lucide-react';

function About() {
  return (
    <section className="text-gray-300 body-font bg-black">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center w-full mb-20">
          <h1 className="text-4xl font-bold mb-4 text-white">About Yatra Discoveries</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-gray-300">
            Embark on a journey through the vibrant tapestry of India with Yatra Discoveries, your gateway to unforgettable travel experiences.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {[
            {
              title: "Our Mission",
              description: "To showcase India's rich cultural heritage and natural wonders, creating immersive experiences that leave lasting impressions.",
              icon: <Compass className="w-6 h-6" />
            },
            {
              title: "Our Team",
              description: "A diverse group of passionate Indian travel experts dedicated to curating authentic and transformative journeys across the subcontinent.",
              icon: <Users className="w-6 h-6" />
            },
            {
              title: "Our Commitment",
              description: "We prioritize sustainable tourism, supporting local communities, and preserving India's natural and cultural treasures for future generations.",
              icon: <Heart className="w-6 h-6" />
            }
          ].map((item, index) => (
            <div key={index} className="p-4 md:w-1/3 w-full">
              <div className="flex rounded-lg h-full bg-white bg-opacity-10 p-8 flex-col backdrop-blur-sm transition duration-300 hover:bg-opacity-20 hover:shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full bg-black text-white flex-shrink-0">
                    {item.icon}
                  </div>
                  <h2 className="text-white text-xl font-semibold">{item.title}</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap mt-16">
          {[
            {
              quote: "Yatra Discoveries transformed our family trip into an unforgettable journey through India. Their attention to detail and knowledge of hidden gems made all the difference. We can't wait to explore more of India with them!",
              name: "Priya Sharma",
              title: "Adventure Enthusiast",
              img:"https://img.freepik.com/premium-photo/indian-woman-portrait-temple_53876-71699.jpg?ga=GA1.1.1187748767.1708226618&semt=ais_hybrid"
            },
            {
              quote: "As a solo traveler, I was amazed by the personalized experiences Yatra Discoveries crafted for me. From bustling markets to serene temples, every moment was magical. Truly the best way to discover India!",
              name: "Rahul Kapoor",
              title: "Cultural Explorer",
              img:"https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?ga=GA1.1.1187748767.1708226618&semt=ais_hybrid"
            }
          ].map((testimonial, index) => (
            <div key={index} className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm transition duration-300 hover:bg-opacity-20 hover:shadow-xl">
                <MapPin className="w-6 h-6 text-white mb-4" />
                <p className="leading-relaxed mb-6">
                  {testimonial.quote}
                </p>
                <div className="inline-flex items-center">
                  <img alt="testimonial" src={testimonial.img} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">{testimonial.name}</span>
                    <span className="text-gray-400 text-sm">{testimonial.title}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;