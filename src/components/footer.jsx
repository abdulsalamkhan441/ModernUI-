import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faXTwitter,
  faInstagram,
  faPinterest,
  faLinkedin,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

library.add(
  faXTwitter,
  faInstagram,
  faPinterest,
  faLinkedin,
  faTiktok,
  faYoutube
);

export default function GetAccessSection() {
  return (
    <motion.section
      className="bg-black text-white px-4 md:px-16 py-5 relative overflow-hidden"
      style={{
        backgroundImage: `url(../../public/assets/Image2.png)`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto items-center gap-12">
        <motion.div
          className="text-center flex flex-col justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get instant access
          </h2>
          <p className="text-[#C7A1D1] mb-6 max-w-md">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
          <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="name@email.com"
              className="px-4 py-2 rounded-md bg-[#2A2A2A] placeholder-gray-400 text-white focus:outline-none w-full sm:w-auto"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 rounded-md bg-white text-black font-semibold hover:bg-gray-200"
            >
              Get access
            </motion.button>
          </form>
        </motion.div>

        <div className="w-32 md:w-48 mx-auto md:mx-0 hidden md:block"></div>
      </div>
      <motion.footer
        className="mt-20 border-t border-[#333] pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div>© 2024 Your Company, Inc. All rights reserved</div>
        <div className="flex justify-center gap-4 text-white text-lg">
          <FontAwesomeIcon icon={["fab", "x-twitter"]} />
          <FontAwesomeIcon icon={["fab", "instagram"]} />
          <FontAwesomeIcon icon={["fab", "pinterest"]} />
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
          <FontAwesomeIcon icon={["fab", "tiktok"]} />
          <FontAwesomeIcon icon={["fab", "youtube"]} />
        </div>
      </motion.footer>
    </motion.section>
  );
}
