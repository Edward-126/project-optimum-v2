import { RiMenu3Fill } from "react-icons/ri";

import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`px-6 py-4 ${isOpen ? "h-auto" : "h-15"}`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-text">
          <a href="#" className="text-3xl font-semibold">
            OPTIMUM™
          </a>
        </div>

        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-text focus:outline-none"
          >
            <RiMenu3Fill className="text-2xl" />
          </button>
        </div>

        <div className="hidden lg:flex lg:items-center lg:w-auto">
          <ul className="lg:flex space-x-4">
            <li>
              <a href="#about" className="block p-2">
                About
              </a>
            </li>
            <li>
              <a href="#programs" className="block p-2">
                Programs
              </a>
            </li>
            <li>
              <a href="#pricing" className="block p-2">
                Pricing
              </a>
            </li>
            <li>
              <a href="#testimonial" className="block p-2">
                Testimonial
              </a>
            </li>
            <li>
              <a href="#contact" className="block p-2">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden">
          <ul className="text-text">
            <li>
              <a href="#about" className="block p-2">
                About
              </a>
            </li>
            <li>
              <a href="#programs" className="block p-2">
                Programs
              </a>
            </li>
            <li>
              <a href="#pricing" className="block p-2">
                Pricing
              </a>
            </li>
            <li>
              <a href="#testimonial" className="block p-2">
                Testimonial
              </a>
            </li>
            <li>
              <a href="#contact" className="block p-2">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
