import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const Button = ({ children, variant = "primary", onClick }) => {
  const baseStyles =
    "px-6 py-3 rounded-lg text-sm font-medium transition shadow-md";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90",
    secondary: "bg-neutral-200 text-neutral-900 hover:bg-neutral-300",
    outline:
      "border border-neutral-700 text-neutral-700 hover:bg-neutral-100",
    accent: "bg-accent text-white hover:bg-accent/90",
  };

  return (
    <button onClick={onClick} className={clsx(baseStyles, variants[variant])}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
