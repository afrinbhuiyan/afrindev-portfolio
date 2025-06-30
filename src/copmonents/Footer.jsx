import { motion } from "framer-motion";
import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-between"
        >
          <div className="flex items-center mb-4 md:mb-0">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-bold text-lg mr-2">
              AfrinDev
            </span>
            <span className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} All rights reserved
            </span>
          </div>

          <div className="flex space-x-4">
            <motion.a
              href="#"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-400 hover:text-purple-400 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="text-xl" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-xl" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-400 hover:text-green-400 transition-colors"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="text-xl" />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 text-center text-gray-500 text-sm"
        >
          <p>Built with React & Tailwind CSS | Designed with passion</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
