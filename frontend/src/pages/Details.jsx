// src/pages/Details.jsx
import React from "react";
import { FaUsers, FaCalendarAlt, FaLaptop, FaRupeeSign, FaClock } from "react-icons/fa";
import IconCard from "../components/IconCard";

/**
 * Workshop details displayed as responsive icon cards.
 */
export default function Details() {
  const details = [
    { icon: <FaUsers />, label: "Age Group", value: "8–14 Years" },
    { icon: <FaClock />, label: "Duration", value: "4 Weeks" },
    { icon: <FaLaptop />, label: "Mode", value: "Online" },
    { icon: <FaRupeeSign />, label: "Fee", value: "₹2,999" },
    { icon: <FaCalendarAlt />, label: "Start Date", value: "15 July 2026" },
  ];

  return (
    <section className="py-12 bg-pastel-blue" id="details">
      <h2 className="text-3xl font-bold text-center mb-8">Workshop Details</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {details.map((item, i) => (
          <IconCard
            key={i}
            icon={item.icon}
            title={item.label}
            description={item.value}
            className="bg-white"
          />
        ))}
      </div>
    </section>
  );
}
