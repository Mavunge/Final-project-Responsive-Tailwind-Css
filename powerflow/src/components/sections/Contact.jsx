import React from "react";
import SectionWrapper from "./SectionWrapper.jsx";

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

        <p className="text-neutral-700 mb-8">
          Get in touch with our team for electrical installations, repairs, or
          consultations. Fill out the form below and we’ll respond shortly.
        </p>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium">Full Name</label>
            <input
              type="text"
              className="w-full p-3 border border-neutral-300 rounded-lg"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Email Address</label>
            <input
              type="email"
              className="w-full p-3 border border-neutral-300 rounded-lg"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              rows="5"
              className="w-full p-3 border border-neutral-300 rounded-lg"
              placeholder="How can we help?"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </SectionWrapper>
  );
}
