import { urlFor, client } from "../../client";
import { motion } from "framer-motion";

import { useState, useEffect } from "react";
import { lateralTransition, stagger } from "../../constants/transitions";

export default function About() {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    const query = '*[_type == "about"]';

    client.fetch(query).then((data) => {
      setAbout(data);
    });
  }, []);

  return (
    <div id="about" className="pt-10">
      {about.map((abouts, index) => (
        <motion.div
          variants={stagger}
          className="grid gap-8 lg:grid-cols-12"
          key={index}
        >
          <div className="col-span-6 lg:col-span-5">
            <motion.div
              variants={lateralTransition}
              whileInView={lateralTransition.left}
              className="relative h-fit w-full"
            >
              <img
                src={urlFor(abouts.imgUrl)}
                alt={abouts.name}
                loading="lazy"
                className="w-full rounded-lg border-2 border-gray-800"
              />
              <div className=" absolute bottom-0 left-0 w-full rounded-b-lg bg-black/60">
                <h1 className="my-4 text-center text-lg">{abouts.name}</h1>
              </div>
            </motion.div>
          </div>
          <div className="col-span-6 lg:col-span-7">
            <motion.div
              variants={stagger}
              className="1 sticky top-10 mt-4 h-fit overflow-hidden lg:ml-8 lg:mt-0"
            >
              <motion.h1
                variants={lateralTransition}
                whileInView={lateralTransition.right}
                className="mb-6 text-7xl font-bold max-md:text-5xl md:text-6xl"
              >
                About <span className=" text-red-600">{abouts.name}</span>
              </motion.h1>
              <motion.p
                variants={lateralTransition}
                whileInView={lateralTransition.right}
                className="text-xl"
              >
                {abouts.about}
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
