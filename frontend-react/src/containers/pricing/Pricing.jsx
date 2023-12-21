import { urlFor, client } from "../../client";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { motion } from "framer-motion";

import { useState, useEffect } from "react";
import { lateralTransition, stagger } from "../../constants/transitions";
import PriceDetailsModal from "../../components/priceModal/PriceDetailsModal";

export default function Pricing() {
  const [pricing, setPricing] = useState([]);
  const [selectedPricing, setSelectedPricing] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const query = '*[_type == "pricing"] | order(order asc)';

    client.fetch(query).then((data) => {
      setPricing(data);
    });
  }, []);

  const openModal = (price) => {
    setSelectedPricing(price);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="pt-16" id="pricing">
      <motion.div variants={stagger} className="text-center">
        <motion.h2
          variants={lateralTransition}
          whileInView={lateralTransition.floatUp}
          className="mb-6 text-7xl font-bold max-md:text-5xl md:text-6xl"
        >
          Our Membership Plans
        </motion.h2>
        <motion.p
          variants={lateralTransition}
          whileInView={lateralTransition.floatUp}
          className="text-xl"
        >
          Choose the plan that suits your fitness goals and lifestyle. Whether
          you're looking for a quick workout, monthly access, or a year-round
          commitment, we have a plan for everyone.
        </motion.p>
      </motion.div>
      <motion.div
        variants={stagger}
        className="mt-8 grid gap-8 lg:grid-cols-12"
      >
        {pricing.map((price, index) => (
          <motion.div
            variants={lateralTransition}
            whileInView={lateralTransition.floatUp}
            className="lg:col-span-3"
            key={index}
          >
            <motion.div className="overflow-hidden rounded-md border border-zinc-50/15 shadow-md transition-all duration-300 hover:border-zinc-50/15 hover:bg-zinc-900">
              <div className="p-4">
                <h2 className="text-2xl font-semibold text-gray-100">
                  {price.name}
                </h2>
                <p className="mt-2 text-base text-gray-300">{price.desc}</p>
                <h3 className="mt-4 text-2xl">
                  Rs.{price.gentscg}.00{" "}
                  <p className="inline-block text-base font-extralight uppercase">
                    {" "}
                    / {price.duration}
                  </p>
                </h3>

                <hr className="my-6 border-t border-zinc-50/15" />
                {price.tags.map((tag, index) => (
                  <p className="mt-2 text-base text-gray-300" key={index}>
                    <IoIosCheckmarkCircle className=" inline-block text-lg text-gray-50" />{" "}
                    {tag}
                  </p>
                ))}

                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="mt-6 rounded-md bg-red-600 p-2 px-4"
                  onClick={() => openModal(price)}
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
      {selectedPricing && (
        <PriceDetailsModal
          isOpen={isModalOpen}
          onClose={closeModal}
          pricingDetails={selectedPricing}
        />
      )}
    </div>
  );
}
