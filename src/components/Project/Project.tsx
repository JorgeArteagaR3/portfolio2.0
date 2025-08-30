import { Project as ProjectType } from '../../types';
import { useState } from 'react';
import Modal from 'react-modal';
Modal.setAppElement('#root');

export const Project = ({
  mainImage,
  technologies,
  title,
  website,
  description,
}: ProjectType) => {
  return (
    <>
      <a
        href={website}
        target="_blank"
        className="w-[170px] md:w-[270px] lg:w-[320px] xl:w-[390px] max-h-[540px] cursor-pointer xl:col-start-1 xl:col-end-2 xl:row-start-1 xl:row-end-2 h-full 2xl:w-[400px]"
      >
        <img
          src={mainImage.asset.url}
          className="h-full w-full lg:hover:scale-105 duration-300 object-cover object-center rounded-[40px] md:rounded-[45px]"
        />
      </a>
      <div className="flex flex-col gap-6 justify-center items-center">
        <h3 className="font-['Museoslab'] font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
          {title}
        </h3>
        <div className="bg-mybackground rounded-[244px] py-3 md:py-6 px-12 lg:px-20 flex flex-col items-center justify-center gap-3 md:gap-6 h-[150px] md:h-[175px] xl:h-[250px] w-full max-w-[400px] lg:max-w-[540px]">
          <p className="text-left text-sm lg:text-base xl:text-lg 2xl:text-xl">
            {description}
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href={website}
              target="_blank"
              className="bg-[#e8f2cf] hover:scale-105 duration-300 p-2 md:px-4 lg:px-6 rounded-full text-xs md:text-sm lg:text-base disabled:cursor-not-allowed"
            >
              View
            </a>
          </div>
        </div>
        <div className="mb-6 col-start-2 col-end-2">
          <h3 className="font-['Museoslab'] font-bold mb-4 md:text-base lg:text-xl xl:text-2xl">
            Technologies Used
          </h3>
          <ul className="flex justify-center gap-2 text-[#9597f8] flex-wrap">
            {technologies.map((tech) => {
              return (
                <li
                  key={tech}
                  className="p-2 px-4 text-xs md:text-sm lg:text-base xl:text-lg  bg-mybackground shadow-[0_2px_4px_0_rgba(231,231,253,1)] rounded-full"
                >
                  {tech}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
