import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import aboutImage from "../../assets/images/about-img.jpg"; // <-- update your image path

export default function About() {
  // Typing animation
  const fullText = "About Us";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(timer);
    }, 120);
    return () => clearInterval(timer);
  }, []);

  // Parallax scroll
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 300], [0, -60]);

  // Fade in animation
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE with typing animation */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-green-900 tracking-wide">
          {typedText}
          <span className="border-r-4 border-green-800 ml-1 animate-pulse"></span>
        </h2>

        {/* PARALLAX IMAGE + ABOUT TEXT */}
        <div className="grid md:grid-cols-2 gap-14 items-center mb-20">

          {/* Parallax Image */}
          <motion.div style={{ y: yParallax }}>
            <img
              src={aboutImage}
              alt="About us"
              className="rounded-2xl shadow-xl w-full object-cover h-[400px]"
            />
          </motion.div>

          {/* ABOUT TEXT */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We are a digital-first creative agency dedicated to helping brands
              stand out, communicate clearly, and grow with confidence.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our focus is on clean, modern, emotionally engaging designs backed
              by strategy and technical excellence.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you're building, refining, or scaling your brand — we
              deliver work that moves your audience and elevates your business.
            </p>
          </motion.div>
        </div>

        {/* SPLIT: ABOUT / MISSION / VISION */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* ABOUT */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 0.6 }}
            className="bg-green-50 rounded-xl p-8 border-l-4 border-green-700 shadow-sm"
          >
            <h3 className="text-2xl font-bold text-green-800 mb-4">Who We Are</h3>
            <p className="text-gray-700 leading-relaxed">
              A team of creators, strategists, and innovators committed to
              shaping brands that inspire trust and spark connection.
            </p>
          </motion.div>

          {/* MISSION */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 0.7 }}
            className="bg-white rounded-xl p-8 border-l-4 border-green-700 shadow-sm"
          >
            <h3 className="text-2xl font-bold text-green-800 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To create digital experiences that turn attention into action and
              design into measurable growth.
            </p>
          </motion.div>

          {/* VISION */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 0.8 }}
            className="bg-green-50 rounded-xl p-8 border-l-4 border-green-700 shadow-sm"
          >
            <h3 className="text-2xl font-bold text-green-800 mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To empower businesses across Africa and beyond with branding that
              speaks boldly and performs consistently.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
