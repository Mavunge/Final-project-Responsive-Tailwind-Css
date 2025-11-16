import React from "react";
import SectionWrapper from "./SectionWrapper";
import Card from "../common/Card";

import feature1 from "../../assets/images/feature-smart-wiring.webp";
import feature2 from "../../assets/images/feature-cctv-security.webp";
import feature3 from "../../assets/images/feature-maintenance.webp";

const Features = () => {
  const items = [
    {
      title: "Smart Electrical Installations",
      desc: "Precision wiring and modern electrical solutions built for safety, efficiency, and future expansion.",
      image: feature1,
    },
    {
      title: "Advanced CCTV Systems",
      desc: "High-definition surveillance systems designed to protect your property and enhance visibility.",
      image: feature2,
    },
    {
      title: "Maintenance & Inspections",
      desc: "Routine servicing to prevent downtime, reduce risks, and extend equipment lifespan.",
      image: feature3,
    },
  ];

  return (
    <SectionWrapper id="services">
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
        What We Offer
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Features;
