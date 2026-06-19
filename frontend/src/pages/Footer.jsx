// src/pages/Footer.jsx
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaPhoneAlt } from "react-icons/fa";

/**
 * Footer with workshop name, contact details, and social icons.
 */
export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-xl font-bold">AI &amp; Robotics Summer Workshop</h3>
          <p className="text-sm">© 2026 All Rights Reserved.</p>
        </div>
        <div className="space-x-4 flex">
          <a href="#" className="hover:text-gray-200"><FaFacebookF size={20} /></a>
          <a href="#" className="hover:text-gray-200"><FaTwitter size={20} /></a>
          <a href="#" className="hover:text-gray-200"><FaInstagram size={20} /></a>
        </div>
      </div>
    </footer>
  );
}
