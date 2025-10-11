import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import Logo from "./Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Project", path: "/projects" },
    { name: "Contact", path: "/contact" },
    { name: "Service", path: "/service" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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
      className={`fixed w-full top-0 left-0 z-50 mt-4 lg:mt-6`}
    >
      <div
        className={`px-4 sm:px-6 lg:px-6 rounded-full md:border border-[#fff3] container mx-auto z-50 transition-all duration-500 ease-out md:bg-white/10 backdrop-blur-lg shadow-sm`}
      >
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link to="/home" className="flex items-center">
              <Logo />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div key={item.name} whileHover={{ y: -2 }}>
                <Link
                  to={item.path}
                  className="relative font-medium text-gray-300 hover:text-white transition-colors sunflower text-xl"
                >
                  {item.name}
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-4">
            {/* Desktop Download button */}
            <motion.div
              className="relative hidden md:block"
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              {/* Glow effect */}
              <motion.div
                className="absolute -inset-1 rounded-full bg-gradient-to-br from-cyan-400 to-purple-400 blur opacity-0"
                variants={{
                  hover: { opacity: 0.4, transition: { duration: 0.3 } },
                }}
              />

              <motion.button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/resume.pdf";
                  link.download = "Afrin_Resume.pdf";
                  link.click();
                }}
                className="relative flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 text-white font-medium overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
              </motion.button>
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
                  <motion.div key={item.name} variants={itemVariants}>
                    <Link
                      to={item.path}
                      className="w-full text-center py-3 px-4 text-gray-300 hover:text-white sunflower"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile Download CV button */}
                <motion.button
                  variants={itemVariants}
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/resume.pdf";
                    link.download = "Afrin_Resume.pdf";
                    link.click();
                    setIsMenuOpen(false);
                  }}
                  className="mt-4 px-6 py-3 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 hover:opacity-90 text-white font-medium transition-colors"
                >
                  Download CV
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
