// src/components/Button.jsx
import React from "react";

/**
 * Reusable button component with Tailwind styling.
 * Props:
 * - children: button label
 * - onClick: handler
 * - type: button type (default "button")
 * - className: additional Tailwind classes
 */
export default function Button({ children, onClick, type = "button", className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-3 rounded-full font-semibold transition-colors duration-200 bg-primary text-white hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary/50 ${className}`}
    >
      {children}
    </button>
  );
}
