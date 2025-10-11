import React, { useState, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCode, FaGithub, FaServer, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { TbBrandLinkedinFilled } from "react-icons/tb";

const AnimatedBackground = ({ mousePosition }) => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x = mousePosition.y * 0.0001;
      meshRef.current.rotation.y = mousePosition.x * 0.0001;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[50, 32, 32]} />
      <meshBasicMaterial transparent opacity={0} />
    </mesh>
  );
};

const Banner = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [particles, setParticles] = useState([]);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX - window.innerWidth / 2,
        y: e.clientY - window.innerHeight / 2,
      });

      setParticles((prev) => {
        if (prev.length >= 20) return prev; 
        return [
          ...prev,
          {
            id: crypto.randomUUID(), 
            x: e.clientX,
            y: e.clientY,
            size: Math.random() * 5 + 2,
            opacity: 1,
          },
        ];
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  useEffect(() => {
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
  }, []);

  const variants = {
    default: {
      x: mousePosition.x + window.innerWidth / 2 - 16,
      y: mousePosition.y + window.innerHeight / 2 - 16,
      scale: 1,
      opacity: 0.7,
      backgroundColor: "rgba(192, 132, 252, 0.3)",
      mixBlendMode: "screen",
    },
    text: {
      x: mousePosition.x + window.innerWidth / 2 - 20,
      y: mousePosition.y + window.innerHeight / 2 - 20,
      scale: 2,
      opacity: 0.5,
      backgroundColor: "rgba(236, 72, 153, 0.5)",
    },
    button: {
      x: mousePosition.x + window.innerWidth / 2 - 15,
      y: mousePosition.y + window.innerHeight / 2 - 15,
      scale: 1.5,
      opacity: 0.4,
      backgroundColor: "rgba(139, 92, 246, 0.5)",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  const buttonEnter = () => setCursorVariant("button");
  const buttonLeave = () => setCursorVariant("default");

  const socialLinks = [
    { icon: <FaGithub className="text-lg lg:text-2xl text-white" />, url: "https://github.com/afrinbhuiyan" },
    { icon: <FaTwitter className="text-lg lg:text-2xl text-white" />, url: "https://x.com/afrin691101" },
    { icon: <BiLogoInstagramAlt className="text-lg lg:text-2xl text-white" />, url: "https://www.instagram.com/afrin_6068/" },
    { icon: <TbBrandLinkedinFilled className="text-lg lg:text-2xl text-white" />, url: "https://www.linkedin.com/in/afrin-bhuiyan123/" },
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center justify-center bg-gray-950"
      ref={ref}
    >
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      />

      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="fixed rounded-full bg-purple-400 pointer-events-none z-40"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
          initial={{ scale: 1 }}
          animate={{ scale: 0 }}
          transition={{ duration: 1 }}
        />
      ))}

      <div className="absolute inset-0 w-full h-full">
        <Canvas className="absolute inset-0 z-0">
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <AnimatedBackground mousePosition={mousePosition} />
          <EffectComposer>
            <Bloom luminanceThreshold={0.3} luminanceSmoothing={0.9} height={300} />
          </EffectComposer>
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      <div className="flex flex-col items-center text-center z-10 absolute">
        <motion.p
          className="text-purple-400 mb-2 font-mono text-lg sunflower"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4 leading-tight sunflower"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          <span className="bg-clip-text text-white">Afrin</span>
        </motion.h1>

        <motion.div
          className="text-2xl md:text-3xl lg:text-4xl mb-6 font-medium text-gray-200 sunflower"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          Full Stack Developer
        </motion.div>

        <motion.p
          className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed sunflower px-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          Bringing digital visions to life, I am a full-stack web developer
          building responsive and intuitive applications. I specialize in the
          MERN stack, creating clean, maintainable code for both front-end
          interfaces and robust backend services. Passionate about best
          practices and continuous learning, I aim to deliver projects that are
          functional, visually engaging, and user-friendly.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-3 mb-10 justify-center px-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          {[{ icon: <FaCode />, text: "Frontend" }, { icon: <FaServer />, text: "Backend" }].map((item, i) => (
            <motion.div
              key={i}
              className="px-4 py-2 rounded-full border border-purple-400/30 bg-purple-900/10 text-purple-300 flex items-center gap-2"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(192,132,252,0.2)" }}
              transition={{ type: "spring", stiffness: 400 }}
              onMouseEnter={buttonEnter}
              onMouseLeave={buttonLeave}
            >
              <span className="text-sm">{item.icon}</span>
              <span className="text-sm">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center px-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
        >
          <motion.a
            href="#"
            className="relative flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-gray-900 border border-purple-400/20 text-purple-100 font-medium text-sm sm:text-base"
            whileHover={{ y: -2, boxShadow: "0 10px 25px -5px rgba(168,85,247,0.4)" }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={buttonEnter}
            onMouseLeave={buttonLeave}
          >
            <FiDownload className="text-lg sm:text-xl text-purple-400" />
            <span>Download CV</span>
          </motion.a>

          <motion.a
            href="/contact"
            className="relative flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-gray-900/50 backdrop-blur-sm text-purple-100 font-medium border border-gray-700 text-sm sm:text-base"
            whileHover={{ y: -2, backgroundColor: "rgba(30,10,50,0.7)" }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={buttonEnter}
            onMouseLeave={buttonLeave}
          >
            <HiOutlineMail className="text-lg sm:text-xl text-pink-400 animate-pulse" />
            <span>Contact Me</span>
          </motion.a>
        </motion.div>
      </div>

      <div
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 
          lg:left-[5%] xl:left-[8%] 2xl:left-[12%]
          lg:top-1/2 lg:-translate-y-1/2 lg:transform-none z-30 flex items-center justify-center"
      >
        <div className="flex flex-row lg:flex-col gap-3 lg:gap-4 px-4 lg:px-0">
          {socialLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#ffffff2a] p-3 rounded-full bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={buttonEnter}
              onMouseLeave={buttonLeave}
            >
              <span className="text-2xl">{link.icon}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
