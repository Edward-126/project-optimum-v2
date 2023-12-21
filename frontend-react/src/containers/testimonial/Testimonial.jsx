import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { urlFor, client } from "../../client";
import { FaQuoteLeft } from "react-icons/fa";

import "swiper/css";

import { useState, useEffect } from "react";

export default function Testimonial() {
  const [testimonial, setTestimonial] = useState([]);

  useEffect(() => {
    const query = '*[_type == "testimonial"] | order(order asc)';

    client.fetch(query).then((data) => {
      setTestimonial(data);
    });
  }, []);

  return (
    <div id="testimonial" className="pt-16">
      <div className="text-center">
        <h2 className="mb-6 text-7xl font-bold max-md:text-4xl md:text-5xl">
          What People Say About Us
        </h2>
      </div>
      <div className="h-full w-full">
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
          {testimonial.map((testimonials, index) => (
            <SwiperSlide key={index}>
              <div className="flex h-full w-full items-center justify-center p-4">
                <div className="max-w-screen-md rounded-md border border-zinc-50/15 p-6 shadow-md transition-all duration-300 hover:border-zinc-50/15 hover:bg-zinc-900">
                  <h1 className="my-4 text-4xl">
                    <FaQuoteLeft />
                  </h1>
                  <p className="mb-4 text-lg text-gray-50">
                    {testimonials.testimonial}
                  </p>
                  <div className="mt-4 flex items-center">
                    <img
                      className="h-20 w-20 rounded-full"
                      src={urlFor(testimonials.imgUrl)}
                      alt={testimonials.name}
                    />
                    <div className="ml-4">
                      <p className="text-lg font-bold capitalize text-gray-300">
                        {testimonials.name}
                      </p>
                      <p className="text-sm  capitalize text-gray-500">
                        {testimonials.position}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
