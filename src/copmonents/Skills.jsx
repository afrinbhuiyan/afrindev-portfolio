import React from "react";
import { motion } from "framer-motion";
import MouseEffect from "./MouseEffect";

const SkillNode = ({ name, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3, delay }}
    viewport={{ once: true }}
    className="px-4 py-2 text-cyan-300 border border-cyan-600/50 rounded-md bg-gray-900/50 text-sm lg:text-lg shadow-lg hover:bg-cyan-900/30 cursor-default"
  >
    {name}
  </motion.div>
);

const SkillsSection = () => {
  const frontendSkills = [
    "HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Tailwind CSS",
    "Bootstrap", "Git", "Figma", "VS Code", "Chrome DevTools",
    "Responsive Design", "SEO Basics", "Web Accessibility",
    "Chart.js", "PostCSS", "Syntax UI", "shadcn UI",
  ];
  const learningFrontendSkills = ["TypeScript", "Three.js", "Redux"];

  const backendSkills = [
    "Node.js", "Express.js", "MongoDB", "Mongoose", "Firebase", "Vercel",
    "Netlify", "REST API", "JSON", "Authentication", "Authorization",
    "JWT", "Postman", "Cloudinary", "Stripe",
  ];
  const learningBackendSkills = ["SQL", "PostgreSQL", "Prisma", "GraphQL", "Redis"];

  const conceptualSkills = [
    "Unit Testing", "CI/CD", "Design Patterns", "Accessibility",
    "UX Research", "A/B Testing",
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col items-center justify-start py-20 bg-gray-950 overflow-hidden"
    >
      <MouseEffect></MouseEffect>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col items-center mt-20"
      >
        <div className="bg-[#0b1628] border-2 border-cyan-500 rounded-lg px-6 py-3 shadow-lg">
          <h2 className="text-xl md:text-2xl font-bold text-white tracking-widest">
            MY SKILLS
          </h2>
        </div>

        <motion.div
          className="absolute top-full h-24 w-px bg-cyan-600/70 left-1/2 transform -translate-x-1/2"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        />
      </motion.div>

      {/* Branch connections */}
      <motion.div
        className="absolute top-[190px] w-[30%] h-px bg-cyan-600/70"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        style={{ transformOrigin: "center" }}
      />
      <motion.div
        className="absolute top-[190px] w-px h-[70px] left-[671px] bg-cyan-600/70"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      />
      <motion.div
        className="absolute top-[190px] w-px h-[70px] right-[671px] bg-cyan-600/70"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      />

      {/* Skills layout */}
      <div className="relative flex flex-col items-center z-10 mt-8">
        <div className="flex flex-col md:flex-row justify-between w-full max-w-7xl px-8">
          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center w-full md:w-1/2 px-4"
          >
            <h3 className="text-cyan-400 font-semibold mb-4 lg:text-2xl">
              Frontend skills
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {frontendSkills.map((s, i) => (
                <SkillNode key={`frontend-${i}`} name={s} delay={1 + i * 0.05} />
              ))}
            </div>

            <motion.div
              className="w-px h-14 bg-cyan-700/50 my-1"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              viewport={{ once: true }}
            />
            <h3 className="text-cyan-400 font-semibold mb-2">
              Frontend Current Learning skills
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {learningFrontendSkills.map((s, i) => (
                <SkillNode key={`frontend-learning-${i}`} name={s} delay={1.6 + i * 0.05} />
              ))}
            </div>
          </motion.div>

          {/* Center Line */}
          <motion.div
            className="hidden md:block w-px bg-cyan-700/50 h-64 mx-auto"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          />

          {/* Backend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center w-full md:w-1/2 px-4"
          >
            <h3 className="text-cyan-400 font-semibold mb-4 lg:text-2xl">
              Backend skills
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {backendSkills.map((s, i) => (
                <SkillNode key={`backend-${i}`} name={s} delay={1 + i * 0.05} />
              ))}
            </div>

            <motion.div
              className="w-px h-14 bg-cyan-700/50 my-1"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              viewport={{ once: true }}
            />
            <h3 className="text-cyan-400 font-semibold mb-2">
              Backend Current Learning skills
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {learningBackendSkills.map((s, i) => (
                <SkillNode key={`backend-learning-${i}`} name={s} delay={1.6 + i * 0.05} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Conceptual Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="w-px h-12 bg-cyan-700/50 mb-4" />
          <h3 className="text-cyan-400 font-semibold mb-2">
            Conceptual Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {conceptualSkills.map((s, i) => (
              <SkillNode key={`conceptual-${i}`} name={s} delay={1.5 + i * 0.06} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
