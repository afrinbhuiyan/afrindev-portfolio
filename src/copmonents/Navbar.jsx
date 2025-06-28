import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaFileDownload, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { RiSunFill, RiMoonFill } from "react-icons/ri";
import { HiOutlineSparkles } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    // Check for saved theme or system preference
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", path: "#home" },
    { name: "Work", path: "#work" },
    { name: "Skills", path: "#skills" },
    { name: "Contact", path: "#contact" }
  ];

  // Handle theme change
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const menuVariants = {
    hidden: { 
      opacity: 0,
      y: -20,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`fixed w-full z-50 transition-all duration-500 ease-out ${
        scrolled 
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm"
          : "bg-white/50 dark:bg-gray-900/50 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with animated sparkle */}
          <motion.a 
            href="#home" 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div 
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <HiOutlineSparkles className="text-2xl text-amber-500 dark:text-purple-400" />
            </motion.div>
            <span className="text-xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              DevPort
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.path}
                className="relative font-medium text-gray-700 dark:text-gray-200 hover:text-amber-500 dark:hover:text-purple-400 transition-colors"
                whileHover={{ y: -2 }}
              >
                {item.name}
                <motion.span 
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 dark:bg-purple-400"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-4">
            {/* Social links - desktop */}
            <div className="hidden md:flex space-x-4">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-amber-500 dark:text-gray-300 dark:hover:text-purple-400"
                whileHover={{ y: -2 }}
              >
                <FaGithub className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-amber-500 dark:text-gray-300 dark:hover:text-purple-400"
                whileHover={{ y: -2 }}
              >
                <FaLinkedin className="h-5 w-5" />
              </motion.a>
            </div>

            {/* Resume button */}
            <motion.a
              href="/resume.pdf"
              download
              className="hidden md:flex items-center space-x-2 px-5 py-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 dark:from-purple-500 dark:to-pink-500 text-white font-medium"
              whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(245, 158, 11, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Resume</span>
              <FaFileDownload className="h-4 w-4" />
            </motion.a>

            {/* Theme toggle */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full focus:outline-none"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ opacity: 0, rotate: -45 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 45 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === 'light' ? (
                    <RiMoonFill className="h-5 w-5 text-gray-700" />
                  ) : (
                    <RiSunFill className="h-5 w-5 text-yellow-300" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6 text-gray-700 dark:text-gray-200" />
              ) : (
                <FaBars className="h-6 w-6 text-gray-700 dark:text-gray-200" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <motion.div
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="flex flex-col items-center py-4 space-y-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg"
              >
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    variants={itemVariants}
                    href={item.path}
                    className="w-full text-center py-3 px-4 text-gray-700 dark:text-gray-200 hover:text-amber-500 dark:hover:text-purple-400"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}

                <motion.div variants={itemVariants} className="flex space-x-6 pt-2">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="h-6 w-6 text-gray-600 hover:text-amber-500 dark:text-gray-300 dark:hover:text-purple-400" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="h-6 w-6 text-gray-600 hover:text-amber-500 dark:text-gray-300 dark:hover:text-purple-400" />
                  </a>
                </motion.div>

                <motion.a
                  variants={itemVariants}
                  href="/resume.pdf"
                  download
                  className="flex items-center justify-center mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 dark:from-purple-500 dark:to-pink-500 text-white font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>Download Resume</span>
                  <FaFileDownload className="ml-2 h-4 w-4" />
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