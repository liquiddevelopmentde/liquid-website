import {Github} from 'lucide-react';
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
                        <div className={'flex flex-col gap-3 md:flex-row'}>
                            <a
                                href="https://github.com/LiquidDevelopmentDE/tallee-app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-gray-400 transition-all duration-200 hover:scale-105 md:py-1"
                            >
                                <Github className={'size-4 md:size-5'}></Github>
                                App Repository
                            </a>
                            <a
                                href="https://github.com/LiquidDevelopmentDE/tallee-be"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-gray-400 transition-all duration-200 hover:scale-105 md:py-1"
                            >
                                <Github className={'size-4 md:size-5'}></Github>
                                Backend Repository
                            </a>
                        </div>
                    </div>

                    {/* App Preview */}
                    <div className="group relative flex h-[460px] items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-gray-900 to-black">
                        {/* Background */}
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

                        {/* Screenshots*/}
                        <div
                            className={
                                'flex -translate-x-40 flex-row gap-5 transition-all duration-500 group-hover:gap-10 md:-translate-x-10 md:group-hover:-translate-x-14'
                            }
                        >
                            <img
                                src={'screenshot-2.webp'}
                                alt="App Screenshot"
                                className="h-[400px] transition-all duration-500 group-hover:rotate-2 group-hover:scale-105"
                            />
                            <img
                                src={'screenshot-1.webp'}
                                alt="App Screenshot"
                                className="h-[400px] transition-all duration-500 group-hover:-rotate-3 group-hover:scale-105"
                            />
                            <img
                                src={'screenshot-3.webp'}
                                alt="App Screenshot"
                                className="h-[400px] transition-all duration-500 group-hover:-rotate-3 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </FadeInWhenVisible>
        </div>
    </section>
);
