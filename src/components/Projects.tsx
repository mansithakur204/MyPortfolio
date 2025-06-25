import React from 'react';
import { ExternalLink, Github, Eye, Star, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with modern UI/UX, real-time inventory management, secure payment processing, and advanced analytics dashboard.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      stats: { stars: 124, forks: 45 }
    },
    {
      title: "AI Task Management",
      description: "Intelligent task management system with AI-powered prioritization, natural language processing, and predictive analytics for productivity optimization.",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "TypeScript", "Python", "OpenAI", "FastAPI", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      stats: { stars: 89, forks: 32 }
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "Advanced analytics platform with real-time data visualization, custom reporting, and interactive charts for business intelligence.",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "D3.js", "WebSocket", "PostgreSQL", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      stats: { stars: 67, forks: 23 }
    },
    {
      title: "Social Media Automation",
      description: "Comprehensive social media management tool with content scheduling, analytics tracking, and multi-platform integration.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "GraphQL", "AWS", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      stats: { stars: 156, forks: 78 }
    },
    {
      title: "Blockchain Voting System",
      description: "Secure, transparent voting platform built on blockchain technology with smart contracts and decentralized verification.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Solidity", "Web3.js", "Ethereum", "IPFS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      stats: { stars: 203, forks: 91 }
    },
    {
      title: "AR Shopping Experience",
      description: "Augmented reality shopping application that allows users to visualize products in their space before purchasing.",
      image: "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React Native", "ARKit", "Three.js", "Firebase"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      stats: { stars: 98, forks: 34 }
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-6 py-3 mb-8">
            <Zap className="h-5 w-5 text-purple-400" />
            <span className="text-purple-400 font-medium">My Work</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Featured
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of projects that demonstrate my passion for creating innovative solutions
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-16 mb-24">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`group grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} relative`}>
                <div className="relative overflow-hidden rounded-3xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center space-x-3 text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400" />
                        <span className="text-sm">{project.stats.stars}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Github className="h-4 w-4" />
                        <span className="text-sm">{project.stats.forks}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-purple-300 px-4 py-2 rounded-xl text-sm font-medium hover:border-purple-400/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    className="group/btn flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-2xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                  >
                    <Eye className="h-5 w-5 group-hover/btn:animate-pulse" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="group/btn flex items-center space-x-2 border-2 border-gray-600 text-gray-300 hover:text-white hover:border-purple-400 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-105"
                  >
                    <Github className="h-5 w-5 group-hover/btn:rotate-12 transition-transform" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            More Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-3xl overflow-hidden hover:border-purple-500/30 transition-all duration-500 hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4 flex items-center space-x-2 text-white text-sm">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span>{project.stats.stars}</span>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <h4 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-lg text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-lg text-xs font-medium">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-3 pt-2">
                    <a
                      href={project.liveUrl}
                      className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 inline mr-1" />
                      Live
                    </a>
                    <a
                      href={project.githubUrl}
                      className="text-gray-400 hover:text-gray-300 text-sm font-medium transition-colors"
                    >
                      <Github className="h-4 w-4 inline mr-1" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;