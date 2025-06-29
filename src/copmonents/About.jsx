import { motion } from "framer-motion";
import { FaCode, FaPalette, FaBookOpen, FaServer, FaBrain, FaLaptopCode, FaPencilAlt, FaLightbulb } from "react-icons/fa";

const About = () => {

  const interests = [
    {
      icon: <FaPalette className="text-lg" />,
      title: "Traditional Painting",
      description: "Working with acrylics and watercolors on canvas and paper"
    },
    {
      icon: <FaBookOpen className="text-lg" />,
      title: "Sci-Fi Literature",
      description: "Exploring futuristic concepts and ideas"
    },
    {
      icon: <FaBrain className="text-lg" />,
      title: "Learning",
      description: "Constantly expanding my knowledge base"
    },
    {
      icon: <FaPencilAlt className="text-lg" />,
      title: "Drawing",
      description: "Sketching portraits and landscapes with graphite and charcoal"
    },
    {
      icon: <FaLightbulb className="text-lg" />,
      title: "Creative Problem Solving",
      description: "Applying artistic thinking to development challenges"
    }
  ];

  return (
    <section id="about" className="relative py-20 bg-gray-900 overflow-hidden">
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
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left column - Introduction */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-10">
              <motion.div 
                className="flex items-center gap-3 mb-6"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
                transition={{ delay: 0.4 }}
              >
                <div className="w-8 h-0.5 bg-purple-400 rounded-full" />
                <h3 className="text-2xl font-bold text-white">My Journey</h3>
              </motion.div>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                Hello! I'm <span className="font-medium text-purple-300">Afrin</span>, a passionate self-taught developer specializing in modern web technologies. My coding journey began when I discovered the power of turning ideas into interactive experiences through programming.
              </p>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                I thrive on building <span className="font-medium text-blue-300">elegant solutions</span> to complex problems, with a focus on creating intuitive user interfaces and robust backend systems. The MERN stack is my playground, but I'm always exploring new technologies.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                What excites me most about development is the constant learning and the ability to create something meaningful that people can interact with and enjoy.
              </p>
            </div>

            {/* Coding philosophy */}
            <motion.div
              className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-purple-900/30 text-purple-400">
                  <FaLaptopCode className="text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">My Approach</h4>
                  <p className="text-gray-400">
                    I believe in writing clean, maintainable code while balancing performance and aesthetics. Every project is an opportunity to push boundaries and create something remarkable.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column - Skills & Interests */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-0.5 bg-indigo-400 rounded-full" />
                <h3 className="text-2xl font-bold text-white">Beyond Coding</h3>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 hover:border-purple-400/30 transition-colors"
                    whileHover={{ y: -3 }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-purple-900/40 to-blue-900/40 text-purple-300">
                        {interest.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-white">{interest.title}</h4>
                        <p className="text-gray-400 text-sm">{interest.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;