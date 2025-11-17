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
    <nav className="relative">
      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-10 text-sm sm:text-base font-medium items-center">
        {links.map((link, index) => (
          <li key={index} className="relative group cursor-pointer">
            <a
              href={link.href}
              className="
                text-neutral-300 
                transition-all duration-300 
                group-hover:text-cyan-400 
                group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.9)]
                group-hover:scale-110
              "
            >
              {link.label}
            </a>

            {/* Neon Underline */}
            <span
              className="
                absolute left-0 -bottom-1 h-[2px] w-0 
                bg-gradient-to-r from-cyan-400 to-purple-500
                group-hover:w-full 
                transition-all duration-500
              "
            ></span>

            {/* Neon Glow Aura */}
            <span
              className="
                absolute inset-0 -z-10 opacity-0 
                group-hover:opacity-40
                transition-all duration-500
                blur-xl 
                bg-gradient-to-r from-cyan-400 to-purple-500
              "
            ></span>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="text-3xl text-cyan-400 focus:outline-none"
        >
          ☰
        </button>

        {open && (
          <>
            <div className="absolute right-2 top-12 w-56 bg-neutral-900 shadow-lg border border-cyan-500/30 rounded-lg p-4 flex flex-col gap-3 z-50">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="
                    text-base font-medium 
                    text-neutral-200 
                    hover:text-cyan-400 
                    hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.9)]
                    transition-all duration-300
                  "
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div
              className="fixed inset-0 bg-black/40 z-40"
              onClick={() => setOpen(false)}
            />
          </>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
