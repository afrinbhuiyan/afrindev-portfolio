import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Skills", path: "#skills" },
    { name: "Project", path: "#projects" },
    { name: "Contact", path: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`fixed w-full z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "bg-gray-900/90 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <Logo />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.path}
                className="relative font-medium text-gray-300 hover:text-white transition-colors"
                whileHover={{ y: -2 }}
              >
                {item.name}
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-4">
            {/* Contact button */}
            <motion.div
              className="relative hidden md:block"
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              {/* Floating particles that appear on hover */}
              <motion.div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <motion.span
                    key={i}
                    className="absolute bg-white rounded-full"
                    style={{
                      width: Math.random() * 4 + 2,
                      height: Math.random() * 4 + 2,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    variants={{
                      rest: { opacity: 0 },
                      hover: {
                        opacity: [0, 0.8, 0],
                        y: [0, -Math.random() * 30 - 10],
                        x: [0, (Math.random() - 0.5) * 20],
                        transition: {
                          duration: 1.5,
                          delay: i * 0.1,
                          repeat: Infinity,
                          repeatDelay: 2,
                        },
                      },
                    }}
                  />
                ))}
              </motion.div>

              {/* Glow effect */}
              <motion.div
                className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur opacity-0"
                variants={{
                  hover: {
                    opacity: 0.4,
                    transition: { duration: 0.3 },
                  },
                }}
              />

              {/* Main button with animated border */}
              <motion.a
                // href="/resume.pdf"
                // download
                className="relative flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-br from-purple-600 to-purple-800 text-white font-medium overflow-hidden"
                variants={{
                  rest: {
                    scale: 1,
                    boxShadow: "0 4px 6px rgba(124, 58, 237, 0.1)",
                  },
                  hover: {
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(124, 58, 237, 0.3)",
                    transition: { type: "spring", stiffness: 300 },
                  },
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-full p-[2px]"
                  variants={{
                    rest: {
                      background:
                        "linear-gradient(90deg, rgba(168,85,247,0) 0%, rgba(168,85,247,0) 100%)",
                    },
                    hover: {
                      background:
                        "linear-gradient(90deg, rgba(168,85,247,1) 0%, rgba(236,72,153,1) 100%)",
                      transition: { duration: 0.8 },
                    },
                  }}
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 to-purple-800" />
                </motion.div>

                {/* Button content with animated icon */}
                <motion.span className="relative z-10 flex items-center gap-2">
                  <motion.span
                    variants={{
                      rest: { x: 0 },
                      hover: { x: -3 },
                    }}
                    transition={{ type: "spring", stiffness: 500 }}
                  >
                    Download CV
                  </motion.span>

                  <motion.div
                    variants={{
                      rest: { x: 0 },
                      hover: { x: 3 },
                    }}
                    transition={{ type: "spring", stiffness: 500 }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <motion.path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        variants={{
                          rest: { pathLength: 1 },
                          hover: {
                            pathLength: [1, 1.2, 1],
                            transition: { duration: 0.8 },
                          },
                        }}
                      />
                    </svg>
                  </motion.div>
                </motion.span>

                {/* Ripple effect layer */}
                <motion.div className="absolute inset-0 rounded-full overflow-hidden">
                  <motion.span
                    className="absolute bg-white opacity-0 rounded-full"
                    style={{
                      width: 200,
                      height: 200,
                      x: -100,
                      y: -100,
                    }}
                    variants={{
                      hover: {
                        opacity: [0, 0.1, 0],
                        scale: [0, 1],
                        transition: { duration: 0.8 },
                      },
                    }}
                  />
                </motion.div>
              </motion.a>
            </motion.div>
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6 text-white" />
              ) : (
                <FaBars className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <motion.div
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="flex flex-col items-center py-4 space-y-4 bg-gray-900/95 backdrop-blur-lg"
              >
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    variants={itemVariants}
                    href={item.path}
                    className="w-full text-center py-3 px-4 text-gray-300 hover:text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}

                <motion.a
                  variants={itemVariants}
                  href="#contact"
                  className="mt-4 px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  DownLoad cv
                </motion.a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
