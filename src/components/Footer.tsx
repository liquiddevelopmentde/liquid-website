import {BrandLogo} from './BrandLogo.tsx';
import {ObfuscatedMail} from './ObfuscatedMail.tsx';
import {SOCIALS} from '../data/content.ts';
import {Link} from 'react-router-dom';

export const Footer = () => (
    <footer
        id="contact"
        className="relative shrink-0 overflow-hidden border-t border-white/10 bg-black pb-6 pt-8 md:py-12"
    >
        <div className="absolute left-1/2 top-0 h-1 w-1/2 -translate-x-1/2 bg-[#00A3FF] opacity-50 blur-[100px]"></div>
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row md:gap-8">
            <div className="flex items-center gap-3">
                <BrandLogo className="h-8 w-8 text-gray-600" />
                <span className="font-bold text-gray-500">LIQUID DEVELOPMENT</span>
            </div>
            <div className="flex gap-8">
                {SOCIALS.map((social) => {
                    const Icon = social.icon;
                    const isEmail = !!social.email;

                    if (isEmail) {
                        return (
                            <ObfuscatedMail
                                key={social.name}
                                email={social.email!}
                                className="text-gray-400 transition-colors hover:text-[#00A3FF]"
                                title={social.name}
                            >
                                <Icon size={24} />
                            </ObfuscatedMail>
                        );
                    }

                    return (
                        <a
                            key={social.name}
                            href={social.link}
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-400 transition-colors hover:text-[#00A3FF]"
                            title={social.name}
                        >
                            <Icon size={24} />
                        </a>
                    );
                })}
            </div>
        </div>
        <div className="mt-4 flex flex-col justify-center gap-2 text-center text-sm text-gray-600">
            <Link
                className="text-center text-sm text-gray-600 underline transition-colors hover:text-gray-300"
                to={'/legal'}
            >
                Legal Notice
            </Link>
            &copy; 2021 - {new Date().getFullYear()} Liquid Development. All rights reserved.
        </div>
    </footer>
);
