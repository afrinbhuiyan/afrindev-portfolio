import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';
import { FaArrowUp } from 'react-icons/fa';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="fixed bottom-8 right-8 z-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <div className="relative group">
            {/* Main button with cyber-style gradient */}
            <motion.div
              className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 shadow-lg flex items-center justify-center relative overflow-hidden"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Animated arrow */}
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut"
                }}
              >
                <FaArrowUp className="text-white text-xl" />
              </motion.div>

              {/* Pulsing ring effect */}
              <motion.span
                className="absolute inset-0 border-2 border-purple-400 rounded-full opacity-0"
                animate={{
                  scale: [1, 1.3],
                  opacity: [0, 0.5, 0]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeOut"
                }}
              />
            </motion.div>

            {/* Cyber-style corner accents */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-purple-400 opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-blue-400 opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-blue-400 opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-purple-400 opacity-80 group-hover:opacity-100 transition-opacity" />

            {/* Glow effect on hover */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400/30 to-blue-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1.2 }}
              transition={{
                repeat: Infinity,
                repeatType: 'reverse',
                duration: 1.5,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;