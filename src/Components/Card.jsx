import React from "react";
import { CiLocationOn } from "react-icons/ci";

const cards = [
  {
    title: "Amali Islands",
    location: "Dahisar",
    image: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=600",
    paymentPlan: "60/40 Payment Plan",
    handover: "Handover 2027 Q1",
    category: "VILLAS",
    LocationIcon : <CiLocationOn />
  },
  {
    title: "Palm Heights",
    location: "Borivali",
    image: "https://images.pexels.com/photos/783745/pexels-photo-783745.jpeg?auto=compress&cs=tinysrgb&w=600",
    paymentPlan: "50/50 Payment Plan",
    handover: "Handover 2026 Q4",
    category: "APARTMENTS",
  },
  {
    title: "Mira Road",
    location: "Dubai Marina",
    image: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=600",
    paymentPlan: "70/30 Payment Plan",
    handover: "Handover 2025 Q3",
    category: "PENTHOUSES",
  },
];

const Card = ({ card }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <div className="relative">
        <img
          className="w-full h-48 object-cover"
          src={card.image}
          alt={card.title}
        />
        <div className="absolute top-2 left-2 bg-black text-white text-xs rounded px-2 py-1">
          {card.paymentPlan}
        </div>
        <div className="absolute top-2 right-2 bg-black text-white text-xs rounded px-2 py-1">
          {card.handover}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold">{card.title}</h3>
        <div className="flex items-center  gap-2">
        <p className="text-gray-600">{card.LocationIcon}</p>
        <p className="text-gray-600">{card.location}</p>
        </div>
        <button className="bg-blue-900 text-white text-xs font-bold py-1 px-3 rounded mt-3">
          {card.category}
        </button>
        <button className="text-blue-600 text-lg float-right mt-3">
          <i className="fas fa-whatsapp"></i>
        </button>
      </div>
    </div>
  );
};

const CardList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {cards.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </div>
  );
};

export default CardList;
