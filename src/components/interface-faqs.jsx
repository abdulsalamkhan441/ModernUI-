import { useState } from "react";
import { motion } from "framer-motion";

export default function InterfaceFAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-[#5127a3] to-black text-white">
      <motion.section
        className="px-4 md:px-16 pt-16 pb-8 md:pb-20 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-semibold mb-4">Intuitive interface</h2>
        <p className="text-md md:text-lg text-[#C7A1D1] max-w-2xl mx-auto">
          Celebrate the joy of accomplishment with an app designed to track your progress,
          motivate your efforts, and celebrate your successes, one task at a time.
        </p>
        <motion.div
          className="mt-12 overflow-hidden shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img 
            src="/assets/image1.png" 
            alt="Interface Screenshot"
            className="w-full object-cover"
          />
        </motion.div>
      </motion.section>

      <motion.section
        className="px-4 md:px-16 pt-12 pb-20 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">Frequently asked questions</h2>
        <div className="max-w-3xl mx-auto">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="border-b border-[#3B124D] py-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center text-left text-lg md:text-xl font-medium text-white focus:outline-none"
              >
                <span>How does the pricing work for teams</span>
                <span className="text-[#C7A1D1]">{openIndex === i ? "-" : "+"}</span>
              </button>
              {openIndex === i && (
                <div className="mt-3 text-sm md:text-base text-[#C7A1D1]">
                  Our pricing is flexible based on your team's needs. You can scale as you grow.
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
