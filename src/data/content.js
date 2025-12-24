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
        imageLink: "https://github.com/flixcoo.png",
        githubLink: "https://github.com/flixcoo",
        email: "felix@liquid-dev.de",
        website: "https://felixkirchner.de"
    },
    {
        name: "Yannick",
        nickname: "Gelbeinhalb",
        roles: [0, 1],
        imageLink: "https://github.com/GelbEinhalb.png",
        githubLink: "https://github.com/GelbEinhalb",
        email: "yannick@liquid-dev.de",
        website: "https://yannick-weigert.de"
    },
    {
        name: "Mathis",
        nickname: "Sneeex",
        roles: [0, 1],
        imageLink: "https://github.com/sneeex.png",
        githubLink: "https://github.com/sneeex",
        email: "mathis@liquid-dev.de",
        website: "https://mathiskirchner.de"
    }
];


export const ROLES = [
    {id: 0, role: "FOUNDER", bgColor: "#1e40af", borderColor: "#1e40af", textColor: "#60a5fa"},
    {id: 1, role: "DEVELOPER", bgColor: "#0284c7", borderColor: "#0284c7", textColor: "#00b8f9"},
];
