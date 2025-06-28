import React, { useState } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const MyProjects = () => {
    const [projects] = useState([
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "A full-featured online store with product filtering, cart functionality, and secure checkout.",
            image: "/ecommerce-demo.jpg",
            technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
            githubLink: "https://github.com/yourusername/ecommerce-platform",
            liveLink: "https://yourstore.example.com",
            challenges: "Implementing real-time inventory updates proved challenging with high traffic volumes.",
            improvements: "Plan to add AI-powered product recommendations and a mobile app version."
        },
        {
            id: 2,
            title: "Task Management App",
            description: "Collaborative task manager with drag-and-drop interface and team permissions.",
            image: "/taskmanager-demo.jpg",
            technologies: ["React", "Firebase", "Tailwind CSS"],
            githubLink: "https://github.com/yourusername/task-manager",
            liveLink: "https://tasks.example.com",
            challenges: "Syncing real-time updates across multiple users required careful state management.",
            improvements: "Will implement calendar view and integration with email reminders."
        },
        {
            id: 3,
            title: "Weather Dashboard",
            description: "Real-time weather visualization with 5-day forecasts and location search.",
            image: "/weather-demo.jpg",
            technologies: ["JavaScript", "OpenWeather API", "Chart.js"],
            githubLink: "https://github.com/yourusername/weather-app",
            liveLink: "https://weatherapp.example.com",
            challenges: "Handling API rate limits while maintaining responsive UI was tricky.",
            improvements: "Planning to add severe weather alerts and historical data comparison."
        }
    ]);

    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
                    My <span className="text-blue-600">Projects</span>
                </h2>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    Here are some of my featured works. Each project was an opportunity to solve unique challenges.
                </p>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map(project => (
                        <div 
                            key={project.id} 
                            className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map(tech => (
                                        <span 
                                            key={tech} 
                                            className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center">
                                    <a 
                                        href={project.githubLink} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-gray-700 hover:text-blue-600 flex items-center"
                                    >
                                        <FiGithub className="mr-1" /> Code
                                    </a>
                                    <a 
                                        href={project.liveLink} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-gray-700 hover:text-blue-600 flex items-center"
                                    >
                                        <FiExternalLink className="mr-1" /> Live Demo
                                    </a>
                                    <button 
                                        onClick={() => setSelectedProject(project)}
                                        className="text-blue-600 hover:text-blue-800 font-medium"
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Project Details Modal */}
                {selectedProject && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                        <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                            <div className="relative">
                                <img 
                                    src={selectedProject.image} 
                                    alt={selectedProject.title} 
                                    className="w-full h-64 object-cover"
                                />
                                <button 
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
                                >
                                    ✕
                                </button>
                            </div>
                            
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                                
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {selectedProject.technologies.map(tech => (
                                        <span 
                                            key={tech} 
                                            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <h4 className="font-semibold text-lg mt-4 mb-2">Project Description</h4>
                                <p className="text-gray-700 mb-4">{selectedProject.description}</p>
                                
                                <h4 className="font-semibold text-lg mt-4 mb-2">Key Challenges</h4>
                                <p className="text-gray-700 mb-4">{selectedProject.challenges}</p>
                                
                                <h4 className="font-semibold text-lg mt-4 mb-2">Future Improvements</h4>
                                <p className="text-gray-700 mb-6">{selectedProject.improvements}</p>
                                
                                <div className="flex space-x-4">
                                    <a 
                                        href={selectedProject.githubLink} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
                                    >
                                        <FiGithub className="mr-2" /> View Code
                                    </a>
                                    <a 
                                        href={selectedProject.liveLink} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                                    >
                                        <FiExternalLink className="mr-2" /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default MyProjects;