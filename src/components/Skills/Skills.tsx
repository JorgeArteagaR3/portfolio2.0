import "./Skills.css";

import { Marquee } from "../Marquee/Marquee";
import { useSkills } from "../../hooks/useSkills";

export const Skills = () => {
    const { sortedSkills, reverseSortedSkills } = useSkills();
    return (
        <section id="skills" key={"skills"} className="py-12 lg:h-screen">
            <h2 className="pl-10 md:pl-16 lg:pl-24 text-4xl font-['Museoslab'] text-left md:text-5xl 2xl:text-6xl">
                My Skills
            </h2>
            <div className="flex flex-col gap-2.5 md:gap-8 justify-center items-center h-[400px] md:h-[620px] lg:h-full">
                <Marquee
                    arr={sortedSkills}
                    className="rotate-[-4deg]"
                    changeDirection={false}
                />
                <Marquee
                    arr={reverseSortedSkills}
                    className="rotate-[-4deg]"
                    changeDirection={true}
                />
            </div>
        </section>
    );
};
