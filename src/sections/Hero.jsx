import React from 'react';
import {motion} from 'framer-motion';
import {ArrowRight} from 'lucide-react';
import {BrandLogo} from '../components/BrandLogo';
import {Bubbles} from '../components/Bubbles';
import {ObfuscatedMail} from '../components/ObfuscatedMail';
import {SOCIALS} from '../data/content';

export const Hero = () => {
    const emailSocial = SOCIALS.find(s => !s.link.startsWith('http'));
    const rawEmail = emailSocial ? emailSocial.link : 'hello@liquid-dev.de';

    return (
        <section id="home" className="relative h-screen flex items-center justify-center pt-20 overflow-hidden"
        >
            <div className="absolute inset-0 opacity-10"
                 style={{
                     backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                     backgroundSize: '40px 40px'
                 }}>
            </div>
            <Bubbles/>
            <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
                <motion.div initial={{scale: 0.8, opacity: 0}} animate={{scale: 1, opacity: 1}}
                            transition={{duration: 0.8}}
                            className="mx-auto mb-8 w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#00A3FF]/5 flex items-center justify-center border border-[#00A3FF]/30 shadow-[0_0_60px_-10px_rgba(0,163,255,0.4)]"
                >
                    <BrandLogo className="w-14 h-14 md:w-20 md:h-20 text-[#00A3FF]"/>
                </motion.div>

                <motion.div initial={{y: 20, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 0.2}}>
                    <h1 className="text-4xl md:text-7xl font-extrabold tracking-tighter mb-6">
                        <ObfuscatedMail email={rawEmail}
                                        className="cursor-pointer hover:opacity-80 transition-opacity duration-300 bg-transparent border-none p-0 font-extrabold tracking-tighter text-4xl md:text-7xl text-white"
                        >
                            LIQUID
                            <span
                                className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A3FF] to-cyan-200"
                            >
                                DEVELOPMENT
                            </span>
                        </ObfuscatedMail>
                    </h1>
                </motion.div>

                <motion.p initial={{y: 20, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 0.4}}
                          className="text-lg md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto font-light">Open-source
                    software development team
                </motion.p>

                <motion.div initial={{y: 20, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 0.6}}
                            className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <a href="#projects"
                       className="px-8 py-3 rounded-full border border-[#00A3FF] hover:bg-[#00A3FF]/10 text-white font-bold transition-all flex items-center justify-center gap-2"
                    >
                        Explore Work
                    </a>

                    {/* Obfuscated Text Button */}
                    <ObfuscatedMail
                        email={rawEmail}
                        className="group flex items-center gap-2 text-white hover:text-gray-400 transition-colors font-medium cursor-pointer"
                    >
                        Contact Team
                        <ArrowRight size={18}
                                    className="group-hover:translate-x-1 transition-transform text-[#00A3FF]"
                        />
                    </ObfuscatedMail>
                </motion.div>
            </div>
        </section>
    );
};
