import { motion } from "framer-motion";
import { FaCode, FaServer, FaTools, FaPalette } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiJavascript, SiReact, SiTailwindcss, SiFirebase, SiNodedotjs, SiExpress, SiMongodb, SiVercel, SiNetlify, SiCanva, SiFigma } from "react-icons/si";

const SkillsSection = () => {
  const skillCategories = [
    {
      name: "Frontend Development",
      icon: <FaCode className="text-2xl text-cyan-400" />,
      skills: [
        { name: "HTML5", level: 95, icon: <span className="text-lg">📄</span> },
        { name: "CSS3", level: 90, icon: <span className="text-lg">🎨</span> },
        { name: "JavaScript", level: 85, icon: <SiJavascript className="text-lg text-yellow-400" /> },
        { name: "React", level: 85, icon: <SiReact className="text-lg text-cyan-300" /> },
        { name: "React Router", level: 80, icon: <span className="text-lg">🔄</span> },
        { name: "Tailwind CSS", level: 85, icon: <SiTailwindcss className="text-lg text-cyan-300" /> },
        { name: "Next.js", level: 90, icon: <RiNextjsFill className="text-lg text-cyan-300" /> },
      ]
    },
    {
      name: "Backend & Deployment",
      icon: <FaServer className="text-2xl text-green-500" />,
      skills: [
        { name: "Node.js", level: 80, icon: <SiNodedotjs className="text-lg text-green-500" /> },
        { name: "Express.js", level: 75, icon: <SiExpress className="text-lg text-gray-100" /> },
        { name: "REST APIs", level: 85, icon: <span className="text-lg">🔗</span> },
        { name: "Firebase", level: 80, icon: <SiFirebase className="text-lg text-yellow-500" /> },
        { name: "MongoDB", level: 78, icon: <SiMongodb className="text-lg text-green-600" /> },
        { name: "Vercel", level: 85, icon: <SiVercel className="text-lg text-black dark:text-white" /> },
        { name: "Netlify", level: 90, icon: <SiNetlify className="text-lg text-teal-400" /> }
      ]
    },
    {
      name: "Tools & Workflow",
      icon: <FaTools className="text-2xl text-purple-400" />,
      skills: [
        { name: "VS Code", level: 90, icon: <span className="text-lg">⌨</span> },
        { name: "Git/GitHub", level: 85, icon: <span className="text-lg">⎇</span> },
        { name: "Postman", level: 75, icon: <span className="text-lg">📡</span> },
        { 
          name: "Design Tools", 
          level: 65, 
          icon: <FaPalette className="text-lg text-pink-500" />,
          description: "Implementing existing designs using Figma/Canva" 
        }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden">

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
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            My development toolkit and implementation capabilities
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-br from-purple-900/40 to-blue-900/40">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.name}</h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <div className="text-gray-300 group-hover:text-purple-300 transition-colors">
                          {skill.icon}
                        </div>
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    
                    {/* Progress bar */}
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="h-full rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.3 + (skillIndex * 0.1) }}
                        viewport={{ once: true }}
                        style={{
                          background: catIndex === 0 
                            ? 'linear-gradient(90deg, rgba(34,211,238,0.8) 0%, rgba(6,182,212,0.8) 100%)' 
                            : catIndex === 1
                            ? 'linear-gradient(90deg, rgba(74,222,128,0.8) 0%, rgba(22,163,74,0.8) 100%)'
                            : 'linear-gradient(90deg, rgba(192,132,252,0.8) 0%, rgba(147,51,234,0.8) 100%)'
                        }}
                      />
                    </div>

                    {/* Special description for design tools */}
                    {skill.description && (
                      <p className="text-xs text-gray-500 mt-1 italic">
                        {skill.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Implementation note */}
        <motion.div
          className="mt-12 bg-gray-800/30 border border-purple-900/50 rounded-xl p-6 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <SiFigma className="text-xl text-purple-400" />
            <SiCanva className="text-xl text-blue-400" />
          </div>
          <h4 className="text-lg font-semibold text-white mb-2">Design Implementation</h4>
          <p className="text-gray-400">
            While I don't create original designs, I specialize in accurately translating Figma/Canva designs into fully functional websites with pixel-perfect precision.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;