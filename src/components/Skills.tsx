
import { Code2, Server, Wrench, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code2,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "React", level: 80 },
        { name: "TypeScript", level: 75 },
        { name: "Tailwind CSS", level: 95 },
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 95 }
      ]
    },
    {
      title: "Backend",
      icon: Server,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 85 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "REST APIs", level: 90 }
      ]
    },
    {
      title: "Tools & DevOps",
      icon: Wrench,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Git", level: 95 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Figma", level: 80 },
        { name: "Jest", level: 75 }
      ]
    }
  ];

  const techStack = [
    "React", "Node.js", "TypeScript",
    "MongoDB", "Git", "JavaScript", "Tailwind"
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-6 py-3 mb-8">
            <Zap className="h-5 w-5 text-purple-400" />
            <span className="text-purple-400 font-medium">My Arsenal</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Skills &
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The tools and technologies I use to bring ideas to life
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 p-8 rounded-3xl hover:border-purple-500/30 transition-all duration-500 hover:scale-105"
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className={`w-14 h-14 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-purple-400 font-bold text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                      <div
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Cloud */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-12">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="group bg-gradient-to-r from-gray-800/80 to-gray-900/80 border border-gray-700/50 px-6 py-3 rounded-2xl text-gray-300 font-medium hover:border-purple-500/50 hover:text-white transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;