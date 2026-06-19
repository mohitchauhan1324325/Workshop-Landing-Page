// src/pages/Hero.jsx
import React from "react";
import { FiVideo, FiMonitor, FiAward, FiUserCheck } from "react-icons/fi";
import Button from "../components/Button";
import IconCard from "../components/IconCard";

/**
 * Hero section with gradient background, title, description, highlights, and CTA.
 */
export default function Hero() {
  const highlights = [
    { icon: <FiVideo />, title: "Live Online Sessions" },
    { icon: <FiMonitor />, title: "Hands‑on Projects" },
    { icon: <FiAward />, title: "Certificate of Completion" },
    { icon: <FiUserCheck />, title: "Beginner Friendly" },
  ];

  return (
    <section className="bg-hero-gradient min-h-screen flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-r from-primary to-pink-300">
      <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
        AI &amp; Robotics Summer Workshop
      </h1>
      <p className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-8">
        Introduce your child to the exciting world of Artificial Intelligence and Robotics through hands‑on projects, interactive activities, and guided learning.
      </p>
      <Button className="mb-10" onClick={() => document.getElementById('register').scrollIntoView({ behavior: 'smooth' })}>
        Enroll Now
      </Button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {highlights.map((item, idx) => (
          <IconCard key={idx} icon={item.icon} title={item.title} description="" />
        ))}
      </div>
    </section>
  );
}
