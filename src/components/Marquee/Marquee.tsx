import { Orb } from "../Orb/Orb";
import { Technology } from "../../types";

export const Marquee = ({
    arr,
    className,
    changeDirection,
}: {
    arr: Array<Technology>;
    className: string;
    changeDirection?: boolean;
}) => {
    return (
        <div
            className={`marquee h-[80px] md:h-[100px] lg:h-[150px] w-[300vw] md:w-[200vw] lg:w-[170vw] xl:w-[200vw] 2xl:w-[130vw] overflow-hidden relative flex items-center justify-center  ${className}`}
        >
            <div
                className={`marquee-inner absolute flex w-[200%] ${
                    changeDirection
                        ? `animate-scrollRight md:animate-[scrollRight_20s_linear_infinite]`
                        : `animate-scrollLeft md:animate-[scrollLeft_20s_linear_infinite]`
                }`}
            >
                <div className="marquee__group flex w-[50%]">
                    {arr.map((skill) => (
                        <Orb
                            key={skill.text}
                            text={skill.text}
                            Icon={skill.Icon}
                            color={skill.color}
                        />
                    ))}
                </div>
                <div aria-hidden className="marquee__group flex w-[50%]">
                    {arr.map((skill) => (
                        <Orb
                            key={skill.text}
                            text={skill.text}
                            Icon={skill.Icon}
                            color={skill.color}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
