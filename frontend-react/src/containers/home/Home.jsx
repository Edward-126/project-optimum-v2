import { motion } from "framer-motion";

import Navbar from "../../components/navbar/Navbar";
import { lateralTransition, stagger } from "../../constants/transitions";
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
            <h1 className="mb-3 text-5xl font-bold md:text-7xl">
              Unleash Your Full Potential at <br />{" "}
              <span className="bg-white leading-normal text-black">
                Optimum
              </span>{" "}
              Gym.
            </h1>
            <h2 className="text-xl font-extralight md:text-2xl">
              Where Fitness Meets Excellence
            </h2>
            <div className="mt-6">
              <motion.button
                className=""
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.a
                  href=""
                  className="text-md mr-5 rounded-lg border-2 border-red-600
             bg-red-600 p-2 px-5 transition-all hover:border-red-500 hover:bg-red-500 md:p-2 md:px-6 md:text-xl"
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
                  className="m-5 hidden rounded-lg border-2 border-red-600 bg-transparent p-2 px-6 text-xl transition-all hover:bg-red-600 md:inline"
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
