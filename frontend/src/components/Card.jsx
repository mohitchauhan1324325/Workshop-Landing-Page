// src/components/Card.jsx
import React from "react";

/**
 * Generic card component used across sections.
 * Props:
 * - children: card content
 * - className: extra Tailwind classes
 */
export default function Card({ children, className = "" }) {
  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 transition-transform hover:scale-[1.02] ${className}`}>
      {children}
    </div>
  );
}
