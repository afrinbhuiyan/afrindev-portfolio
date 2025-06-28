import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
                    About <span className="text-blue-600">Me</span>
                </h2>
                
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Personal Story */}
                    <div className="lg:w-1/2">
                        <h3 className="text-2xl font-semibold mb-4 text-gray-700">My Journey</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Hello! I'm Afrin, a passionate Full Stack Developer with 2 years of experience building web applications. 
                            My coding journey began when I built my first HTML website in college, and I've been hooked ever since.
                        </p>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            I specialize in the MERN stack (MongoDB, Express, React, Node.js) and love creating seamless user experiences. 
                            What excites me most about programming is solving complex problems with elegant solutions.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            When I'm not coding, you'll find me hiking in nature, reading sci-fi novels, or experimenting with new recipes in the kitchen. 
                            I believe a balanced life makes me a better developer.
                        </p>
                    </div>

                    {/* Skills Section */}
                    <div className="lg:w-1/2 w-full">
                        <h3 className="text-2xl font-semibold mb-6 text-gray-700">My Skills</h3>
                        
                        <div className="space-y-4">
                            {/* Frontend Skills */}
                            <div>
                                <h4 className="text-lg font-medium text-gray-700 mb-2">Frontend</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'].map(skill => (
                                        <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Backend Skills */}
                            <div>
                                <h4 className="text-lg font-medium text-gray-700 mb-2">Backend</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['Node.js', 'Express', 'MongoDB', 'REST APIs'].map(skill => (
                                        <span key={skill} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Tools */}
                            <div>
                                <h4 className="text-lg font-medium text-gray-700 mb-2">Tools</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['Git', 'VS Code', 'Postman', 'Figma'].map(skill => (
                                        <span key={skill} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Education */}
                        <div className="mt-8">
                            <h3 className="text-2xl font-semibold mb-4 text-gray-700">Education</h3>
                            <div className="bg-white p-4 rounded-lg shadow">
                                <h4 className="font-medium text-gray-800">Bachelor of Science in Computer Science</h4>
                                <p className="text-gray-600">University Name, 2020-2024</p>
                                <p className="text-gray-500 text-sm mt-1">GPA: 3.8/4.0</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;