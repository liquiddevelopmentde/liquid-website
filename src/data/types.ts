
import type {IconType} from "react-icons";

export interface SocialIcon {
    name: string;
    link: string;
    icon: IconType;
}

export interface TeamMember {
    name: string;
    nickname: string;
    roles: number[];
    imageLink: string;
    githubLink: string;
    email: string;
    website: string;
}

export interface Role {
    id: number;
    role: string;
    bgColor: string;
    borderColor: string;
    textColor: string;
}