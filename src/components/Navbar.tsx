import {BrandLogo} from './BrandLogo.tsx';
import {NAV_LINKS, SOCIALS} from "../data/content.ts";
import {ObfuscatedMail} from "./ObfuscatedMail.tsx";


export const Navbar = () => {
    return (
        <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-[#0e0e0e]/90 backdrop-blur-xl">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
                <div className="flex items-center gap-3">
                    <BrandLogo className="h-8 w-8 text-[#00A3FF]"/>
                    <span className="text-lg font-bold tracking-wider text-white md:text-xl">
                        LIQUID <span className="text-[#00A3FF]">DEVELOPMENT</span>
                    </span>
                </div>
                <div className="hidden items-center gap-6 text-sm font-medium text-gray-300 md:flex">
                    {NAV_LINKS.map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`}
                           className="text-xs uppercase tracking-wide transition-colors hover:text-[#00A3FF]">{item}
                        </a>
                    ))}

                    {SOCIALS.map((social) => {
                        const Icon = social.icon;
                        const isEmail = !social.link.startsWith('http');

                        if (isEmail) {
                            return (
                                <ObfuscatedMail
                                    key={social.name}
                                    email={social.link}
                                    className="flex items-center justify-center rounded-full bg-white/10 p-2 text-white transition-all hover:bg-[#00A3FF]"
                                    title={social.name}
                                >
                                    <Icon size={18}/>
                                </ObfuscatedMail>
                            );
                        }

                        return (
                            <a
                                key={social.name}
                                href={social.link}
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-full bg-white/10 p-2 text-white transition-all hover:bg-[#00A3FF]"
                                title={social.name}
                            >
                                <Icon size={18}/>
                            </a>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};
