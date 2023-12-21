import { urlFor, client } from "../../client";

import { useState, useEffect } from "react";

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
      <div className="">
        <h2 className="mb-6 text-7xl font-bold max-md:text-5xl md:text-6xl">
          Our Programs
        </h2>
        <p className="text-xl">
          Experience transformation at Optimum Gym with our specialized
          programs. Sundays feature dynamic CrossFit, Thursdays bring HIIT
          Blast's calorie-burning intensity, and Tuesdays focus on
          muscle-sculpting Anaerobic training. Led by expert trainers, each
          session is tailored to your fitness journey, whether you're a seasoned
          athlete or a beginner. Join us on Tuesday, Thursday, and Sunday to
          achieve your unique fitness goals.
        </p>
      </div>
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        {programs.map((program, index) => (
          <div className="lg:col-span-6" key={index}>
            <div className="overflow-hidden rounded-md border border-zinc-50/15 shadow-md transition-all duration-300 hover:border-zinc-50/15 hover:bg-zinc-900">
              <img
                src={urlFor(program.imgUrl)}
                alt={program.name}
                className="h-64 w-full object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-100">
                  {program.name}
                </h2>
                <p className="mt-2 text-base text-gray-300">{program.desc}</p>
                <span className="mt-4 inline-block rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-700">
                  Every {program.day}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
