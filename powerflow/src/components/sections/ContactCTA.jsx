import React from "react";
import SectionWrapper from "./SectionWrapper";
import Button from "../common/Button";

const ContactCTA = () => {
  return (
    <SectionWrapper id="contact">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Ready to Improve Your Safety?</h2>
        <p className="text-neutral-700 mb-6">
          Get a free professional assessment for your home or business
          installations.
        </p>
        <Button variant="accent">Contact Us Today</Button>
      </div>
    </SectionWrapper>
  );
};

export default ContactCTA;
