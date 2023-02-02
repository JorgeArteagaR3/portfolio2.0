import { Orb } from "../Orb/Orb";
import "./Skills.css";
export const Skills = () => {
    const technologies = [
        "Skill 1",
        "Skill 2",
        "Skill 3",
        "Skill 4",
        "Skill 5",
        "Skill 6",
        "Skill 7",
    ];
    return (
        <section>
            <div className="px-8">
                <h2 className="text-4xl font-['Museoslab'] text-left md:text-5xl 2xl:text-6xl">
                    My Skills
                </h2>
            </div>
            <div className="marquee overflow-hidden">
                <div className="marquee-inner flex">
                    <div className="marquee__group flex min-w-full">
                        {technologies.map((tech: string) => (
                            <Orb tech={tech} />
                        ))}
                    </div>
                    <div
                        aria-hidden
                        className="marquee__group flex min-w-full"
                    >
                        {technologies.map((tech: string) => (
                            <Orb tech={tech} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
