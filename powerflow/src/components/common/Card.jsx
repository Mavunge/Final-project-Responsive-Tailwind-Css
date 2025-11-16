import React from "react";
import PropTypes from "prop-types";

const Card = ({ title, desc, image }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
      <img
        src={image}
        alt={title}
        className="rounded-lg mb-4 h-40 w-full object-cover"
        loading="lazy"
      />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-neutral-700">{desc}</p>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
