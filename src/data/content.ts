import {Github, Mail} from 'lucide-react';
import {FaDiscord} from 'react-icons/fa';
import type {Role, SocialIcon, TeamMember} from './types.ts';

export const NAV_LINKS = ['Home', 'Projects', 'Team'];

export const SOCIALS: SocialIcon[] = [
    {
        name: 'GitHub',
        link: 'https://github.liquid-dev.de',
        icon: Github,
    },
    {
        name: 'Discord',
        link: 'https://discord.liquid-dev.de',
        icon: FaDiscord,
    },
    {
        name: 'E-Mail',
        link: 'hello@liquid-dev.de',
        icon: Mail,
    },
];

export const TEAM_MEMBERS: TeamMember[] = [
    {
        name: 'Felix',
        nickname: 'Flixcoo',
        roles: [0, 2, 3],
        imageLink: 'https://github.com/flixcoo.png',
        githubLink: 'https://github.com/flixcoo',
        email: 'felix@liquid-dev.de',
        website: 'https://felixkirchner.de',
    },
    {
        name: 'Yannick',
        nickname: 'Gelbeinhalb',
        roles: [1, 4],
        imageLink: 'https://github.com/GelbEinhalb.png',
        githubLink: 'https://github.com/GelbEinhalb',
        email: 'yannick@liquid-dev.de',
        website: 'https://yannick-weigert.de',
    },
    {
        name: 'Mathis',
        nickname: 'Sneeex',
        roles: [0, 1, 2],
        imageLink: 'https://github.com/sneeex.png',
        githubLink: 'https://github.com/sneeex',
        email: 'mathis@liquid-dev.de',
        website: 'https://mathiskirchner.de',
    },
];

export const ROLES: Role[] = [
    {id: 0, role: 'frontend', bgColor: '#0284c7', borderColor: '#0284c7', textColor: '#00b8f9'},
    {id: 1, role: 'backend', bgColor: '#9f1239', borderColor: '#9f1239', textColor: '#fb7185'},
    {id: 2, role: 'ui/ux', bgColor: '#6d28d9', borderColor: '#6d28d9', textColor: '#a78bfa'},
    {id: 3, role: 'devops', bgColor: '#065f46', borderColor: '#065f46', textColor: '#34d399'},
    {id: 4, role: 'server admin', bgColor: '#92400e', borderColor: '#92400e', textColor: '#fbbf24'},
];
