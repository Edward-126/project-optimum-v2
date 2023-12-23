<div className=" absolute left-0 top-1/2 w-full -translate-y-1/2 p-4 ">
        <h1 className="mb-3 text-5xl font-bold md:text-7xl">
          Unleash Your Full Potential at <br />{" "}
          <span className="bg-white leading-normal text-black">Optimum</span>{" "}
          Gym.
        </h1>
        <h2 className="text-xl font-extralight md:text-2xl">
          Where Fitness Meets Excellence
        </h2>
        <button className="text-md m-5 rounded-lg border-2 border-red-600 bg-red-600 p-2 px-5 md:p-2 md:px-6 md:text-xl">
          Discover More
        </button>
        <button className="m-5 hidden rounded-lg border-2 border-red-600 bg-transparent p-2 px-6 text-xl transition-all hover:bg-red-600 md:inline">
          Register Now
        </button>
      </div>





      -----------








      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        {programs.map((program, index) => (
          <motion.div variants={stagger} className="lg:col-span-6" key={index}>
            <motion.div
              variants={lateralTransition}
              whileInView={lateralTransition.floatUp}
              className="overflow-hidden rounded-md border border-zinc-50/15 shadow-md transition-all duration-300 hover:border-zinc-50/15 hover:bg-zinc-900"
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








      --------------









      <SwiperSlide>
            <div className="flex h-full w-full items-center justify-center p-4">
              <div className="m-10 flex h-fit max-w-2xl">
                <div className="relative w-56 flex-none">
                  <img
                    src={coach}
                    alt=""
                    className="absolute left-1/2 top-1/2 z-10 h-[120%] w-full -translate-x-1/2 -translate-y-1/2 rounded-lg object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="card-content relative -left-1 flex-auto rounded-r-lg border border-zinc-50/15 p-6 shadow-md transition-all duration-300 hover:border-zinc-50/15 hover:bg-zinc-900">
                  <div className="flex flex-wrap">
                    <h1 className="flex-auto font-medium text-gray-300">
                      CrossFit Level 3 Trainer
                    </h1>
                    <div className="mt-1 w-full flex-none text-3xl font-bold">
                      Daniel Lee
                    </div>
                    <p className="text-gray-300">
                      Passionate about helping individuals achieve their fitness
                      goals through high-intensity interval training (HIIT) and
                      functional movement drills. Certified CrossFit Level 3
                      Trainer with a competitive background in athletics, known
                      for his motivating and results-oriented approach.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>