import {Github, Smartphone} from 'lucide-react';
import {FadeInWhenVisible} from '../utils/animations.tsx';

export const Projects = () => (
    <section id="projects" className="relative z-10 overflow-hidden bg-gradient-to-b from-[#0e0e0e] to-[#050505] py-32">
        {/* Background */}
        <div className="pointer-events-none absolute right-0 top-1/4 h-1/2 w-1/2 rounded-full bg-[#00A3FF]/10 blur-[120px]"></div>

        {/* Title */}
        <div className="mx-auto max-w-7xl px-6">
            <div className="mb-20">
                <h2 className="mb-4 text-4xl font-bold md:text-5xl">Projects</h2>
                <div className="h-1 w-24 rounded-full bg-[#00A3FF]"></div>
            </div>

            {/* Section */}
            <FadeInWhenVisible>
                <div className="grid items-center gap-12 rounded-3xl border border-white/10 bg-[#121212] p-8 shadow-2xl transition-all duration-500 hover:border-[#00A3FF]/30 md:p-12 lg:grid-cols-2">
                    <div>
                        {/* Badge */}
                        <div className="mb-6 inline-flex select-none items-center gap-2 rounded-full border border-[#00A3FF]/20 bg-[#00A3FF]/10 px-3 py-1 text-xs font-bold text-[#00A3FF]">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-[#00A3FF]"></span>
                            IN DEVELOPMENT
                        </div>

                        {/* Title */}
                        <h3 className="mb-4 text-3xl font-bold text-white md:text-4xl">Tallee</h3>

                        {/* Description */}
                        <p className="mb-6 text-lg leading-relaxed text-gray-300">
                            An all-in-one app to track card- and board games, manage players and groups and get
                            statistics about your played games.
                        </p>

                        {/* Github Links */}
                        <div className={'flex gap-3'}>
                            <a
                                href="https://github.com/LiquidDevelopmentDE/tallee-app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1 text-sm font-semibold text-gray-400 transition-all duration-200 hover:scale-105"
                            >
                                <Github className={'size-5'}></Github>
                                App Repository
                            </a>
                            <a
                                href="https://github.com/LiquidDevelopmentDE/tallee-be"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1 text-sm font-semibold text-gray-400 transition-all duration-200 hover:scale-105"
                            >
                                <Github className={'size-5'}></Github>
                                Backend Repository
                            </a>
                        </div>
                    </div>

                    {/* App Preview */}
                    <div className="group relative flex h-[460px] items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-gray-900 to-black">
                        {/* Background */}
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

                        {/* Screenshots*/}
                        <div className={'flex flex-row gap-5 transition-all duration-500 group-hover:gap-10'}>
                            <img
                                src={'screenshot-1.webp'}
                                alt="App Screenshot"
                                className="h-[400px] transition-all duration-500 group-hover:-rotate-2 group-hover:scale-105"
                            />
                            <img
                                src={'screenshot-2.webp'}
                                alt="App Screenshot"
                                className="h-[400px] transition-all duration-500 group-hover:rotate-2 group-hover:scale-105"
                            />
                        </div>

                        {/* Soon Available Badge */}
                        <div className="absolute bottom-6 right-6 z-30 flex transform select-none items-center gap-3 rounded-lg border border-[#00A3FF]/50 bg-black/80 p-3 shadow-lg backdrop-blur-md transition-transform duration-500 group-hover:translate-y-2">
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
