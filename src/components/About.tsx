
import { Code2, Database, Smartphone, Globe, Zap, Heart } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Frontend Mastery",
      description: "Crafting pixel-perfect, interactive interfaces with modern frameworks and cutting-edge design principles"
    },
    {
      icon: Database,
      title: "Backend Excellence",
      description: "Building scalable, secure server architectures and robust APIs that power amazing applications"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Approach",
      description: "Designing responsive experiences that work flawlessly across all devices and screen sizes"
    },
    {
      icon: Globe,
      title: "Full Stack Innovation",
      description: "End-to-end development expertise from initial concept to production deployment"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-6 py-3 mb-8">
            <Heart className="h-5 w-5 text-purple-400" />
            <span className="text-purple-400 font-medium">About Me</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Passionate About
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Creating Impact
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-xl text-gray-300 leading-relaxed">
                I'm a <span className="text-purple-400 font-semibold">passionate full stack developer</span> who 
                believes in the power of technology to transform ideas into reality. My journey began with 
                curiosity and has evolved into a deep love for crafting digital experiences that matter.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Every line of code I write is driven by the desire to create something meaningful. 
                I specialize in building applications that are not just functional, but 
                <span className="text-pink-400 font-semibold"> beautiful, intuitive, and impactful</span>.
              </p>
            </div>

            {/* Achievement Cards */}
            <div className="grid grid-cols-2 gap-6">
              <div className="group bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 p-6 rounded-2xl hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
                <div className="flex items-center space-x-3 mb-2">
                  <Zap className="h-6 w-6 text-purple-400" />
                  <h3 className="text-3xl font-bold text-white">5+ </h3>
                </div>
                <p className="text-gray-400 font-medium">Projects Built</p>
              </div>
              <div className="group bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/20 p-6 rounded-2xl hover:border-pink-400/40 transition-all duration-300 hover:scale-105">
                <div className="flex items-center space-x-3 mb-2">
                  {/* <Code2 className="h-6 w-6 text-pink-400" /> */}
                  <h3 className="text-3xl font-bold text-white">30+</h3>
                </div>
                <p className="text-gray-400 font-medium">Days of Daily Coding</p>
              </div>
            </div>

            {/* Philosophy */}
            <div className="bg-gradient-to-r from-purple-500/5 to-pink-500/5 border border-purple-500/20 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">My Philosophy</h3>
              <p className="text-gray-300 leading-relaxed">
                "Great software isn't just about clean code—it's about understanding people, 
                solving real problems, and creating experiences that users love."
              </p>
            </div>
          </div>

          {/* Right Content - Highlights Grid */}
          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 p-8 rounded-2xl hover:border-purple-500/30 transition-all duration-500 hover:scale-105 hover:bg-gradient-to-br hover:from-purple-500/5 hover:to-pink-500/5"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="h-7 w-7 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                      {item.description}
                    </p>
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

export default About;