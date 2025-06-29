import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaGithub,
  FaDribbble,
  FaLinkedin,
  FaTwitter,
  FaArrowDown,
  FaDownload,
  FaCode,
  FaServer,
  FaPaintBrush,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import img from "../assets/me.png";
import { FiDownload } from "react-icons/fi";

const Banner = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [particles, setParticles] = useState([]);
  const containerRef = useRef(null);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });

  // Mouse movement tracker
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Add new particle
      if (particles.length < 20) {
        setParticles((prev) => [
          ...prev,
          {
            id: Date.now(),
            x: e.clientX,
            y: e.clientY,
            size: Math.random() * 5 + 2,
            opacity: 1,
          },
        ]);
      }
    };

    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, [particles.length]);

  // Particle animation
  useEffect(() => {
    if (particles.length > 0) {
      const timer = setInterval(() => {
        setParticles((prev) =>
          prev
            .map((p) => ({
              ...p,
              opacity: p.opacity - 0.05,
              size: p.size * 0.95,
            }))
            .filter((p) => p.opacity > 0.1)
        );
      }, 50);

      return () => clearInterval(timer);
    }
  }, [particles]);

  // Cursor variants
  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
      opacity: 0.7,
      backgroundColor: "rgba(192, 132, 252, 0.3)",
      mixBlendMode: "screen",
    },
    text: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 2,
      opacity: 0.5,
      backgroundColor: "rgba(236, 72, 153, 0.5)",
    },
    button: {
      x: mousePosition.x - 15,
      y: mousePosition.y - 15,
      scale: 1.5,
      opacity: 0.4,
      backgroundColor: "rgba(139, 92, 246, 0.5)",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  const buttonEnter = () => setCursorVariant("button");
  const buttonLeave = () => setCursorVariant("default");

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center justify-center bg-gray-900"
      ref={ref}
      onMouseEnter={() => setCursorVariant("default")}
    >
      {/* Custom cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      />

      {/* Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="fixed rounded-full bg-purple-400 pointer-events-none z-40"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
          }}
          initial={{ scale: 1 }}
          animate={{ scale: 0 }}
          transition={{ duration: 1 }}
        />
      ))}

      {/* Animated grid background */}
      <div className="absolute inset-0 overflow-hidden z-0 opacity-20">
        <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px]" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-pink-900/30"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
      </div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10 py-20">
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <motion.p
              className="text-purple-400 mb-2 font-mono text-lg"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Afrin
              </span>
            </motion.h1>

            <motion.div
              className="text-2xl md:text-3xl mb-8 font-light text-gray-300"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              <div className="inline-flex items-center gap-3">
                <div className="h-1 w-8 bg-purple-400 rounded-full" />
                <span>Full Stack Developer</span>
              </div>
            </motion.div>

            <motion.p
              className="text-lg text-gray-300 mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              Bringing digital visions to life, I am a full-stack web developer
              dedicated to building exceptional online experiences. Leveraging
              my expertise in the MERN stack, I create responsive and intuitive
              applications that prioritize user satisfaction and deliver
              powerful functionality.
            </motion.p>
          </motion.div>

          {/* Tech Pill Badges */}
          <motion.div
            className="flex flex-wrap gap-3 mb-10 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
          >
            {[
              { icon: <FaCode />, text: "Frontend" },
              { icon: <FaServer />, text: "Backend" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="px-4 py-2 rounded-full border border-purple-400/30 bg-purple-900/10 text-purple-300 flex items-center gap-2"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(192, 132, 252, 0.2)",
                }}
                transition={{ type: "spring", stiffness: 400 }}
                onMouseEnter={buttonEnter}
                onMouseLeave={buttonLeave}
              >
                <span className="text-sm">{item.icon}</span>
                <span className="text-sm">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1.1 }}
          >
            {/* Holographic Download Button */}
            <motion.div
              className="relative group"
              whileHover="hover"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2 }}
            >
              {/* Button glow effect */}
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"
                variants={{
                  hover: { opacity: 0.75 },
                }}
              />

              {/* Main button */}
              <motion.a
                href="/resume.pdf"
                download
                className="relative flex items-center gap-3 px-8 py-4 rounded-lg bg-gray-900 border border-purple-400/20 text-purple-100 font-medium group"
                variants={{
                  hover: {
                    y: -2,
                    boxShadow: "0 10px 25px -5px rgba(168, 85, 247, 0.4)",
                  },
                }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={buttonEnter}
                onMouseLeave={buttonLeave}
              >
                {/* Animated icon */}
                <motion.div
                  className="relative"
                  variants={{
                    hover: { rotate: [0, 10, -10, 0] },
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <FiDownload className="text-xl text-purple-400" />
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-purple-400 opacity-0"
                    variants={{
                      hover: {
                        scale: 1.5,
                        opacity: 0.3,
                      },
                    }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>

                <span>Download CV</span>

                {/* Animated underline */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"
                  initial={{ width: 0 }}
                  variants={{
                    hover: { width: "100%" },
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </motion.div>

            {/* Cyber Contact Button */}
            <motion.div
              className="relative group"
              whileHover="hover"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.3 }}
            >
              {/* Button outline animation */}
              <motion.div
                className="absolute -inset-0.5 rounded-lg overflow-hidden"
                variants={{
                  hover: {
                    opacity: 1,
                  },
                }}
                initial={{ opacity: 0 }}
              >
                <motion.div
                  className="absolute inset-0 border-2 border-transparent border-t-purple-400 border-r-pink-400 rounded-lg"
                  variants={{
                    hover: {
                      rotate: 360,
                      borderColor: [
                        "transparent",
                        "transparent",
                        "#a855f7",
                        "#ec4899",
                        "transparent",
                      ],
                    },
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.div>

              {/* Main button */}
              <motion.a
                href="#contact"
                className="relative flex items-center gap-3 px-8 py-4 rounded-lg bg-gray-900/50 backdrop-blur-sm text-purple-100 font-medium border border-gray-700"
                variants={{
                  hover: {
                    y: -2,
                    backgroundColor: "rgba(30, 10, 50, 0.7)",
                  },
                }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={buttonEnter}
                onMouseLeave={buttonLeave}
              >
                {/* Pulsing icon */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <HiOutlineMail className="text-xl text-pink-400" />
                </motion.div>
                <span>Contact Me</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Profile Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative">
            {/* Glow effect */}
            <motion.div
              className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-xl"
              animate={{
                opacity: [0.1, 0.2, 0.1],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Image container */}
            <div className="relative overflow-hidden rounded-xl border-2 border-purple-500/20 backdrop-blur-sm">
              <motion.img
                src={img}
                alt="Afrin"
                className="w-full max-w-md object-cover"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Floating tech badges */}
            <motion.div
              className="absolute -bottom-5 -left-5 px-4 py-2 rounded-full bg-gray-900 border border-purple-400/20 shadow-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-xs text-purple-300">React.js</span>
            </motion.div>

            <motion.div
              className="absolute -top-5 -right-5 px-4 py-2 rounded-full bg-gray-900 border border-pink-400/20 shadow-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 1 }}
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-xs text-pink-300">Node.js</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-300 cursor-pointer z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        onClick={scrollToAbout}
        whileHover={{ scale: 1.1 }}
        onMouseEnter={buttonEnter}
        onMouseLeave={buttonLeave}
      >
        <motion.div
          className="w-8 h-12 rounded-full border-2 border-cyan-400/50 flex justify-center pt-2"
          animate={{
            borderColor: [
              "rgba(6, 182, 212, 0.5)",
              "rgba(236, 72, 153, 0.5)",
              "rgba(6, 182, 212, 0.5)",
            ],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 rounded-full bg-cyan-400"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
        <span className="mt-2 text-xs font-mono tracking-widest text-cyan-400">
          SCROLL
        </span>
      </motion.div>
    </section>
  );
};

export default Banner;
