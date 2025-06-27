
import { ArrowDown, Github, Linkedin, Mail, Download, Sparkles, Code2, Instagram } from 'lucide-react';
import mansi from '../../img/mansi.png';




const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-black text-white flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-12">
          {/* Profile Section */}
          <div className="flex justify-center mb-12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                 <img src={mansi} alt="Profile" 
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full border-4 border-black flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-black" />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2 text-purple-400 font-medium">
                <Code2 className="h-5 w-5" />
                <span>Full Stack Developer</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
                <span className="block">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                  Mansi Singh
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
                I’m a self-driven <span className="text-purple-400 font-semibold">Web developer</span> turning curiosity into clean code and ideas 
                <span className="text-pink-400 font-semibold">into interactive experiences.</span>.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 py-8">
              {[
                { number: "5+", label: "Projects Built" },
                { number: "7+", label: "Technologies Explored" },
                { number: "30+", label: "Days of Daily Coding" },
                { number: "∞", label: "Lines of Code & Learning" }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => scrollToSection('projects')}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
        
        
              <a  href="/MansiCV.pdf"
              download
              className="group px-8 py-4 border-2 border-purple-400 text-purple-400 hover:text-white rounded-2xl font-bold text-lg transition-all duration-300 hover:bg-purple-400 hover:scale-105 flex items-center space-x-2"
              >
                <Download className="h-5 w-5 group-hover:animate-bounce" />
                <span>Download My CV</span>
              </a>
              
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              {[
                { icon: Github, href: "https://github.com/mansithakur204", label: "GitHub", color: "hover:text-gray-300" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/mansi-singh-989ab4325/", label: "LinkedIn", color: "hover:text-blue-400" },
                { icon: Instagram, href: "https://www.instagram.com/mansi.singh.official07/", label: "Instagram", color: "hover:text-purple-400" },
                 { icon: Mail, href: "mailto:singhmansi1510@gmail.com?subject=Portfolio Inquiry&body=Hi Mansi,", label: "Email", color: "hover:text-purple-400" }
              ].map(({ icon: Icon, href, label, color }) => (
                <a
                  key={`${label}-${href}`}
                  href={href}
                  className={`group w-14 h-14 bg-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center ${color} transition-all duration-300 hover:scale-110 hover:bg-white/10 border border-white/10 hover:border-purple-400/50`}
                  aria-label={label}
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <button
              onClick={() => scrollToSection('about')}
              className="group flex flex-col items-center space-y-2 text-gray-400 hover:text-purple-400 transition-colors duration-300"
            >
              <span className="text-sm font-medium">Scroll Down</span>
              <ArrowDown className="h-6 w-6 animate-bounce group-hover:text-purple-400" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;