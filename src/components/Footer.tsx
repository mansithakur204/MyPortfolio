import React from 'react';
import { Code2, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Side - Brand */}
          <div className="flex items-center space-x-4 mb-8 md:mb-0">
            <div className="relative">
              <Code2 className="h-10 w-10 text-purple-400" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Mansi Singh
              </span>
              <div className="text-sm text-gray-400 font-medium">Full Stack Developer</div>
            </div>
          </div>
          
          {/* Center - Made with Love */}
          <div className="flex items-center space-x-3 text-gray-400 mb-8 md:mb-0">
            <span>Crafted with</span>
            <Heart className="h-5 w-5 text-red-500 fill-current animate-pulse" />
            <span>and lots of</span>
            <Code2 className="h-5 w-5 text-purple-400" />
          </div>

          {/* Right Side - Back to Top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 px-6 py-3 rounded-2xl text-purple-400 hover:text-white hover:border-purple-400/40 transition-all duration-300 hover:scale-105"
          >
            <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform" />
            <span className="font-medium">Back to Top</span>
          </button>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Mansi Singh. All rights reserved. 
            <span className="text-purple-400 ml-2">Building the future, one line of code at a time.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;