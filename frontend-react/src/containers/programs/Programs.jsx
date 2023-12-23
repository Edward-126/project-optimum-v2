import { urlFor, client } from "../../client";
import { motion } from "framer-motion";

import { useState, useEffect } from "react";
import { lateralTransition, stagger } from "../../constants/transitions";

export default function Programs() {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    const query = '*[_type == "programs"] | order(order asc)';

    client.fetch(query).then((data) => {
      setPrograms(data);
    });
  }, []);

  return (
    <div className="pt-16" id="programs">
      <motion.div variants={stagger} className="">
        <motion.h2
          variants={lateralTransition}
          whileInView={lateralTransition.floatUp}
          className="mb-6 text-7xl font-bold max-md:text-5xl md:text-6xl"
        >
          Our Programs
        </motion.h2>
        <motion.p
          variants={lateralTransition}
          whileInView={lateralTransition.floatUp}
          className="text-xl"
        >
          At Optimum Gym, embark on a transformative fitness journey with
          specialized programs like dynamic CrossFit on Sundays, calorie-burning
          HIIT Blast on Thursdays, and muscle-sculpting Anaerobic training on
          Tuesdays. Led by seasoned trainers, each session is tailored to meet
          unique needs, whether you're a seasoned athlete or beginner. Daily
          bodybuilding sessions, guided by qualified coaches, add a
          comprehensive dimension to the fitness experience.
        </motion.p>
      </motion.div>
      <div className="columns-1 gap-8 lg:columns-2">
        {programs.map((program, index) => (
          <motion.div variants={stagger} className="lg:col-span-6" key={index}>
            <motion.div
              variants={lateralTransition}
              whileInView={lateralTransition.floatUp}
              className="my-8 overflow-hidden rounded-md border border-zinc-50/15 shadow-md transition-all duration-300 hover:border-zinc-50/15 hover:bg-zinc-900"
            >
              <img
                src={urlFor(program.imgUrl)}
                alt={program.name}
                loading="lazy"
                className="h-64 w-full object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-100">
                  {program.name}
                </h2>
                <p className="mt-2 text-base text-gray-300">{program.desc}</p>
                <span className="mt-4 inline-block rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-700">
                  {program.day}
                </span>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
