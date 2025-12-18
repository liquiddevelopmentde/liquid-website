import React from 'react';
import { Github, Mail } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { ObfuscatedMail } from './ObfuscatedMail';
import { NAV_LINKS, SOCIALS } from '../data/content';

export const Navbar = () => {
  // Extract email address from "mailto:..." string if necessary
  const rawEmail = SOCIALS.email.replace('mailto:', '');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0e0e0e]/90 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <BrandLogo className="w-8 h-8 text-[#00A3FF]" />
          <span className="font-bold text-lg md:text-xl tracking-wider text-white">LIQUID <span className="text-[#00A3FF]">DEVELOPMENT</span></span>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-300 items-center">
          {NAV_LINKS.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#00A3FF] transition-colors uppercase tracking-wide text-xs">{item}</a>
          ))}
          
          <a href={SOCIALS.github} target="_blank" rel="noreferrer" className="bg-white/10 hover:bg-[#00A3FF] text-white p-2 rounded-full transition-all" title="GitHub">
            <Github size={18} />
          </a>

          {/* Obfuscated Email Button */}
          <ObfuscatedMail 
            email={rawEmail} 
            className="bg-white/10 hover:bg-[#00A3FF] text-white p-2 rounded-full transition-all flex items-center justify-center"
            title="Contact Us"
          >
            <Mail size={18} />
          </ObfuscatedMail>
        </div>
      </div>
    </nav>
  );
};
