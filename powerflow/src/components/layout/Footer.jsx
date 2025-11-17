import React from "react";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-200 py-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 flex flex-col lg:flex-row justify-between items-center gap-6">
        <p className="text-sm sm:text-base">
          © 2025 Powerflow. All rights reserved.
        </p>

        <div className="flex gap-4">
          <a
            href="#home"
            className="hover:text-primary transition text-sm sm:text-base"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-primary transition text-sm sm:text-base"
          >
            About Us
          </a>
          <a
            href="#services"
            className="hover:text-primary transition text-sm sm:text-base"
          >
            Services
          </a>
          <a
            href="#contact"
            className="hover:text-primary transition text-sm sm:text-base"
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
