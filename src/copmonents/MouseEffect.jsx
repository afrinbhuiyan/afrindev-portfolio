import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function MouseEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      setParticles((prev) => {
        const newParticle = {
          id: Date.now() + Math.random(),
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 5 + 2,
          opacity: 1,
        };
        const updated = [...prev, newParticle];
        return updated.slice(-15);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const animateParticles = () => {
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            opacity: p.opacity - 0.05,
            size: p.size * 0.92,
          }))
          .filter((p) => p.opacity > 0.1)
      );
      animationFrameRef.current = requestAnimationFrame(animateParticles);
    };

    animationFrameRef.current = requestAnimationFrame(animateParticles);
    return () => cancelAnimationFrame(animationFrameRef.current);
  }, []);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 w-20 h-20 rounded-full bg-gradient-to-r from-purple-500/40 to-pink-500/40 blur-3xl mix-blend-screen z-[999]"
        animate={{
          x: mousePosition.x - 40,
          y: mousePosition.y - 40,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20,
          mass: 0.4,
        }}
      />

      <motion.div
        className="pointer-events-none fixed top-0 left-0 w-7 h-7 rounded-full bg-purple-400/15 mix-blend-screen z-[1000]"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
      />

      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="pointer-events-none fixed rounded-full bg-purple-400 mix-blend-screen z-[998]"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
          }}
          initial={{ scale: 1 }}
          animate={{ scale: 0 }}
          transition={{ duration: 0.8 }}
        />
      ))}
    </>
  );
}
