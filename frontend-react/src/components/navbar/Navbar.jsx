import { RiMenu3Fill } from "react-icons/ri";
import { motion } from "framer-motion";

import React, { useState } from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const nav = {
  float: {
    y: [-20, -20, 0],
    opacity: [0, 0, 1],
    transition: {
      duration: 0.3,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      variants={nav}
      animate={nav.float}
      className={`relative z-10 bg-gradient-to-b from-black via-50% px-6 py-4 text-gray-50 ${
        isOpen ? "h-auto bg-black" : "h-15"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="text-text"
        >
          <a href="#" className=" text-4xl font-semibold text-gray-50">
            OPTIMUM™
          </a>
        </motion.div>

        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-text focus:outline-none"
          >
            <RiMenu3Fill className="text-2xl text-gray-50" />
          </button>
        </div>

        <div className="hidden lg:flex lg:w-auto lg:items-center">
          <motion.ul
            variants={container}
            initial="hidden"
            animate="show"
            className="space-x-8 lg:flex"
          >
            <motion.li
              variants={item}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <a
                href="#about"
                className="block p-2 transition-all hover:text-red-500"
              >
                About
              </a>
            </motion.li>
            <motion.li
              variants={item}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <a
                href="#programs"
                className="block p-2 transition-all hover:text-red-500"
              >
                Programs
              </a>
            </motion.li>
            <motion.li
              variants={item}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <a
                href="#pricing"
                className="block p-2 transition-all hover:text-red-500"
              >
                Pricing
              </a>
            </motion.li>
            <motion.li
              variants={item}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <a
                href="#testimonial"
                className="block p-2 transition-all hover:text-red-500"
              >
                Testimonial
              </a>
            </motion.li>
            <motion.li
              variants={item}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <a
                href="#contact"
                className="block p-2 transition-all hover:text-red-500"
              >
                Contact Us
              </a>
            </motion.li>
          </motion.ul>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden">
          <motion.ul
            variants={container}
            initial="hidden"
            animate="show"
            className=" text-gray-50"
          >
            <motion.li variants={item}>
              <a
                href="#about"
                className="mt-3 block p-2 transition-all hover:text-red-500"
              >
                About
              </a>
            </motion.li>
            <motion.li variants={item}>
              <a
                href="#programs"
                className="block p-2 transition-all hover:text-red-500"
              >
                Programs
              </a>
            </motion.li>
            <motion.li variants={item}>
              <a
                href="#pricing"
                className="block p-2 transition-all hover:text-red-500"
              >
                Pricing
              </a>
            </motion.li>
            <motion.li variants={item}>
              <a
                href="#testimonial"
                className="block p-2 transition-all hover:text-red-500"
              >
                Testimonial
              </a>
            </motion.li>
            <motion.li variants={item}>
              <a
                href="#contact"
                className="block p-2 transition-all hover:text-red-500"
              >
                Contact Us
              </a>
            </motion.li>
          </motion.ul>
        </div>
      )}
    </motion.div>
  );
};

export default Navbar;
