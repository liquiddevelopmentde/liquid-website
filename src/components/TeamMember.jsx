import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Globe } from 'lucide-react';
import { ObfuscatedMail } from './ObfuscatedMail';

export const TeamMember = ({ name, nickname, img, gh, email, website, role, role2 }) => (
  <motion.div whileHover={{ y: -5 }} className="group relative bg-[#121212] rounded-2xl p-6 border border-white/10 flex flex-col items-center text-center overflow-hidden shadow-lg hover:border-[#00A3FF]/40 transition-all duration-300">
    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="absolute top-0 w-full h-1 bg-[#00A3FF] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    
    <div className="w-28 h-28 rounded-full mb-5 p-1 border-2 border-[#00A3FF]/30 group-hover:border-[#00A3FF] transition-colors relative z-10">
        <img src={img} alt={name} className="w-full h-full rounded-full object-cover bg-gray-800" />
    </div>
    
    <div className="relative z-10 w-full">
      <h4 className="text-xl font-bold text-white mb-1">{name}</h4>
      <span className="text-sm font-mono text-gray-500 mb-4 block">@{nickname.toLowerCase()}</span>
      
      <div className="flex gap-2 justify-center mb-6">
        <span className="px-3 py-1 rounded-md bg-[#00A3FF]/10 text-[#00A3FF] text-xs font-bold border border-[#00A3FF]/20 tracking-wider">FOUNDER</span>
        <span className="px-3 py-1 rounded-md bg-blue-500/10 text-blue-300 text-xs font-bold border border-blue-500/20 tracking-wider">DEVELOPER</span>
      </div>
      
      <div className="flex gap-3 justify-center w-full">
        {/* Obfuscated Member Mail */}
        <ObfuscatedMail 
          email={email} 
          className="flex-1 py-2 rounded-lg bg-white/5 hover:bg-[#00A3FF] hover:text-white text-gray-400 transition-all flex justify-center items-center group/icon"
          title="Email"
        >
          <Mail size={18} />
        </ObfuscatedMail>

        <a href={gh} target="_blank" rel="noreferrer" className="flex-1 py-2 rounded-lg bg-white/5 hover:bg-[#00A3FF] hover:text-white text-gray-400 transition-all flex justify-center items-center" title="GitHub">
          <Github size={18} />
        </a>
        <a href={website} target="_blank" rel="noreferrer" className="flex-1 py-2 rounded-lg bg-white/5 hover:bg-[#00A3FF] hover:text-white text-gray-400 transition-all flex justify-center items-center" title="Website">
          <Globe size={18} />
        </a>
      </div>
    </div>
  </motion.div>
);
