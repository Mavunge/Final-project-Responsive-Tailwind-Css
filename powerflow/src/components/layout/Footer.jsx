import React from "react";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-200 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Powerflow. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
