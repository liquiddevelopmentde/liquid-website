import {motion} from 'framer-motion';
import {ArrowRight} from 'lucide-react';
import {BrandLogo} from '../components/BrandLogo.tsx';
import {Bubbles} from '../components/Bubbles.tsx';
import {ObfuscatedMail} from '../components/ObfuscatedMail.tsx';
import {SOCIALS} from '../data/content.ts';

export const Hero = () => {
    const emailSocial = SOCIALS.find(s => !s.link.startsWith('http'));
    const rawEmail = emailSocial ? emailSocial.link : 'hello@liquid-dev.de';

    return (
        <section
            id="home"
            className="relative flex h-screen items-center justify-center overflow-hidden pt-20"
        >
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                }}
            />

            <Bubbles/>

            <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
                <motion.div
                    initial={{scale: 0.5, opacity: 0}}
                    animate={{scale: 1, opacity: 1}}
                    transition={{duration: 0.5}}
                    className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-[#00A3FF]/30 bg-[#00A3FF]/5 shadow-[0_0_60px_-10px_rgba(0,163,255,0.4)] md:h-32 md:w-32"
                >
                    <BrandLogo className="h-14 w-14 text-[#00A3FF] md:h-20 md:w-20"/>
                </motion.div>

                <motion.div
                    initial={{y: 20, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{delay: 0.2}}
                >
                    <h1 className="mb-6 text-4xl font-extrabold tracking-tighter md:text-7xl">
                        LIQUID
                        <span
                            className="ml-3 bg-gradient-to-r from-[#00A3FF] to-cyan-200 bg-clip-text text-transparent">
                                DEVELOPMENT
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{y: 20, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{delay: 0.4}}
                    className="mx-auto mb-10 max-w-2xl text-lg font-light text-gray-400 md:text-2xl"
                >
                    Open-source software development team
                </motion.p>

                <motion.div
                    initial={{y: 20, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{delay: 0.6}}
                    className="flex flex-col items-center justify-center gap-6 sm:flex-row"
                >
                    <a
                        href={"#projects"}
                        className="flex items-center justify-center gap-2 rounded-full border border-[#00A3FF] px-8 py-3 font-bold text-white transition-all hover:bg-[#00A3FF]/10"
                    >
                        Explore Work
                    </a>

                    <ObfuscatedMail
                        email={rawEmail}
                        className="group flex cursor-pointer items-center gap-2 font-medium text-white transition-colors hover:text-gray-400"
                    >
                        Contact Team
                        <ArrowRight
                            size={18}
                            className="text-[#00A3FF] transition-transform group-hover:translate-x-1"
                        />
                    </ObfuscatedMail>
                </motion.div>
            </div>
        </section>
    );
};
