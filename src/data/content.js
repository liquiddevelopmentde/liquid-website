import { Github, Mail } from 'lucide-react';

export const NAV_LINKS = ['Home', 'Projects', 'Team'];

export const SOCIALS = [
    {
        name: "GitHub",
        link: "https://github.com/LiquidDevelopmentDE/",
        icon: Github
    },
    {
        name: "E-Mail",
        link: "hello@liquid-dev.de",
        icon: Mail
    }
];

export const TEAM_MEMBERS = [
    {
        name: "Felix",
        nickname: "Flixcoo",
        roles: [0, 1],
        img: "https://github.com/flixcoo.png",
        gh: "https://github.com/flixcoo",
        email: "felix@liquid-dev.de",
        website: "https://felixkirchner.de"
    },
    {
        name: "Yannick",
        nickname: "Gelbeinhalb",
        roles: [0, 1],
        img: "https://github.com/GelbEinhalb.png",
        gh: "https://github.com/GelbEinhalb",
        email: "yannick@liquid-dev.de",
        website: "https://yannick-weigert.de"
    },
    {
        name: "Mathis",
        nickname: "Sneeex",
        roles: [0, 1],
        img: "https://github.com/sneeex.png",
        gh: "https://github.com/sneeex",
        email: "mathis@liquid-dev.de",
        website: "https://mathiskirchner.de"
    }
];


export const ROLES = [
    {id: 0, role: "FOUNDER", bgColor: "#00A3FF", borderColor: "#00A3FF", textColor: "#00A3FF"},
    {id: 1, role: "DEVELOPER", bgColor: "#3b82f6", borderColor: "#3b82f6", textColor: "#93c5fd"},
];
