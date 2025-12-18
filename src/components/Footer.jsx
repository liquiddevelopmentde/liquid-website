import React from 'react';
import {Github, Mail} from 'lucide-react';
import {BrandLogo} from './BrandLogo';
import {SOCIALS} from '../data/content';

export const Footer = () => (
    <footer id="contact" className="py-12 border-t border-white/10 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-[#00A3FF] blur-[100px] opacity-50"></div>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3"><BrandLogo className="w-8 h-8 text-gray-600"/>
                <span className="font-bold text-gray-500">LIQUID DEVELOPMENT</span>
            </div>
            <div className="flex gap-8">
                <a href={SOCIALS.github}
                   className="text-gray-400 hover:text-[#00A3FF] transition-colors"
                >
                    <Github size={24}/>
                </a>
                <a href={SOCIALS.email}
                   className="text-gray-400 hover:text-[#00A3FF] transition-colors"
                >
                    <Mail size={24}/>
                </a>
            </div>
        </div>
        <div className="text-center mt-8 text-gray-600 text-sm">&copy; {new Date().getFullYear()} Liquid Development.
            All rights reserved.
        </div>
    </footer>
);
