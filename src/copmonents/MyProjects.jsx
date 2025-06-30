import React, { useState } from "react";
import { FiGithub, FiExternalLink, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import image1 from "../assets/kind-hands.png";
import image2 from "../assets/taskHub.png";
import image3 from "../assets/gameDay.png";

const CaseStudyButton = ({ project, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    setIsClicked(true);
    setTimeout(() => {
      onClick(project);
      setIsClicked(false);
    }, 400);
  };

  return (
    <motion.button
      onClick={handleClick}
      className="relative overflow-hidden group px-5 py-2.5 rounded-xl border border-gray-600"
      whileHover={{
        scale: 1.03,
        boxShadow: "0 0 15px rgba(139, 92, 246, 0.3)",
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100"
        animate={{
          opacity: isClicked ? 1 : [0, 0.5, 0],
        }}
        transition={{ duration: 0.4 }}
      />

      {isClicked && (
        <motion.span
          className="absolute bg-white rounded-full opacity-30"
          initial={{ scale: 0, opacity: 0.7 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.4 }}
        />
      )}

      <div className="relative z-10 flex items-center justify-center">
        <motion.span
          className="text-white font-medium text-sm"
          animate={{
            x: isClicked ? [0, 2, 0] : 0,
          }}
          transition={{
            x: { duration: 0.3 },
          }}
        >
          Case Study
        </motion.span>
        <motion.div
          className="ml-2"
          animate={{
            x: [0, 4, 0],
            opacity: isClicked ? [1, 0.5, 1] : 1,
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
        >
          <FiExternalLink className="text-white text-sm" />
        </motion.div>
      </div>
    </motion.button>
  );
};

const MyProjects = () => {
  const [projects] = useState([
    {
      id: 1,
      title: "Volunteer Management Platform",
      description:
        "A full-stack solution connecting NGOs with volunteers, featuring real-time coordination, Stripe donation handling, and volunteer hour tracking. Includes secure authentication and role-based access control.",
      image: image1,
      technologies: [
        "React",
        "Node.js",
        "Firebase",
        "Express",
        "MongoDB",
        "JWT Auth",
        "Tailwind CSS",
      ],
      githubLink: "https://github.com/afrinbhuiyan/kind-hands-client",
      liveLink: "https://kind-hands-50929.web.app/",
      challenges:
        "Scaling real-time updates across thousands of concurrent users while maintaining low latency and performance.",
      solutions:
        "Integrated WebSockets for real-time communication and optimized MongoDB indexing to reduce query latency by 70%.",
      role: "Full-stack Developer",
    },
    {
      id: 2,
      title: "Freelance Task Marketplace",
      description:
        "A dynamic platform where businesses can post tasks and freelancers can bid on projects. Features include real-time messaging, milestone payments, and review systems.",
      image: image2,
      technologies: [
        "React",
        "Node.js",
        "Firebase",
        "Express",
        "MongoDB",
        "Tailwind CSS",
      ],
      githubLink:
        "https://github.com/afrinbhuiyan/freelance-task-marketplace-client",
      liveLink: "https://gorgeous-khapse-7b99f1.netlify.app/",
      challenges:
        "Ensuring data consistency during high-frequency bidding activity and avoiding race conditions when updating bid data.",
      solutions:
        "Implemented a custom bidding queue system using Firebase transactions and backend validation to maintain data integrity.",
      role: "Full-stack Developer",
    },
    {
      id: 3,
      title: "Local Event Discovery",
      description:
        "A responsive Next.js app to explore and promote local sports events with Firebase Auth and dynamic features.",
      image: image3,
      technologies: ["Next.js", "Firebase", "Weather API", "Tailwind CSS"],
      githubLink: "https://github.com/afrinbhuiyan/gameday-local-platform",
      liveLink: "https://starlit-nougat-c89c38.netlify.app/",
      challenges:
        "No major technical challenges were encountered during development.",
      solutions:
        "Focused on clean code, responsiveness, and ensuring smooth API integration with fallback UI for better UX.",
      role: "Frontend Lead",
    },
  ]);

  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section
      id="projects"
      className="py-24 bg-gray-900 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Each project represents unique challenges and innovative solutions
          </p>
        </motion.div>

        {/* Projects Grid - Side by side layout for large screens */}
        <div className="space-y-12 lg:space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl border border-gray-700/70 bg-gradient-to-br from-gray-800/40 to-gray-900/50 backdrop-blur-sm lg:flex lg:min-h-[420px] shadow-lg"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true, margin: "-50px" }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              whileHover={{
                boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.4)",
                borderColor: "rgba(139, 92, 246, 0.4)",
              }}
            >
              {/* Glow effect */}
              {hoveredProject === project.id && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/15 to-blue-500/15 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />
              )}

              {/* Floating corner accent */}
              <div
                className={`absolute ${
                  index % 2 === 0 ? "left-0" : "right-0"
                } top-0 w-16 h-16 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-br-2xl ${
                  index % 2 === 0 ? "rounded-tl-2xl" : "rounded-tr-2xl"
                }`}
              ></div>

              {/* Image side */}
              <motion.div
                className={`lg:w-1/2 relative ${
                  index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                }`}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              >
                <div className="relative h-64 lg:h-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent lg:bg-gradient-to-r lg:via-gray-900/20"
                    style={
                      index % 2 === 0
                        ? {
                            background:
                              "linear-gradient(to right, rgba(12, 15, 23, 0.95), rgba(12, 15, 23, 0.3))",
                          }
                        : {
                            background:
                              "linear-gradient(to left, rgba(12, 15, 23, 0.95), rgba(12, 15, 23, 0.3))",
                          }
                    }
                  />
                </div>
              </motion.div>

              {/* Content side */}
              <div
                className={`p-6 sm:p-8 lg:w-1/2 ${
                  index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                } flex flex-col justify-between`}
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                      {project.title}
                    </h3>
                    <motion.span
                      className="text-xs bg-gray-700/80 text-gray-300 px-3 py-1.5 rounded-full border border-gray-600"
                      whileHover={{ scale: 1.05 }}
                    >
                      {project.role}
                    </motion.span>
                  </div>

                  <p className="text-gray-300 mb-6 text-base leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="text-xs px-3 py-1.5 rounded-full border border-gray-700 text-gray-300 bg-gray-800/60 hover:bg-gray-700/60 transition-all"
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "rgba(124, 58, 237, 0.2)",
                          borderColor: "rgba(167, 139, 250, 0.5)",
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-4">
                  <div className="flex gap-5">
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors group"
                      whileHover={{ y: -2 }}
                    >
                      <span className="relative">
                        <FiGithub className="text-lg" />
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
                      </span>
                      <span className="text-sm font-medium">Code</span>
                    </motion.a>
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors group"
                      whileHover={{ y: -2 }}
                    >
                      <span className="relative">
                        <FiExternalLink className="text-lg" />
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                      </span>
                      <span className="text-sm font-medium">Live</span>
                    </motion.a>
                  </div>
                  <CaseStudyButton
                    project={project}
                    onClick={setSelectedProject}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700 relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-gray-700 hover:bg-gray-600 rounded-full p-2 z-10 transition-colors"
              >
                <FiX className="text-white" />
              </button>

              <div className="relative">
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent" />
                </div>

                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {selectedProject.title}
                      </h3>
                      <span className="text-sm bg-gray-700 text-gray-300 px-3 py-1 rounded-full">
                        {selectedProject.role}
                      </span>
                    </div>

                    <div className="flex gap-3">
                      <motion.a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-700 hover:bg-gray-600 p-2 rounded-lg transition-colors"
                        title="View Code"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FiGithub className="text-white text-xl" />
                      </motion.a>
                      <motion.a
                        href={selectedProject.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 hover:bg-blue-500 p-2 rounded-lg transition-colors"
                        title="Live Demo"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FiExternalLink className="text-white text-xl" />
                      </motion.a>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="md:col-span-2">
                      <h4 className="text-lg font-semibold text-white mb-3">
                        Project Overview
                      </h4>
                      <p className="text-gray-400 mb-6">
                        {selectedProject.description}
                      </p>

                      <h4 className="text-lg font-semibold text-white mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {selectedProject.technologies.map((tech, index) => (
                          <motion.span
                            key={index}
                            className="px-3 py-1 rounded-full bg-gray-700 text-gray-300 text-sm"
                            whileHover={{ scale: 1.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gray-700/50 rounded-lg p-5 border border-gray-600">
                      <h4 className="text-lg font-semibold text-white mb-3">
                        Key Challenges
                      </h4>
                      <p className="text-gray-400 mb-6">
                        {selectedProject.challenges}
                      </p>

                      <h4 className="text-lg font-semibold text-white mb-3">
                        My Solutions
                      </h4>
                      <p className="text-gray-400">
                        {selectedProject.solutions}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <motion.a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FiGithub /> View Source Code
                    </motion.a>
                    <motion.a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-6 py-3 rounded-lg transition-all"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FiExternalLink /> Visit Live Demo
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MyProjects;
