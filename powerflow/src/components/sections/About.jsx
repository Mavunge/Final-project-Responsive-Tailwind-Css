import React from "react";
import SectionWrapper from "./SectionWrapper";
import aboutImg from "../../assets/images/about-technician-working.webp";

const About = () => {
  return (
    <SectionWrapper id="about">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <img
          src={aboutImg}
          alt="Technician working on electrical panel"
          className="rounded-lg shadow-lg"
          loading="lazy"
        />

        <div>
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-lg leading-relaxed text-neutral-700">
            At Powerflow, we were built on the belief that safety begins with
            precision. For over a decade, our team has delivered high-quality
            electrical and surveillance installations to homeowners and
            businesses seeking reliability they can trust.
          </p>
          <p className="mt-4 text-neutral-700">
            From rewiring to modern CCTV systems, we combine technical
            excellence with a commitment to outstanding customer care.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
