
import React, { useState } from "react";
import { Power } from "lucide-react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";

function App() {
  const [lightsOn, setLightsOn] = useState(false);

  return (
    <div
      className={`
        min-h-screen transition-colors duration-700
        ${lightsOn ? "bg-neutral-50 text-neutral-900" : "bg-black text-red-600"}
      `}
    >
      {/* -------------------------------------------------------------- */}
      {/* FULLSCREEN INTRO SWITCH — Only visible when lights are OFF */}
      {/* -------------------------------------------------------------- */}
      {!lightsOn && (
        <div className="fixed inset-0 flex flex-col items-center justify-center gap-6 bg-black z-[9999]">
          
          {/* Instruction Text */}
          <p className="text-red-600 text-xl tracking-wide font-medium animate-pulse">
            Click <span className="font-bold">LET THERE BE LIGHT</span> to view the site
          </p>

          {/* Button */}
          <button
            onClick={() => setLightsOn(true)}
            className="
              px-10 py-5 text-3xl font-extrabold tracking-wide
              border-4 border-red-600 text-red-600 
              rounded-full 
              hover:bg-red-600 hover:text-black 
              transition-transform duration-500 
              hover:scale-110
              animate-pulse
            "
          >
            LET THERE BE LIGHT
          </button>
        </div>
      )}

      {/* -------------------------------------------------------------- */}
      {/* FLOATING NEON POWER BUTTON (BOTTOM-RIGHT) */}
      {/* -------------------------------------------------------------- */}
      {lightsOn && (
        <button
          onClick={() => setLightsOn(!lightsOn)}
          className="
            fixed bottom-6 right-6 z-[9998]
            w-16 h-16 flex items-center justify-center
            rounded-full 
            bg-black/80 backdrop-blur-md
            border-2 border-blue-500 
            shadow-[0_0_20px_6px_rgba(0,145,255,0.6)]
            hover:shadow-[0_0_30px_10px_rgba(0,145,255,0.9)]
            transition-all duration-500
            animate-[pulse_2s_ease-in-out_infinite]
          "
        >
          <Power className="text-blue-400" size={32} />
        </button>
      )}

      {/* -------------------------------------------------------------- */}
      {/* MAIN SITE CONTENT — Fades in smoothly after switch */}
      {/* -------------------------------------------------------------- */}
      <div
        className={`
          transition-opacity duration-[1500ms]
          ${lightsOn ? "opacity-100" : "opacity-0"}
        `}
      >
        <Header />

        <main className="pt-24">
          <Hero />
          <Services />
          <About />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
