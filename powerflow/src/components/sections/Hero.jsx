import React from "react";
import { motion } from "framer-motion";
import Button from "../common/Button";
import heroImage from "../../assets/images/hero-electrical-installation.JPG";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center transition-colors duration-700"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Main content */}
      <div className="relative z-10 w-full text-center text-white px-6">

        {/* Title */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-orange-300 drop-shadow-[0_0_20px_#ff8800]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Powering Homes. Protecting Businesses.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-4 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed text-white/90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Reliable electrical installations, smart CCTV systems, and preventive
          maintenance designed to secure what matters most.
        </motion.p>

        {/* Mission & Vision */}
        <motion.div
          className="mt-8 flex flex-col sm:flex-row justify-center gap-4 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="bg-white/10 backdrop-blur-md border border-orange-400/30 text-white py-3 px-6 rounded-lg shadow-[0_0_20px_#ff880055]">
            ✔ Vision: A safer, smarter Africa powered by innovation.
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-orange-400/30 text-white py-3 px-6 rounded-lg shadow-[0_0_20px_#ff880055]">
            ✔ Mission: Precision. Safety. Excellence.
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Button
            variant="primary"
            className="px-8 py-4 text-lg bg-orange-500/30 border border-orange-400/40 shadow-[0_0_20px_#ff8800aa] hover:shadow-[0_0_30px_#ff8800]"
          >
            Book a Free Assessment
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
