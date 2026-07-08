import {ArrowRight, Smartphone} from 'lucide-react';
import {FadeInWhenVisible} from '../utils/animations.tsx';

export const Projects = () => (
    <section id="projects" className="py-32 relative z-10 bg-gradient-to-b from-[#0e0e0e] to-[#050505] overflow-hidden">
        <div
            className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-[#00A3FF]/10 blur-[120px] rounded-full pointer-events-none"
        ></div>
        <div className="max-w-7xl mx-auto px-6">
            <div className="mb-20"><h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
                <div className="h-1 w-24 bg-[#00A3FF] rounded-full"></div>
            </div>
            <FadeInWhenVisible>
                <div
                    className="grid lg:grid-cols-2 gap-12 items-center bg-[#121212] rounded-3xl p-8 md:p-12 border border-white/10 hover:border-[#00A3FF]/30 transition-all duration-500 shadow-2xl"
                >
                    <div>
                        <div
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00A3FF]/10 text-[#00A3FF] text-xs font-bold mb-6 border border-[#00A3FF]/20"
                        >
                            <span className="animate-pulse w-2 h-2 rounded-full bg-[#00A3FF]"></span>
                            IN DEVELOPMENT
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">GameTracker App</h3>
                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                            An all-in-one app to track card- and
                            board games, manage players and groups and get statistics about your played games.
                        </p>
                        <div
                            className="flex flex-wrap gap-2 mb-8"
                        >
                            {['Flutter', 'iOS', 'Android', 'Statistics'].map(tag => (
                                <span key={tag}
                                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-gray-400"
                                >
                                {tag}
                            </span>
                            ))}
                        </div>
                        <a href="https://github.com/LiquidDevelopmentDE/game-tracker"
                           target="_blank"
                           rel="noreferrer"
                           className="inline-flex items-center text-white font-semibold hover:text-[#00A3FF] transition-colors group"
                        >
                            View Project Repository
                            <ArrowRight
                                className="ml-2 group-hover:translate-x-1 transition-transform" size={20}
                            />
                        </a>
                    </div>
                    <div
                        className="relative h-[460px] bg-gradient-to-br from-gray-900 to-black rounded-xl border border-white/10 flex items-center justify-center overflow-hidden group"
                    >
                        <div
                            className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"
                        ></div>
                        <div
                            className="relative w-[180px] h-[370px] bg-gray-800 rounded-[2.5rem] border-[6px] border-gray-700 shadow-2xl flex flex-col overflow-hidden transform group-hover:scale-105 group-hover:rotate-[-2deg] transition-all duration-500"
                        >
                            <div
                                className="h-6 w-24 bg-black absolute top-0 left-1/2 -translate-x-1/2 rounded-b-xl z-20"
                            ></div>
                            <div className="h-full bg-gray-900 flex flex-col pt-10 px-3">
                                <div className="h-5 w-24 bg-[#00A3FF]/20 rounded mb-5 self-center"></div>
                                <div className="grid grid-cols-2 gap-2 mb-3">
                                    <div className="h-20 bg-gray-800 rounded-lg border border-white/5"></div>
                                    <div className="h-20 bg-gray-800 rounded-lg border border-white/5"></div>
                                </div>
                                <div className="h-28 bg-gray-800 rounded-lg border border-white/5 mb-3"></div>
                                <div className="flex-1 bg-gray-800/50 rounded-t-xl border-t border-white/5 mt-2"></div>
                            </div>
                        </div>
                        <div
                            className="absolute bottom-6 right-6 bg-black/80 backdrop-blur-md border border-[#00A3FF]/50 p-3 rounded-lg flex items-center gap-3 shadow-lg transform group-hover:translate-y-2 transition-transform z-30"
                        >
                            <div className="text-right">
                                <div className="text-xs text-gray-400">Soon available on</div>
                                <div className="text-sm font-bold text-white">iOS & Android</div>
                            </div>
                            <Smartphone size={24} className="text-[#00A3FF]"/></div>
                    </div>
                </div>
            </FadeInWhenVisible>
        </div>
    </section>
);
