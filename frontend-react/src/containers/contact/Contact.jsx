import { IoLogoWhatsapp } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import ContactForm from "../../components/contactForm/ContactForm";

export default function Contact() {
  return (
    <div id="contact" className="pt-16">
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 className="mb-4 font-bold max-md:text-4xl md:text-5xl">
            Our Socials
          </h2>
          <div className="w-full">
            <p className="mb-6 text-xl">
              <FaPhoneAlt className=" inline-block text-red-600" />{" "}
              <a href="tel:011-2411161">011-2411161</a> <br />
              <IoLogoWhatsapp className=" inline-block text-red-600" />{" "}
              <a href="tel:077-3933114">077-3933114</a> <br />
              <MdEmail className=" inline-block text-red-600" />{" "}
              <a href="mailto:optimumgym126@gmail.com">
                optimumgym126@gmail.com
              </a>
            </p>
            <iframe
              className="aspect-video w-full rounded-md"
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.732666690411!2d79.91003937427182!3d6.9225271930771415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259ddc63081f7%3A0x253b6738ce307369!2sOptimum%20Power%20%26%20Fitness%20Gym!5e0!3m2!1sen!2slk!4v1700899473448!5m2!1sen!2slk"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
