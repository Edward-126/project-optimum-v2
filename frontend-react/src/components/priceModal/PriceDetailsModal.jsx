import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";

const PriceDetailsModal = ({ isOpen, onClose, pricingDetails }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-70">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="relative w-full max-w-lg rounded border border-zinc-50/15 bg-zinc-950 p-8">
          <h3 className="text-2xl font-semibold">{pricingDetails.name}</h3>
          <p>{pricingDetails.desc}</p>
          <hr className="my-5 border-t border-zinc-50/15" />
          <p className="mb-4 text-lg font-semibold">
            Admission Fee :{" "}
            <p className="inline-block font-normal">
              Rs.{pricingDetails.admission}.00
            </p>
          </p>
          <p className="text-lg font-semibold">
            Gents (Gym Only) :{" "}
            <p className="inline-block font-normal">
              Rs.{pricingDetails.gentsg}.00
            </p>
          </p>
          <p className="text-lg font-semibold">
            Gents (Cardio & Gym) :{" "}
            <p className="inline-block font-normal">
              Rs.{pricingDetails.gentscg}.00
            </p>
          </p>
          <p className="mt-4 text-lg font-semibold">
            Ladies (Cardio & Gym) :{" "}
            <p className="inline-block font-normal">
              Rs.{pricingDetails.ladies}.00
            </p>
          </p>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            onClick={onClose}
            className=" mt-4 w-full  rounded-lg bg-red-600 p-2 px-4 text-gray-50 drop-shadow "
          >
            Close
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default PriceDetailsModal;
