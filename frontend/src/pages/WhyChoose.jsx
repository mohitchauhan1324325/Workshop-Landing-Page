// src/pages/WhyChoose.jsx
import React from "react";
import { FaUserTie, FaVideo, FaHandsHelping, FaUsers, FaAward, FaBook } from "react-icons/fa";
import IconCard from "../components/IconCard";

/**
 * Feature cards that explain why to choose this workshop.
 */
export default function WhyChoose() {
  const features = [
    { icon: <FaUserTie />, title: "Expert Mentors", description: "Industry‑experienced teachers guiding each step" },
    { icon: <FaVideo />, title: "Interactive Sessions", description: "Live video classes with real‑time Q&A" },
    { icon: <FaHandsHelping />, title: "Hands‑on Learning", description: "Build projects together with step‑by‑step help" },
    { icon: <FaUsers />, title: "Small Batch Size", description: "Personalised attention for every child" },
    { icon: <FaAward />, title: "Certificate of Completion", description: "Official recognition of achievement" },
    { icon: <FaBook />, title: "Project‑Based Curriculum", description: "Learn by creating real‑world AI/Robotics projects" },
  ];

  return (
    <section className="py-12 bg-pastel-pink" id="why-choose">
      <h2 className="text-3xl font-bold text-center mb-8">Why Choose This Workshop?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <IconCard
            key={i}
            icon={f.icon}
            title={f.title}
            description={f.description}
            className="bg-white"
          />
        ))}
      </div>
    </section>
  );
}
