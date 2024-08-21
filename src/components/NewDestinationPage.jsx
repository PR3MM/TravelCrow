import React from "react";
import { Link } from "react-router-dom";

function handleOnClick() {}

const destinations = [
  {
    name: "Taj Mahal",
    category: "Historical Monument",
    description:
      "Visit the Taj Mahal, an iconic symbol of love and one of the Seven Wonders of the World. This stunning white marble mausoleum in Agra is renowned for its architectural beauty and intricate craftsmanship.",
    image:
      "https://img.freepik.com/free-photo/architecture-ancient-monument-world-heritage-day-celebration_23-2151297194.jpg?t=st=1723887349~exp=1723890949~hmac=90d2729fd600ff76e0565dcfd9332b799215e7873e1605e7990a2fa64eeee6ef&w=996",
    imageDescription:
      "A black and white image of the Taj Mahal, showcasing its majestic domes and minarets reflected in the still waters of the front pool at sunrise.",
  },
  {
    name: "Jaipur",
    category: "Royal Heritage",
    description:
      "Explore the vibrant city of Jaipur, known for its stunning palaces, forts, and rich Rajasthani heritage. Experience the grandeur of the Amber Fort and the elegance of the iconic Hawa Mahal.",
    image:
      "https://img.freepik.com/premium-photo/amber-fort-jaipur-rajasthan-india-amber-fort-maota-lake-jaipur-rajasthan-india-ai-generated_585735-4856.jpg?ga=GA1.1.1187748767.1708226618&semt=ais_hybrid",
    imageDescription:
      "A monochrome aerial view of Jaipur's Amber Fort, highlighting its intricate architecture and the surrounding Aravalli Hills.",
  },
  {
    name: "Varanasi",
    category: "Spiritual Haven",
    description:
      "Experience the spiritual essence of Varanasi, one of the oldest living cities in the world. Witness the sacred rituals on the ghats of the Ganges River and immerse yourself in the city's rich spiritual heritage.",
    image:
      "https://img.freepik.com/premium-photo/river-ganges-sunrise-india-sunrise-holy-river-ganges-hindu-ghats-varanasi-uttar-pradesh-region-northern-india_1028938-237179.jpg?ga=GA1.1.1187748767.1708226618&semt=ais_hybrid",
    imageDescription:
      "A high-contrast black and white image of the Varanasi ghats at dusk, with silhouettes of boats on the Ganges and the glow of ritual fires.",
  },
  {
    name: "Goa",
    category: "Beach Paradise",
    description:
      "Unwind in Goa, a coastal paradise known for its beautiful beaches, vibrant nightlife, and rich Portuguese heritage. Enjoy the sun, sea, and sand, and explore the charming streets of Old Goa.",
    image:
      "https://img.freepik.com/free-photo/miami-bayside-marketplace_23-2151599535.jpg?ga=GA1.1.1187748767.1708226618&semt=ais_hybrid",
    imageDescription:
      "A striking black and white photograph of a palm-fringed Goan beach at sunset, with traditional fishing boats in the foreground.",
  },
  {
    name: "Kerala",
    category: "Backwater Bliss",
    description:
      "Discover the serene backwaters of Kerala, a tropical paradise known for its lush greenery beauty, tranquil waterways, and rich cultural heritage. Enjoy a peaceful houseboat cruise through the picturesque canals.",
    image:
      "https://img.freepik.com/premium-photo/houseboat-kerala-backwaters-india_163782-3931.jpg?ga=GA1.1.1187748767.1708226618&semt=ais_hybrid",
    imageDescription:
      "A peaceful black and white image of a traditional houseboat gliding through the calm backwaters of Kerala, surrounded by lush coconut palms.",
  },
  {
    name: "Leh-Ladakh",
    category: "Mountain Adventure",
    description:
      "Embark on an adventurous journey to Leh-Ladakh, a high-altitude desert known for its stunning landscapes, Buddhist monasteries, and thrilling road trips. Experience the beauty of Pangong Lake and the serenity of the monasteries.",
    image:
      "https://img.freepik.com/premium-photo/view-zanskar-valley_39121-133.jpg?ga=GA1.1.1187748767.1708226618&semt=ais_hybrid",
    imageDescription:
      "A dramatic black and white image of the Pangong Lake in Leh-Ladakh, with rugged mountains in the background and clouds reflecting in the crystal-clear waters.",
  },
  {
    name: "Udaipur",
    category: "Romantic Getaway",
    description:
      "Experience the romance of Udaipur, known as the 'City of Lakes.' Explore the beautiful palaces, serene lakes, and vibrant bazaars of this enchanting city. Visit the iconic City Palace and enjoy a boat ride on Lake Pichola.",
    image:
      "https://img.freepik.com/premium-photo/lake-pichola-old-city-palace-lake-palace-amazing-beautiful-view-from-ambrai-ghat-udaipur-rajasthan-india_136354-12570.jpg?ga=GA1.1.1187748767.1708226618&semt=ais_hybrid",
    imageDescription:
      "A serene black and white image of Udaipur's City Palace, reflecting in the calm waters of Lake Pichola during sunset.",
  },
  {
    name: "Rishikesh",
    category: "Adventure and Spirituality",
    description:
      "Find a perfect blend of adventure and spirituality in Rishikesh. Known as the Yoga Capital of the World, Rishikesh offers everything from white-water rafting to peaceful meditation retreats along the Ganges.",
    image:
      "https://img.freepik.com/premium-photo/lakshman-jhula-is-iron-suspension-bridge-situated-rishikesh_431724-6932.jpg?ga=GA1.1.1187748767.1708226618&semt=ais_hybrid",
    imageDescription:
      "A vibrant black and white image of the Laxman Jhula bridge in Rishikesh, with the Ganges River flowing beneath and mountains in the background.",
  },
  {
    name: "Amritsar",
    category: "Cultural Splendor",
    description:
      "Visit Amritsar, home to the iconic Golden Temple, one of the holiest Sikh shrines. Experience the rich culture, history, and spirituality of this vibrant city in Punjab, and witness the daily ceremonies at the temple.",
    image:
      "https://img.freepik.com/premium-photo/golden-temple-amritsar-punjab-india-most-sacred-icon-worship-place-sikh-religion_107467-416.jpg?ga=GA1.1.1187748767.1708226618&semt=ais_hybrid",
    imageDescription:
      "A reflective black and white image of the Golden Temple in Amritsar, with its shimmering reflection in the sacred pool surrounding it.",
  },
  {
    name: "Darjeeling",
    category: "Tea Gardens and Views",
    description:
      "Explore the lush tea gardens and scenic beauty of Darjeeling, a hill station known for its breathtaking views of the Himalayas and world-famous Darjeeling tea. Visit the Tiger Hill for a stunning sunrise view of Mount Kanchenjunga.",
    image:
      "https://img.freepik.com/premium-photo/view-from-darjeeling-magnificent-kanchanjangha_1048944-5419504.jpg?ga=GA1.1.1187748767.1708226618&semt=ais_hybrid",
    imageDescription:
      "A crisp black and white image of the rolling tea gardens of Darjeeling, with misty mountains in the background.",
  },
  {
    name: "Hampi",
    category: "Ancient Ruins",
    description:
      "Step back in time at Hampi, a UNESCO World Heritage Site known for its ancient temples, ruins, and boulders. Explore the fascinating rich history and unique landscape of this archaeological marvel.",
    image:
      "https://img.freepik.com/premium-photo/hampi-hampe-also-referred-as-group-monuments-hampi_558469-995.jpg?ga=GA1.1.1187748767.1708226618&semt=ais_hybrid",
    imageDescription:
      "A stunning black and white image of the ancient ruins of Hampi, with large boulders and intricate temple carvings under the bright sun.",
  },
  {
    name: "Mysore",
    category: "Royal Grandeur",
    description:
      "Discover the royal grandeur of Mysore, known for its majestic palaces, vibrant festivals, and rich culture and history. Visit the iconic Mysore Palace and enjoy the city's cultural heritage.",
    image:
      "https://img.freepik.com/premium-photo/mysore-india-view-sri-chamundeshwari-temple-located-chamundi-hills-near-mysore_380726-700.jpg?ga=GA1.1.1187748767.1708226618&semt=ais_hybrid",
    imageDescription:
      "A night-time black and white image of the illuminated Mysore Palace, showcasing its intricate architecture and regal splendor.",
  },
];

function NewDestinationPage() {
  return (
    <section className="bg-black text-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Top Destination in India
          </h2>
          <div className="h-1 w-24 bg-white mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover the most iconic and captivating destinations in India. From
            historical marvels to serene retreats, our curated list showcases
            places that offer rich cultural experiences and breathtaking beauty.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 rounded-lg overflow-hidden transition duration-300 transform hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-64">
                <img
                  className="w-full h-full object-cover"
                  src={destination.image}
                  alt={destination.name}
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-center px-4">
                    {destination.imageDescription}
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-sm font-medium text-gray-400 mb-2">
                  {destination.category}
                </h3>
                <h2 className="text-2xl font-bold mb-4">{destination.name}</h2>
                <p className="text-gray-300 mb-6">{destination.description}</p>
                <Link
                  to={`/destination/${destination.name}`}
                  className="inline-block bg-white text-black font-bold py-2 px-4 rounded hover:bg-gray-200 transition duration-300"
                >
                  Explore
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewDestinationPage;
