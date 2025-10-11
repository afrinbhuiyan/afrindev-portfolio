import React from "react";
import { FiCode, FiSmartphone, FiServer, FiMonitor } from "react-icons/fi";
import { motion } from "framer-motion";
import MouseEffect from "./MouseEffect";

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "I build responsive and interactive websites using React, Next.js, Tailwind CSS, and modern web technologies. Websites are optimized for performance, accessibility, and user experience.",
    icon: <FiCode size={28} />,
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "Designing clean and modern interfaces that engage users effectively. I focus on user experience, prototyping, and creating design systems that are consistent and visually appealing.",
    icon: <FiMonitor size={28} />,
  },
  {
    id: 3,
    title: "Backend Development",
    description:
      "I create robust backend systems using Node.js, Express, and MongoDB. This includes API development, database management, authentication, and secure data handling.",
    icon: <FiServer size={28} />,
  },
  {
    id: 4,
    title: "Mobile & Responsive Apps",
    description:
      "I develop responsive mobile-first applications that work seamlessly across all devices. I focus on smooth interactions, fast performance, and consistent design across platforms.",
    icon: <FiSmartphone size={28} />,
  },
];

const ServicePage = () => {
  return (
    <section
      id="services"
      className="py-20 bg-gray-950 relative overflow-hidden min-h-screen"
    >
      <MouseEffect />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            My Services
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            I offer a range of services to help bring your digital ideas to life, from frontend and backend development to UI/UX design and mobile-friendly solutions.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-gray-900 border border-gray-700 rounded-2xl p-6 flex flex-col items-start gap-4 hover:bg-gray-800 cursor-pointer transition-colors shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="text-blue-400 mb-2">{service.icon}</div>
              <h3 className="text-xl font-bold text-white">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePage;
