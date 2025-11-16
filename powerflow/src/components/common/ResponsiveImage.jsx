import React from "react";
import PropTypes from "prop-types";

const ResponsiveImage = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="w-full h-auto object-cover"
    />
  );
};

ResponsiveImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ResponsiveImage;
