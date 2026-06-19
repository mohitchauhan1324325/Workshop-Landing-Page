// src/pages/Outcomes.jsx
import React from "react";
import Card from "../components/Card";

/**
 * Learning outcomes displayed as a responsive grid of cards.
 */
export default function Outcomes() {
  const outcomes = [
    "Understand AI fundamentals and real‑world applications",
    "Build simple robotics projects",
    "Learn basic programming concepts",
    "Improve logical thinking and problem‑solving skills",
    "Gain confidence in technology and innovation",
    "Work on mini projects and practical activities",
  ];

  return (
    <section className="py-12" id="outcomes">
      <h2 className="text-3xl font-bold text-center mb-8">What Your Child Will Learn</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {outcomes.map((txt, i) => (
          <Card key={i} className="bg-white">
            <p className="text-gray-800">{txt}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
