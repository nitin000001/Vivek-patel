import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import dahisar from "../../public/dahisar.jpeg";
import borivali from "../../public/borivali.jpeg";
import kandivali from "../../public/kandivali.jpeg";
import malad from "../../public/malad.jpeg";
import andheri from "../../public/andheri.jpeg";
import goregoan from "../../public/goregoan.jpeg";

const cards = [
  {
    title: "Residential Real Estate Dahisar",
    location: "Dahisar",
    image: dahisar,
    category: "VILLAS",
    LocationIcon: <CiLocationOn />,
    whatsappLink: "https://wa.me/917770017997",
    callLink: "tel:+917770017997",
    link: "https://www.youtube.com/playlist?list=PLE15IvBqFDJ7bC3tl0xaSCpeZdMgj_BGo",
  },
  {
    title: "Residential Real Estate Borivali",
    location: "Borivali",
    image: borivali,
    category: "APARTMENTS",
    LocationIcon: <CiLocationOn />,
    whatsappLink: "https://wa.me/917770017997",
    callLink: "tel:+917770017997",
    link: "https://www.youtube.com/playlist?list=PLE15IvBqFDJ7Do2lds5gohfvvGZKtSxYP",
  },
  {
    title: "Residential Real Estate Kandivali",
    location: "Kandivali",
    image: kandivali,
    category: "PENTHOUSES",
    LocationIcon: <CiLocationOn />,
    whatsappLink: "https://wa.me/917770017997",
    callLink: "tel:+917770017997",
    link: "https://www.youtube.com/playlist?list=PLE15IvBqFDJ50a997MDbeO9KSWu3Blj4_",
  },
  {
    title: "Residential Real Estate Malad",
    location: "Malad",
    image: malad,
    category: "PENTHOUSES",
    LocationIcon: <CiLocationOn />,
    whatsappLink: "https://wa.me/917770017997",
    callLink: "tel:+917770017997",
    link: "https://www.youtube.com/playlist?list=PLE15IvBqFDJ6yRxcDL-r0q9n5h1VxLg5m",
  },
  {
    title: "Residential Real Estate Andheri",
    location: "Andheri",
    image: andheri,
    category: "PENTHOUSES",
    LocationIcon: <CiLocationOn />,
    whatsappLink: "https://wa.me/917770017997",
    callLink: "tel:+917770017997",
    link: "https://www.youtube.com/playlist?list=PLE15IvBqFDJ6CpyFMq2TYYo9F1B5a3CMs",
  },
  {
    title: "Residential Real Estate Goregoan",
    location: "Goregoan",
    image: goregoan,
    category: "PENTHOUSES",
    LocationIcon: <CiLocationOn />,
    whatsappLink: "https://wa.me/917770017997",
    callLink: "tel:+917770017997",
    link: "https://www.youtube.com/playlist?list=PLE15IvBqFDJ6CpyFMq2TYYo9F1B5a3CMs",
  },
];

const Card = ({ card }) => {
  return (
    <a
      href={card.link}
      target="_blank"
      rel="noopener noreferrer"
      className="max-w-sm cursor-pointer rounded-lg overflow-hidden shadow-lg bg-white mx-auto block"
    >
      <div className="relative">
        <img
          className="w-full h-48 object-cover p-3"
          src={card.image}
          alt={card.title}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
        <div className="flex items-center gap-2 mb-4">
          <p className="text-gray-600">{card.LocationIcon}</p>
          <p className="text-gray-600">{card.location}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="bg-blue-900 text-white text-sm font-bold py-2 px-4 rounded">
            View Details
          </p>
          <div className="flex items-center space-x-4">
            <a
              href={card.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 text-xl"
              onClick={(e) => e.stopPropagation()} // Prevents the click event from propagating to the card
            >
              <FaWhatsapp />
            </a>
            <a
              href={card.callLink}
              className="text-blue-600 text-xl"
              onClick={(e) => e.stopPropagation()} // Prevents the click event from propagating to the card
            >
              <IoMdCall />
            </a>
          </div>
        </div>
      </div>
    </a>
  );
};

const CardList = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
