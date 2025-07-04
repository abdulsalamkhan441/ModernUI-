import React from "react"
import { motion } from "framer-motion"

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-4 md:px-8 py-4 absolute top-0 z-50">
      <motion.div 
        className="flex items-center gap-2"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <motion.img
          src="/assets/logo.png"
          alt="Logo"
          className="w-10 md:w-12"
          whileHover={{ rotate: 5 }}
          transition={{ duration: 0.3 }}
        />
        <span className="text-white text-sm md:text-md">made by</span>
        <span className="text-white font-semibold text-sm md:text-md">ASK</span>
      </motion.div>
      <motion.button
        className="bg-white text-black font-medium py-1.5 px-4 rounded-lg text-sm md:text-md shadow-md hover:bg-gray-100 transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 250 }}
      >
        Get for free
      </motion.button>
    </nav>
  )
}
