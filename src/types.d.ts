import { IconType } from "react-icons/lib";

export interface Technology {
    text: string;
    Icon: IconType;
    color?: string;
}

export interface Project {
    codeurl: string;
    description: string;
    mainImage: {
        asset: {
            url: string;
        };
    };
    technologies: Array<string>;
    title: string;
    website: string;
}
