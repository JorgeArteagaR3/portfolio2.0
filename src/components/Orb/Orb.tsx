import { useState } from "react";
import { Technology } from "../../types";

export const Orb = ({ text, Icon, color }: Technology) => {
  const [colour, setColour] = useState(false);
  return (
    <div
      className="w-[calc(100%/8)] bg-lightpurple flex items-center justify-center gap-1 rounded-full py-3.5 md:py-5 lg:py-6 px-2 gap-2.5 hover:cursor-pointer"
      onMouseEnter={() => {
        setColour(true);
      }}
      onMouseLeave={() => {
        setColour(false);
      }}
    >
      <p className="text-sm md:text-base lg:text-lg">{text}</p>
      <Icon
        className="md:w-[40px]  md:h-[50px] lg:h-[60px]"
        size={30}
        color={colour ? color : ""}
      />
    </div>
  );
};
