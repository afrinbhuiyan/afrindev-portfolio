import React from 'react';

const Banner = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 to-[264653] text-white">
            <div className="container mx-auto px-4 text-center">
                {/* Profile Image */}
                <div className="mx-auto mb-8 w-40 h-40 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg">
                    <img 
                        // src="/profile.jpg" 
                        alt="Your Name" 
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Designation & Intro */}
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Hi, I'm <span className="text-blue-400">Afrin</span>
                </h1>
                <h2 className="text-2xl md:text-3xl mb-6">
                    Full Stack Developer
                </h2>
                <p className="max-w-2xl mx-auto text-lg mb-8">
                    I build exceptional digital experiences with modern web technologies.
                </p>

                {/* Resume Download Button */}
                <a
                    // href="/resume.pdf"
                    download
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 mr-4"
                >
                    Download Resume
                </a>

                {/* Social Links */}
                <div className="mt-12 flex justify-center space-x-6">
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400 transition">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400 transition">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400 transition">
                        <i className="fab fa-twitter"></i>
                    </a>
                </div>

                {/* Scroll Indicator (Optional) */}
                <div className="mt-20 animate-bounce">
                    <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default Banner;