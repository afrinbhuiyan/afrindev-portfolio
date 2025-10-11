import React, { useState } from "react";
import { FiGithub, FiExternalLink, FiX, FiArrowRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import image1 from "../assets/kind-hands.png";
import image2 from "../assets/taskHub.png";
import image3 from "../assets/gameDay.png";
import image4 from "../assets/chatly.png";
import image5 from "../assets/job-portal.png";
import MouseEffect from "./MouseEffect";

const MyProjects = () => {
  const [projects] = useState([
    {
      id: 1,
      title: "Volunteer Network",
      type: "Fullstack",
      description:
        "Volunteer Network is a comprehensive full-stack platform designed to bridge the gap between NGOs and volunteers. It enables volunteers to discover local opportunities based on their skills and availability, and allows NGOs to post events, manage participants, and track volunteer hours efficiently. The platform integrates secure donation handling, real-time notifications, and role-based access control to ensure a seamless and organized experience for both volunteers and organizations. The intuitive dashboard provides detailed analytics on volunteer engagement, upcoming events, and donation trends, helping NGOs make informed decisions.",
      image: image1,
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Firebase Auth",
        "Stripe API",
        "Tailwind CSS",
      ],
      githubLink: "https://github.com/afrinbhuiyan/kind-hands-client",
      liveLink: "https://kind-hands-50929.web.app/",
      challenges:
        "Ensuring smooth real-time updates with growing user activity without performance degradation.",
      improvements:
        "Future plans include push notifications, advanced analytics dashboards for NGOs, and smart volunteer skill matching.",
      features: [
        "Role-based access control",
        "Real-time activity feed",
        "Secure payment processing",
        "Volunteer hour certification",
      ],
    },
    {
      id: 2,
      title: "TaskHub Marketplace",
      type: "Fullstack",
      description:
        "TaskHub Marketplace is a feature-rich freelance platform that allows businesses to post tasks, set deadlines, and receive bids from skilled freelancers. It incorporates a real-time bidding system, enabling fair competition among freelancers while maintaining transparency. Integrated messaging ensures smooth communication between task owners and freelancers, while milestone payments and reviews provide trust and accountability. The platform also supports secure file sharing, notifications, and dashboard analytics, allowing both parties to track project progress efficiently and make data-driven decisions.",
      image: image2,
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Firebase Storage",
        "JWT Auth",
        "Tailwind CSS",
      ],
      githubLink:
        "https://github.com/afrinbhuiyan/freelance-task-marketplace-client",
      liveLink: "https://gorgeous-khapse-7b99f1.netlify.app/",
      challenges:
        "Handling high-frequency bidding to prevent race conditions and ensuring consistent data synchronization.",
      improvements:
        "Future enhancements include escrow services, AI project recommendations, and dispute resolution tools.",
      features: [
        "Real-time bidding system",
        "Secure file sharing",
        "Milestone payments",
        "Rating and review system",
      ],
    },
    {
      id: 3,
      title: "GameDay Events",
      type: "Frontend",
      description:
        "GameDay Events is a frontend-focused platform that allows users to discover, register, and participate in local sports events. It offers advanced filtering options by sport type, location, and date, and integrates an interactive map for easy event navigation. Users can manage event participation, track schedules, and share events with friends through social media. The platform focuses on providing a seamless user experience with smooth animations, responsive design, and optimized performance for maps and event listings, making it easy for sports enthusiasts to engage with their community.",
      image: image3,
      technologies: [
        "Next.js",
        "Firebase",
        "Mapbox API",
        "Tailwind CSS",
        "React Query",
      ],
      githubLink: "https://github.com/afrinbhuiyan/gameday-local-platform",
      liveLink: "https://starlit-nougat-c89c38.netlify.app/",
      challenges:
        "Optimizing map performance with hundreds of event markers while keeping smooth UI interactions.",
      improvements:
        "Adding live scores, player statistics tracking, and team formation features.",
      features: [
        "Location-based event discovery",
        "Event registration",
        "Participant management",
        "Social sharing",
      ],
    },
    {
      id: 4,
      title: "Chatly Ruby",
      type: "Frontend",
      description:
        "Chatly Ruby is a real-time chat application built using Ruby, designed to facilitate instant messaging between users. It features presence indicators so users can see who is online, maintains message history for reference, and provides a clean, responsive interface for seamless communication across devices. The application is optimized for low latency to ensure instant delivery of messages and leverages serverless functions for scalable and efficient backend processing. Chatly Ruby aims to provide a lightweight, fast, and reliable chat experience for personal or small team communications.",
      image: image4,
      technologies: ["Ruby", "Vercel Functions", "Tailwind CSS", "Next.js", "shadcn ui", "TypeScript"],
      githubLink: "https://github.com/Saquib45/ChatApplication",
      liveLink: "https://chatly-ruby.vercel.app/",
      challenges:
        "Implementing low-latency real-time messaging and persisting chat history reliably.",
      improvements:
        "Future updates will include user authentication, media sharing, and message search functionality.",
      features: [
        "Real-time messaging",
        "User presence indicators",
        "Message history",
        "Responsive design",
      ],
    },
    {
      id: 5,
      title: "MERN Job Portal",
      type: "Fullstack",
      description:
        "MERN Job Portal is a full-stack employment platform designed for job seekers and employers. Job seekers can browse listings, upload resumes, and apply for roles, while employers can post jobs, manage applications, and communicate with candidates. The portal supports secure authentication, dynamic job filtering, and a responsive user interface for seamless interaction. The platform also includes admin dashboards for managing users and jobs, ensuring smooth operations and data management. By integrating modern technologies like JWT for authentication and MongoDB for scalable data storage, the portal provides a reliable and efficient job-searching experience.",
      image: image5,
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
        "JWT Auth",
      ],
      githubLink: "https://github.com/afrinbhuiyan/mern-job-portal-client",
      liveLink: "https://mernjobportalclient.vercel.app/",
      challenges:
        "Implementing secure authentication, dynamic job listings, and smooth client-server interactions.",
      improvements:
        "Planned features include admin dashboards, advanced search filters, and resume upload capabilities.",
      features: [
        "User authentication",
        "Job posting and application",
        "Resume management",
        "Responsive design",
      ],
    },
  ]);

  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [filter, setFilter] = useState("All");

  const filters = ["All", "Fullstack", "Frontend", "Backend"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => {
          if (p.type === "Fullstack") return true;
          return p.type.toLowerCase() === filter.toLowerCase();
        });

  const isContentOnRight = (index) => index % 2 === 0;

  return (
    <section
      id="projects"
      className="py-20 bg-gray-950 relative overflow-hidden min-h-screen"
    >
      <MouseEffect />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8">
            My Projects
          </h2>
          <div className="flex justify-center gap-6 border-b border-gray-800">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 pb-3 text-lg font-medium transition-colors ${
                  filter === f
                    ? "text-blue-400 border-b-2 border-blue-400"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {f === "All" ? "All" : f}
              </button>
            ))}
            <span className="px-3 pb-3 text-lg font-medium text-gray-500">
              Desktop
            </span>
            <span className="px-3 pb-3 text-lg font-medium text-gray-500">
              Other Projects
            </span>
          </div>
        </div>

        <div className="space-y-20">
          {filteredProjects.map((project, index) => {
            const contentRight = isContentOnRight(index);
            return (
              <motion.div
                key={project.id}
                className="flex flex-col lg:flex-row items-center gap-12"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div
                  className={`lg:w-1/2 flex flex-col ${
                    contentRight ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <h3 className="text-2xl font-bold text-gray-400 mb-2">
                    PROJECT {index + 1}
                  </h3>
                  <h4 className="text-4xl font-extrabold text-white mb-4">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors w-max"
                  >
                    <FiArrowRight className="mr-2" /> Read more
                  </button>
                </div>

                <div
                  className={`lg:w-1/2 ${
                    contentRight ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-blue-500/50 p-2 bg-gray-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto rounded-xl object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/30 bg-opacity-80 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
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
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {selectedProject.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex border-b border-gray-700 mb-6">
                    <button
                      className={`px-4 py-2 font-medium ${
                        activeTab === "overview"
                          ? "text-blue-400 border-b-2 border-blue-400"
                          : "text-gray-400 hover:text-white"
                      }`}
                      onClick={() => setActiveTab("overview")}
                    >
                      Overview
                    </button>
                    <button
                      className={`px-4 py-2 font-medium ${
                        activeTab === "details"
                          ? "text-blue-400 border-b-2 border-blue-400"
                          : "text-gray-400 hover:text-white"
                      }`}
                      onClick={() => setActiveTab("details")}
                    >
                      Technical Details
                    </button>
                    <button
                      className={`px-4 py-2 font-medium ${
                        activeTab === "links"
                          ? "text-blue-400 border-b-2 border-blue-400"
                          : "text-gray-400 hover:text-white"
                      }`}
                      onClick={() => setActiveTab("links")}
                    >
                      Project Links
                    </button>
                  </div>

                  {activeTab === "overview" && (
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">
                        Project Description
                      </h4>
                      <p className="text-gray-400 mb-6">
                        {selectedProject.description}
                      </p>

                      <h4 className="text-lg font-semibold text-white mb-3">
                        Key Features
                      </h4>
                      <ul className="grid gap-2 mb-6">
                        {selectedProject.features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-start text-gray-400"
                          >
                            <span className="text-blue-400 mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {activeTab === "details" && (
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">
                          Challenges Faced
                        </h4>
                        <p className="text-gray-400 mb-6">
                          {selectedProject.challenges}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">
                          Future Improvements
                        </h4>
                        <p className="text-gray-400">
                          {selectedProject.improvements}
                        </p>
                      </div>
                    </div>
                  )}

                  {activeTab === "links" && (
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">
                          Technology Stack
                        </h4>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {selectedProject.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 rounded-full bg-gray-700 text-gray-300 text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4">
                        <a
                          href={selectedProject.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors"
                        >
                          <FiGithub /> View Source Code
                        </a>
                        <a
                          href={selectedProject.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg transition-colors"
                        >
                          <FiExternalLink /> Visit Live Demo
                        </a>
                      </div>
                    </div>
                  )}
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
