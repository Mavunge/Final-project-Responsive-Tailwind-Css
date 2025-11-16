import React from "react";
import Navigation from "./Navigation";
import powerflowLogo from "../../assets/images/powerflow-logo.png";

const Header = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={powerflowLogo} alt="Powerflow Logo" className="h-10" />
          <h1 className="text-xl font-bold">Powerflow</h1>
        </div>

        <Navigation />
      </div>
    </header>
  );
};

export default Header;
