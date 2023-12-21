import { motion } from "framer-motion";

const ModalComponent = ({ showModal, setShowModal, message }) => {
  return (
    showModal && (
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
        <div className="relative mx-auto my-6 w-auto max-w-3xl p-4 text-center">
          <div className="fixed inset-0 bg-black bg-opacity-70"></div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="relative w-full max-w-lg rounded-md border border-zinc-50/15 bg-zinc-950 p-8"
          >
            <h3 className="text-2xl font-semibold">{message}</h3>
            <p className="text-lg">
              We will get back to you as soon as possible
            </p>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={() => setShowModal(false)}
              className=" mt-4 w-full  rounded-lg bg-red-600 p-2 px-4 text-gray-50 drop-shadow "
            >
              Close
            </motion.button>
          </motion.div>
        </div>
      </div>
    )
  );
};

export default ModalComponent;
