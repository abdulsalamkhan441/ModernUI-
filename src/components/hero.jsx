import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const features = [
    {
      title: "Integration ecosystem",
      description:
        "Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place.",
    },
    {
      title: "Goal setting and tracking",
      description:
        "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
    },
    {
      title: "Secure data encryption",
      description:
        "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
    },
  ];

  return (
    <div>
      <section className="w-full min-h-screen flex flex-col justify-center items-center text-center relative px-4">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#120524] via-black to-[#5127a3]"></div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20 mb-4"
        >
          <button className="bg-transparent text-white/50 text-base lg:text-sm md:text-xs px-4 py-2 rounded-lg border border-white/10 hover:bg-white/10 transition">
            Version 2.0 is here <span className="text-white ml-1"> Read more →</span>
          </button>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text lg:text-9xl/26 md:text-8xl/22 text-7xl/16 font-bold mb-8 height"
        >
          One Task
          <br />at a Time
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white/80 max-w-lg mx-auto text-sm md:text-lg lg:text-xl mb-12"
        >
          Celebrate the joy of accomplishment with an app designed to track your
          progress, motivate your efforts, and celebrate your successes.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-black text-sm md:text-md lg:text-lg font-medium py-2 px-4 rounded-lg shadow-md hover:bg-gray-100 transition"
        >
          Get for free
        </motion.button>
      </section>

      <section className="w-full min-h-screen flex justify-items-center flex-col items-center bg-black text-white py-20 px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-gray-400 text-lg mb-6">
            Trusted by the world’s most innovative teams
          </p>
          <div className="flex flex-wrap justify-center items-center gap-20 mb-12 opacity-70">
            {["icon1.png", "icon2.png", "icon3.png", "icon4.png", "icon5.png", "icon6.png"].map(
              (icon, idx) => (
                <motion.img
                  key={idx}
                  src={`/assets/${icon}`}
                  alt={`Logo ${idx + 1}`}
                  className="h-8 w-auto object-contain"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                />
              )
            )}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything you need
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto text-lg">
            Enjoy customizable lists, team work tools, and smart tracking all in
            one place. Set tasks, get reminders, and see your progress simply and
            quickly.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="bg-[#0F0F0F] border border-gray-800 rounded-xl p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-10 h-10 bg-white rounded-md mx-auto mb-4 flex justify-center items-center">
                <img src="/assets/Icon7.png" alt="" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-base text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
