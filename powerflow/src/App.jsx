import React from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 transition-colors duration-700">
      <Header />

      <main className="pt-24">
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
