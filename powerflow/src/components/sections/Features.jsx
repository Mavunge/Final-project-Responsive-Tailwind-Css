import React from "react";
import SectionWrapper from "./SectionWrapper";
import smartElectrical from "../../assets/images/smart-electrical.jpg";
import advancedCCTV from "../../assets/images/advaced-cctv.jpg";
import maintenance from "../../assets/images/maintenance-inspection.jpg";

const features = [
  {
    title: "Smart Electrical Installations",
    description:
      "Precision wiring and modern electrical solutions built for safety, efficiency, and future expansion.",
    image: smartElectrical,
  },
  {
    title: "Advanced CCTV Systems",
    description:
      "High-definition surveillance systems designed to protect your property and enhance visibility.",
    image: advancedCCTV,
  },
  {
    title: "Maintenance & Inspections",
    description:
      "Routine servicing to prevent downtime, reduce risks, and extend equipment lifespan.",
    image: maintenance,
  },
];

const Features = () => {
  return (
    <SectionWrapper id="services">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold">What We Offer</h2>
      </div>

      <div className="grid gap-8 sm:gap-10 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-56 sm:h-64 object-cover"
              loading="lazy"
            />
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-neutral-700 flex-1">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Features;
