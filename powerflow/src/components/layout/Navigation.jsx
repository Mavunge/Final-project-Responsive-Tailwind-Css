import React, { useState } from "react";

const Navigation = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <nav>
      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-8 text-sm font-medium">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="hover:text-primary transition">
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <button onClick={() => setOpen(!open)} aria-label="Toggle Menu">
          ☰
        </button>

        {open && (
          <ul className="absolute right-6 top-16 bg-white shadow-lg p-6 rounded-lg space-y-4 z-50">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="block text-base font-medium hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
