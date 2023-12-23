import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { urlFor, client } from "../../client";
import { motion } from "framer-motion";

import "swiper/css";

import { lateralTransition, stagger } from "../../constants/transitions";
import coach from "../../assets/coachV2.jpg";
import { useState, useEffect } from "react";

export default function Coach() {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    const query = '*[_type == "trainers"] | order(order asc)';

    client.fetch(query).then((data) => {
      setTrainers(data);
    });
  }, []);

  return (
    <div className="pt-16" id="coach">
      <motion.div variants={stagger} className="">
        <motion.h2
          variants={lateralTransition}
          whileInView={lateralTransition.floatUp}
          className="mb-6 text-7xl font-bold max-md:text-5xl md:text-6xl"
        >
          Our Trainers
        </motion.h2>
        <motion.p
          variants={lateralTransition}
          whileInView={lateralTransition.floatUp}
          className="text-xl"
        >
          At Optimum Gym, discover the expertise of our nationally qualified
          trainers committed to sculpting your fitness journey. Each trainer at
          Optimum Gym possesses unique skills and a dedication to personalized
          training.
        </motion.p>
      </motion.div>

      <motion.div
        variants={lateralTransition}
        whileInView={lateralTransition.floatUp}
        className="h-full w-full"
      >
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          speed={600}
          effect={"fade"}
          fadeEffect={{
            crossFade: true,
          }}
        >
          {trainers.map((trainer, index) => (
            <SwiperSlide key={index}>
              <div className="flex h-full w-full items-center justify-center p-4">
                <div class="flex flex-col rounded-md p-4 shadow-md hover:shadow-lg md:flex-row lg:w-2/3">
                  <img
                    src={urlFor(trainer.imgUrl)}
                    alt={trainer.name}
                    class="h-72 w-full rounded-md object-cover md:w-1/2"
                    loading="lazy"
                  />
                  <div class="flex flex-col justify-center space-y-1 p-4 md:p-6">
                    <h1 className="text-sm font-light text-gray-300">
                      {trainer.position}
                    </h1>
                    <h3 class="text-3xl font-semibold">{trainer.name}</h3>
                    <p class="text-base">{trainer.desc}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
}
