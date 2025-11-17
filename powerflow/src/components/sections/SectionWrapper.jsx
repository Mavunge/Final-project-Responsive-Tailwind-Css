import React from "react";

const SectionWrapper = ({ children, id, className = "" }) => {
  return (
    <section
      id={id}
      className={`scroll-mt-28 py-20 my-16 ${className}`} 
    >
      <div className="max-w-7xl mx-auto px-6">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
