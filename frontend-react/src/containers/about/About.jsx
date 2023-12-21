import { urlFor, client } from "../../client";

import { useState, useEffect } from "react";

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
        <div className="grid gap-8 lg:grid-cols-12" key={index}>
          <div className="col-span-6 lg:col-span-5">
            <div className="relative h-fit w-full">
              <img
                src={urlFor(abouts.imgUrl)}
                alt={abouts.name}
                className="w-full rounded-md"
              />
              <div className=" absolute bottom-0 left-0 w-full rounded-b-md bg-black/60">
                <h1 className="my-4 text-center text-lg">{abouts.name}</h1>
              </div>
            </div>
          </div>
          <div className="col-span-6 lg:col-span-7">
            <div className="1 sticky top-10 mt-4 h-fit overflow-hidden lg:ml-8 lg:mt-0">
              <h1 className="mb-6 text-7xl font-bold max-md:text-5xl md:text-6xl">
                About <span className=" text-red-600">Mr.Manoj Perera</span>
              </h1>
              <p className="text-xl">{abouts.about}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
