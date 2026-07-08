import {ArrowRight, Smartphone} from 'lucide-react';
import {FadeInWhenVisible} from '../utils/animations.tsx';

export const Projects = () => (
    <section id="projects" className="relative z-10 overflow-hidden bg-gradient-to-b from-[#0e0e0e] to-[#050505] py-32">
        <div className="pointer-events-none absolute right-0 top-1/4 h-1/2 w-1/2 rounded-full bg-[#00A3FF]/10 blur-[120px]"></div>
        <div className="mx-auto max-w-7xl px-6">
            <div className="mb-20">
                <h2 className="mb-4 text-4xl font-bold md:text-5xl">Projects</h2>
                <div className="h-1 w-24 rounded-full bg-[#00A3FF]"></div>
            </div>
            <FadeInWhenVisible>
                <div className="grid items-center gap-12 rounded-3xl border border-white/10 bg-[#121212] p-8 shadow-2xl transition-all duration-500 hover:border-[#00A3FF]/30 md:p-12 lg:grid-cols-2">
                    <div>
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#00A3FF]/20 bg-[#00A3FF]/10 px-3 py-1 text-xs font-bold text-[#00A3FF]">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-[#00A3FF]"></span>
                            IN DEVELOPMENT
                        </div>
                        <h3 className="mb-4 text-3xl font-bold text-white md:text-4xl">GameTracker App</h3>
                        <p className="mb-6 text-lg leading-relaxed text-gray-300">
                            An all-in-one app to track card- and board games, manage players and groups and get
                            statistics about your played games.
                        </p>
                        <div className="mb-8 flex flex-wrap gap-2">
                            {['Flutter', 'iOS', 'Android', 'Statistics'].map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-400"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <a
                            href="https://github.com/LiquidDevelopmentDE/game-tracker"
                            target="_blank"
                            rel="noreferrer"
                            className="group inline-flex items-center font-semibold text-white transition-colors hover:text-[#00A3FF]"
                        >
                            View Project Repository
                            <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
                        </a>
                    </div>
                    <div className="group relative flex h-[460px] items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-gray-900 to-black">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <div className="relative flex h-[370px] w-[180px] transform flex-col overflow-hidden rounded-[2.5rem] border-[6px] border-gray-700 bg-gray-800 shadow-2xl transition-all duration-500 group-hover:rotate-[-2deg] group-hover:scale-105">
                            <div className="absolute left-1/2 top-0 z-20 h-6 w-24 -translate-x-1/2 rounded-b-xl bg-black"></div>
                            <div className="flex h-full flex-col bg-gray-900 px-3 pt-10">
                                <div className="mb-5 h-5 w-24 self-center rounded bg-[#00A3FF]/20"></div>
                                <div className="mb-3 grid grid-cols-2 gap-2">
                                    <div className="h-20 rounded-lg border border-white/5 bg-gray-800"></div>
                                    <div className="h-20 rounded-lg border border-white/5 bg-gray-800"></div>
                                </div>
                                <div className="mb-3 h-28 rounded-lg border border-white/5 bg-gray-800"></div>
                                <div className="mt-2 flex-1 rounded-t-xl border-t border-white/5 bg-gray-800/50"></div>
                            </div>
                        </div>
                        <div className="absolute bottom-6 right-6 z-30 flex transform items-center gap-3 rounded-lg border border-[#00A3FF]/50 bg-black/80 p-3 shadow-lg backdrop-blur-md transition-transform group-hover:translate-y-2">
                            <div className="text-right">
                                <div className="text-xs text-gray-400">Soon available on</div>
                                <div className="text-sm font-bold text-white">iOS & Android</div>
                            </div>
                            <Smartphone size={24} className="text-[#00A3FF]" />
                        </div>
                    </div>
                </div>
            </FadeInWhenVisible>
        </div>
    </section>
);
