import React, { useState } from "react";
import { motion } from "framer-motion";

import { lateralTransition, stagger } from "../../constants/transitions";
import ModalComponent from "./ModalComponent";

const ContactForm = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm("service_sn4s2zf", "template_o2587mg", e.target)
      .then((response) => {
        console.log("Email sent successfully:", response);
        setModalMessage("Registration Successful!");
        setShowSuccessModal(true);
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.log("Error sending email:", error);
        setModalMessage("Registration Failed! Please try again later.");
        setShowErrorModal(true);
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <motion.h2
        variants={lateralTransition}
        whileInView={lateralTransition.right}
        className="mb-4 font-bold max-md:text-4xl md:text-5xl"
      >
        Contact Us
      </motion.h2>

      <motion.div variants={stagger} className="h-full w-full">
        <form className="" onSubmit={sendEmail} autoComplete="off">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2">
            <motion.div
              variants={lateralTransition}
              whileInView={lateralTransition.right}
              className="relative z-0"
            >
              <input
                required
                type="text"
                id="name"
                name="first_name"
                className="peer block w-full appearance-none border-0 border-b border-gray-50 bg-transparent px-0 py-2.5 text-gray-50 focus:outline-none focus:ring-0 dark:border-gray-300"
                placeholder=" "
              />
              <label className=" absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-gray-50 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 dark:text-gray-300">
                First Name
              </label>
            </motion.div>
            <motion.div
              variants={lateralTransition}
              whileInView={lateralTransition.right}
              className="relative z-0"
            >
              <input
                required
                type="text"
                id="name"
                name="last_name"
                className="peer block w-full appearance-none border-0 border-b border-gray-50 bg-transparent px-0 py-2.5 text-gray-50 focus:outline-none focus:ring-0 dark:border-gray-300"
                placeholder=" "
              />
              <label className=" absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-gray-50 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 dark:text-gray-300">
                Last Name
              </label>
            </motion.div>
            <motion.div
              variants={lateralTransition}
              whileInView={lateralTransition.right}
              className="relative z-0 sm:col-span-2"
            >
              <input
                required
                type="text"
                id="name"
                name="contact_number"
                className="peer block w-full appearance-none border-0 border-b border-gray-50 bg-transparent px-0 py-2.5 text-gray-50 focus:outline-none focus:ring-0 dark:border-gray-300"
                placeholder=" "
              />
              <label className=" absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-gray-50 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 dark:text-gray-300">
                Contact Number
              </label>
            </motion.div>
            <motion.div
              variants={lateralTransition}
              whileInView={lateralTransition.right}
              className="relative z-0 sm:col-span-2"
            >
              <textarea
                required
                id="message"
                name="message"
                rows="3"
                className="peer block w-full appearance-none border-0 border-b border-gray-50 bg-transparent px-0 py-2.5 text-gray-50 focus:outline-none focus:ring-0 dark:border-gray-300"
                placeholder=" "
              ></textarea>
              <label className=" absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-gray-50 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 dark:text-gray-300">
                Your message
              </label>
            </motion.div>

            <motion.button
              variants={lateralTransition}
              whileInView={lateralTransition.right}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="mt-0 w-full rounded-lg bg-red-600 p-3 px-4 text-lg text-gray-50 drop-shadow sm:col-span-2"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </motion.button>
          </div>
        </form>
      </motion.div>

      <ModalComponent
        showModal={showSuccessModal}
        setShowModal={setShowSuccessModal}
        message={modalMessage}
      />

      <ModalComponent
        showModal={showErrorModal}
        setShowModal={setShowErrorModal}
        message={modalMessage}
      />
    </>
  );
};

export default ContactForm;
