import React from "react";

const SectionWrapper = ({ children, id }) => {
  return (
    <section id={id} className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
      {children}
    </section>
  );
};

export default SectionWrapper;
