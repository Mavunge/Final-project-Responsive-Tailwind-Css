import React from "react";
import Navigation from "./Navigation";
import powerflowLogo from "../../assets/images/powerflow-logo.JPG";

const Header = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <img
            src={powerflowLogo}
            alt="Powerflow Logo"
            className="h-10 w-auto object-contain"
            loading="lazy"
          />
          <h1 className="text-xl sm:text-2xl font-bold text-neutral-900">
            Powerflow
          </h1>
        </div>

        <Navigation />
      </div>
    </header>
  );
};

export default Header;
