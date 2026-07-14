import {motion} from 'framer-motion';
import {Github, Mail, Globe} from 'lucide-react';
import {ObfuscatedMail} from './ObfuscatedMail.tsx';
import {ROLES} from '../data/content.ts';
import type {TeamMember} from '../data/types.ts';

export const TeamMemberCard = (member: TeamMember) => (
    <motion.div
        whileHover={{y: -5}}
        className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-white/10 bg-[#121212] p-6 text-center shadow-lg transition-all duration-300 hover:border-[#00A3FF]/40"
    >
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
        <div className="absolute top-0 h-1 w-full origin-left scale-x-0 bg-[#00A3FF] transition-transform duration-500 group-hover:scale-x-100"></div>

        <div className="relative z-10 mb-5 h-28 w-28 rounded-full border-2 border-[#00A3FF]/30 p-1 transition-colors group-hover:border-[#00A3FF]">
            <img
                src={member.imageLink}
                alt={member.name}
                className="h-full w-full rounded-full bg-gray-800 object-cover"
            />
        </div>

        <div className="relative z-10 w-full">
            <h4 className="mb-1 text-xl font-bold text-white">{member.name}</h4>
            <span className="mb-4 block font-mono text-sm text-gray-500">@{member.nickname.toLowerCase()}</span>

            <div className="mb-6 flex justify-center gap-2">
                {member.roles.map((roleId: number) => {
                    const roleData = ROLES.find((r) => r.id === roleId);
                    if (!roleData) return null;
                    return (
                        <span
                            key={roleData.id}
                            className="rounded-md border px-3 py-1 text-xs font-bold tracking-wider"
                            style={{
                                backgroundColor: `${roleData.bgColor}1A`,
                                color: roleData.textColor,
                                borderColor: `${roleData.borderColor}33`,
                            }}
                        >
                            {roleData.role}
                        </span>
                    );
                })}
            </div>

            <div className="flex w-full justify-center gap-3">
                {/* Obfuscated Member Mail */}
                <ObfuscatedMail
                    email={member.email}
                    className="group/icon flex flex-1 items-center justify-center rounded-lg bg-white/5 py-2 text-gray-400 transition-all hover:bg-[#00A3FF] hover:text-white"
                    title="Email"
                >
                    <Mail size={18} />
                </ObfuscatedMail>

                <a
                    href={member.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1 items-center justify-center rounded-lg bg-white/5 py-2 text-gray-400 transition-all hover:bg-[#00A3FF] hover:text-white"
                    title="GitHub"
                >
                    <Github size={18} />
                </a>
                <a
                    href={member.website}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1 items-center justify-center rounded-lg bg-white/5 py-2 text-gray-400 transition-all hover:bg-[#00A3FF] hover:text-white"
                    title="Website"
                >
                    <Globe size={18} />
                </a>
            </div>
        </div>
    </motion.div>
);
