// src/components/IconCard.jsx
import React from "react";
import { IconContext } from "react-icons";

/**
 * Card with an icon on the left and text on the right.
 * Props:
 * - icon: React element from react-icons
 * - title: string
 * - description: string or JSX
 * - className: extra Tailwind classes
 */
export default function IconCard({ icon, title, description, className = "" }) {
  return (
    <div className={`flex items-start space-x-4 p-4 bg-white rounded-lg shadow ${className}`}>
      <IconContext.Provider value={{ size: "2em", className: "text-primary" }}>
        <div>{icon}</div>
      </IconContext.Provider>
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-1">{description}</p>
      </div>
    </div>
  );
}
