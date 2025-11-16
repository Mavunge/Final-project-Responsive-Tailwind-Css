import React from "react";
import SectionWrapper from "./SectionWrapper";
import Button from "../common/Button";
import heroImage from "../../assets/images/hero-electrical-installation.webp";

const Hero = () => {
  return (
    <div
      id="home"
      className="w-full h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <SectionWrapper>
        <div className="max-w-xl text-white drop-shadow-xl">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            Wiring Trust. Securing Spaces.
          </h1>
          <p className="mt-4 text-lg lg:text-xl">
            Professional electrical and CCTV installation services tailored for
            safer, smarter homes and businesses.
          </p>

          <div className="mt-6">
            <Button variant="primary">Book a Free Assessment</Button>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Hero;
