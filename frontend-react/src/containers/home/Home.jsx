import { motion } from "framer-motion";

import Navbar from "../../components/navbar/Navbar";
import "./Home.css";

const scaleVariants = {
  whileInView: {
    scale: [2, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: [0.43, 0.13, 0.23, 0.96],
      type: "easeInOut",
    },
  },
};

export default function Home() {
  return (
    <div className="home " id="home">
      <div className="relative h-full min-h-[100dvh] w-full bg-gradient-to-t from-transparent via-black via-50% to-transparent ">
        <Navbar />
        <motion.div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-5 text-center md:px-10">
          <motion.div
            variants={scaleVariants}
            animate="whileInView"
            className=""
          >
            <div className=" font-zodiak text-center">
              <h1 className="lenone text-5xl font-extrabold uppercase tracking-wide md:text-9xl">
                Optimum
              </h1>
              <h2 className="font-poppins text-xl font-semibold uppercase leading-relaxed tracking-wide text-red-600 md:text-4xl">
                Power & Fitness
              </h2>
              <h1 className="text-5xl font-extrabold uppercase leading-none tracking-wide md:text-9xl">
                Gym
              </h1>

              <p className=" font-poppins font-light md:text-xl">
                Where Fitness Meets Excellence
              </p>
            </div>

            <div className="mt-6">
              <motion.button
                className=""
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.a
                  href="#programs"
                  className=" mx-4 rounded-md  border-red-600 bg-red-600 p-2 px-4 transition-all hover:bg-red-500 md:text-lg"
                >
                  Discover More
                </motion.a>
              </motion.button>

              <motion.button
                className=""
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="#contact"
                  className=" mx-4 hidden rounded-md border border-red-600 bg-black/20 p-2 px-4 transition-all hover:bg-red-600 md:inline md:text-lg"
                >
                  Register Now
                </motion.a>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
