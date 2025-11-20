import React from "react";
import SectionWrapper from "./SectionWrapper";

import smartElectrical from "../../assets/images/smart-electrical.jpg";
import advancedCctv from "../../assets/images/advanced-cctv.jpg";
import maintenanceInspection from "../../assets/images/maintenance-inspection.jpg";

const services = [
  {
    title: "Smart Electrical Installations",
    description:
      "Upgrade your home or business with precision electrical systems built for safety, efficiency, and long-term reliability. Our certified technicians deliver clean installations using modern standards and high-quality components.",
    image: smartElectrical,
  },
  {
    title: "Advanced CCTV Systems",
    description:
      "Secure your property with high-definition CCTV solutions offering crystal-clear footage, wide-area coverage, and remote monitoring. We design and install surveillance systems that enhance visibility and deter intruders 24/7.",
    image: advancedCctv,
  },
  {
    title: "Maintenance & Inspections",
    description:
      "Avoid unexpected failures with routine inspections and proactive maintenance. We help you prevent hazards, improve system performance, and extend the lifespan of all electrical and security installations.",
    image: maintenanceInspection,
  },
];

const Services = () => {
  return (
    <SectionWrapper id="services">
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3 tracking-tight">
          What We Offer
        </h2>
        <p className="text-neutral-700 max-w-2xl mx-auto text-lg">
          Reliable, modern, and affordable electrical & security solutions tailored
          for homes, offices, and commercial establishments.
        </p>
      </div>

      <div className="grid gap-10 sm:gap-12 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
          >
            <div className="h-60 sm:h-64 w-full overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>

            <div className="p-7 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-neutral-700 text-base leading-relaxed flex-1">
                {service.description}
              </p>

              <div className="mt-6">
                <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                  Learn More →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Services;
