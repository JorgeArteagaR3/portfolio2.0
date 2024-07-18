import { DiReact, DiCss3, DiHtml5 } from "react-icons/di";
import { SiTypescript, SiExpress, SiPrisma } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGitAlt, FaNodeJs } from "react-icons/fa";
import { DiPostgresql } from "react-icons/di";
import { TbBrandReactNative, TbBrandNextjs } from "react-icons/tb";
import { SiMicrosoftazure } from "react-icons/si";

const skills = [
    { text: "HTML", Icon: DiHtml5, color: "#fc490b" },
    { text: "CSS", Icon: DiCss3, color: "#264de4" },
    { text: "JavaScript", Icon: IoLogoJavascript, color: "#fcdc00" },
    { text: "React", Icon: DiReact, color: "#61dafb" },
    { text: "Git", Icon: FaGitAlt, color: "#f44d27" },
    { text: "TypeScript", Icon: SiTypescript, color: "#3178c6" },
    { text: "Node.js", Icon: FaNodeJs, color: "#7fbd42" },
    { text: "Express", Icon: SiExpress, color: "#828282" },
    { text: "Prisma", Icon: SiPrisma, color: "#0c344b" },
    { text: "React Native", Icon: TbBrandReactNative, color: "#61dafb" },
    { text: "PostgreSQL", Icon: DiPostgresql, color: "#2f6792" },
    { text: "Azure", Icon: SiMicrosoftazure, color: "#30b6ed" },
    { text: "Next", Icon: TbBrandNextjs, color: "black" },
];

export const useSkills = () => {
    const sortedSkills = [...skills].sort((a, b) =>
        a.text.localeCompare(b.text)
    );

    const reverseSortedSkills = sortedSkills.reverse();

    return { sortedSkills, reverseSortedSkills };
};
