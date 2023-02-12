import "./Skills.css";
import { DiReact, DiCss3, DiHtml5 } from "react-icons/di";
import { SiBootstrap, SiTypescript } from "react-icons/si";
import { DiSass } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";
import { Marquee } from "../Marquee/Marquee";
import { sortSkills } from "../../utils/sortSkills";
import clouds from "../../assets/images/cloudscropped.png";

const skills = [
    { text: "HTML", Icon: DiHtml5, color: "#fc490b" },
    { text: "CSS", Icon: DiCss3, color: "#264de4" },
    { text: "Sass", Icon: DiSass, color: "#cf649a" },
    { text: "Bootstrap", Icon: SiBootstrap, color: "#712cf9" },
    { text: "JavaScript", Icon: IoLogoJavascript, color: "#fcdc00" },
    { text: "React", Icon: DiReact, color: "#61dafb" },
    { text: "Git", Icon: FaGitAlt, color: "#f44d27" },
    { text: "TypeScript", Icon: SiTypescript, color: "#3178c6" },
];
const [sortedSkills, sortedSkillsReversed] = sortSkills(skills);

export const Skills = () => {
    return (
        <section
            id="skills"
            className="overflow-hidden mb-20 md:mb-36 lg:mb-40"
        >
            <div className="container mx-auto">
                <h2 className="px-10 md:px-16 text-4xl font-['Museoslab'] text-left md:text-5xl 2xl:text-6xl">
                    My Skills
                </h2>
            </div>
            <div className="flex flex-col gap-2.5 md:gap-8 h-[250px] md:h-[600px] lg:h-[800px] justify-center">
                <Marquee
                    arr={sortedSkills}
                    className="rotate-[-4deg]"
                    changeDirection={false}
                />
                <Marquee
                    arr={sortedSkillsReversed}
                    className="rotate-[-4deg]"
                    changeDirection={true}
                />
            </div>
        </section>
    );
};
