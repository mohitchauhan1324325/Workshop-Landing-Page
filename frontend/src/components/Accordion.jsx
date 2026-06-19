// src/components/Accordion.jsx
import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

/**
 * Simple accordion component for FAQs.
 * Props:
 *   items: [{ id, question, answer }]
 */
export default function Accordion({ items }) {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-4">
      {items.map(({ id, question, answer }) => (
        <div key={id} className="border rounded-lg overflow-hidden">
          <button
            onClick={() => toggle(id)}
            className="w-full flex justify-between items-center p-4 bg-blue-600 text-white hover:bg-blue-700 focus:outline-none transition"
          >
            <span className="font-medium text-left">{question}</span>
            {openId === id ? <FiChevronUp /> : <FiChevronDown />}
          </button>
          {openId === id && (
            <div className="p-4 bg-gray-50 text-gray-800">
              {answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
