import React from "react";
import Button from "../common/Button";
import SectionWrapper from "./SectionWrapper";

const ContactCTA = () => {
  return (
    <SectionWrapper
      id="contact"
      className="bg-primary/90 text-white rounded-lg text-center"
    >
      <div className="max-w-2xl mx-auto py-16 px-6 sm:px-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready to Improve Your Safety?
        </h2>
        <p className="text-lg sm:text-xl mb-8">
          Get a free professional assessment for your home or business installations.
        </p>
        <Button variant="secondary" className="mx-auto">
          Contact Us Today
        </Button>
      </div>
    </SectionWrapper>
  );
};

export default ContactCTA;
