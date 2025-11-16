import React from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import About from "./components/sections/About";
import ContactCTA from "./components/sections/ContactCTA";

function App() {
  return (
    <div className="bg-neutral-50 text-neutral-900">
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
