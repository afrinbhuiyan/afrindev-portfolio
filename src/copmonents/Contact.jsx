import React, { useEffect, useRef, useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaPaperPlane,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeInput, setActiveInput] = useState(null);

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_PUBLIC_KEY);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    // Get all form data
    const formData = {
      user_name: form.current.user_name.value,
      user_email: form.current.user_email.value,
      user_message: form.current.message.value,
      current_time: new Date().toLocaleString(),
      current_year: new Date().getFullYear(),
    };
    // Verify data before sending
    console.log("Sending data:", formData);

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formData, // Send as object instead of sendForm
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          setIsSubmitted(true);
          form.current.reset();
          setTimeout(() => setIsSubmitted(false), 3000);
        },
        (error) => {
          console.error("Full error:", error);
          alert(`Failed to send: ${error.text || "Unknown error"}`);
        }
      );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section
      id="contact"
      className="py-16 bg-gray-900 relative overflow-hidden"
    >
      {/* Minimal background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-purple-900 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-10 right-20 w-60 h-60 bg-blue-900 rounded-full filter blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Contact
            </span>{" "}
            Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row gap-8"
        >
          {/* Contact Form - Minimal Cyber Card */}
          <motion.div variants={itemVariants} className="lg:w-1/2">
            <div className="bg-gray-900/80 p-6 rounded-xl border border-gray-800 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-6 text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                  Send a Message
                </span>
              </h3>

              {isSubmitted && (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 border border-purple-700/50 text-purple-100 px-4 py-3 rounded mb-6"
                >
                  <p>Message sent successfully!</p>
                </motion.div>
              )}

              <form ref={form} onSubmit={sendEmail} className="space-y-5">
                <div
                  className="relative"
                  onFocus={() => setActiveInput("name")}
                  onBlur={() => setActiveInput(null)}
                >
                  <label
                    htmlFor="name"
                    className={`block mb-2 text-sm font-medium ${
                      activeInput === "name"
                        ? "text-purple-400"
                        : "text-gray-400"
                    }`}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none text-white placeholder-gray-600 ${
                      activeInput === "name"
                        ? "border-purple-500 shadow-[0_0_0_1px_rgba(124,58,237,0.5)]"
                        : "border-gray-700"
                    }`}
                    required
                    placeholder="Enter your name"
                  />
                </div>

                <div
                  className="relative"
                  onFocus={() => setActiveInput("email")}
                  onBlur={() => setActiveInput(null)}
                >
                  <label
                    htmlFor="email"
                    className={`block mb-2 text-sm font-medium ${
                      activeInput === "email"
                        ? "text-blue-400"
                        : "text-gray-400"
                    }`}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none text-white placeholder-gray-600 ${
                      activeInput === "email"
                        ? "border-purple-500 shadow-[0_0_0_1px_rgba(59,130,246,0.5)]"
                        : "border-gray-700"
                    }`}
                    required
                    placeholder="your@email.com"
                  />
                </div>

                <div
                  className="relative"
                  onFocus={() => setActiveInput("message")}
                  onBlur={() => setActiveInput(null)}
                >
                  <label
                    htmlFor="message"
                    className={`block mb-2 text-sm font-medium ${
                      activeInput === "message"
                        ? "text-purple-400"
                        : "text-gray-400"
                    }`}
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none text-white placeholder-gray-600 ${
                      activeInput === "message"
                        ? "border-purple-500 shadow-[0_0_0_1px_rgba(124,58,237,0.5)]"
                        : "border-gray-700"
                    }`}
                    required
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center shadow hover:shadow-purple-500/20"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                >
                  <motion.span
                    animate={{ x: isHovered ? 3 : 0 }}
                    transition={{ type: "spring", stiffness: 500 }}
                    className="flex items-center"
                  >
                    Send Message
                    <RiSendPlaneFill className="ml-2" />
                  </motion.span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information - Minimal Holographic Card */}
          <motion.div variants={itemVariants} className="lg:w-1/2">
            <div className="bg-gray-900/80 p-6 rounded-xl border border-gray-800 backdrop-blur-sm h-full">
              <h3 className="text-xl font-bold mb-6 text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Contact Info
                </span>
              </h3>

              <div className="space-y-5">
                {/* Email */}
                <motion.div
                  whileHover={{ x: 3 }}
                  className="flex items-start bg-gray-800/50 p-4 rounded-lg border border-gray-700"
                >
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-lg mr-4">
                    <FaEnvelope className="text-white text-lg" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-300 mb-1">Email</h4>
                    <a
                      href="mailto:contact@example.com"
                      className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 hover:from-purple-300 hover:to-blue-300"
                    >
                      mstafrinbhuiyan@example.com
                    </a>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div
                  whileHover={{ x: 3 }}
                  className="flex items-start bg-gray-800/50 p-4 rounded-lg border border-gray-700"
                >
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg mr-4">
                    <FaPhone className="text-white text-lg" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-300 mb-1">Phone</h4>
                    <a
                      href="tel:+8801327368859"
                      className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-300 hover:to-purple-300"
                    >
                      +880 1327-368859
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 3 }}
                  className="flex items-start bg-gray-800/50 p-4 rounded-lg border border-gray-700"
                >
                  <div className="bg-gradient-to-r from-green-600 to-teal-600 p-2 rounded-lg mr-4">
                    <FaWhatsapp className="text-white text-lg" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-300 mb-1">WhatsApp</h4>
                    <a
                      href="https://wa.me/8801869052188"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400 hover:from-green-300 hover:to-teal-300"
                    >
                      +880 1869-052188
                    </a>
                  </div>
                </motion.div>

                {/* Social Links - Minimal */}
                <div className="pt-4">
                  <h4 className="font-medium text-gray-300 mb-4">
                    Connect with me
                  </h4>
                  <div className="flex gap-3">
                    <motion.a
                      href="https://github.com/afrinbhuiyan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 hover:bg-purple-600 p-3 rounded-lg transition-all flex items-center justify-center"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub className="text-xl text-white" />
                    </motion.a>
                    <motion.a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 hover:bg-blue-600 p-3 rounded-lg transition-all flex items-center justify-center"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaLinkedin className="text-xl text-white" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
