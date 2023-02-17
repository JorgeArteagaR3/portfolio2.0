import React from "react";
import { useState, useEffect } from "react";
import { Project } from "../Project/Project";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./Projects.css";
import sanityClient from "../../client";
import { Project as ProjectType } from "../../types";

const Projects = () => {
    const [projects, setProjects] = useState<ProjectType[]>([]);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "project"]{
            title,
            mainImage{
                asset->{
                  url
                }
            },
            technologies,
            description,
            website,
            codeurl

          }`
            )
            .then((data: ProjectType[]) => {
                console.log(data);
                setProjects(data.reverse());
            });
    }, []);
    const pagination = {
        clickable: true,
        renderBullet: function (index: any, className: any) {
            return '<div class="' + className + '">' + (index + 1) + "</div>";
        },
    };

    return (
        <section
            id="projects"
            className="mb-20 md:mb-24 lg:mb-32 xl:mb-40"
        >
            <div className="px-10 md:px-16 mb-8 lg:mb-14 container mx-auto">
                <h2 className="text-4xl font-['Museoslab'] text-left md:text-5xl 2xl:text-6xl">
                    My Projects
                </h2>
            </div>
            <Swiper
                spaceBetween={200}
                loop
                speed={1200}
                scrollbar={{ draggable: true }}
                pagination={pagination}
                modules={[Pagination]}
                slidesPerView={1}
                className="container xl:max-w-[95%] mx-auto bg-lightpurple rounded-[56px] p-10 xl:flex xl:h-[700px] 2xl:h-[800px]"
            >
                {projects.length &&
                    projects.map(
                        ({
                            codeurl,
                            mainImage,
                            technologies,
                            title,
                            website,
                            description,
                        }) => (
                            <SwiperSlide
                                key={codeurl}
                                className="flex flex-col justify-center items-center gap-6 xl:grid xl:grid-cols-2 xl: xl:place-items-center"
                            >
                                <Project
                                    codeurl={codeurl}
                                    mainImage={mainImage}
                                    description={description}
                                    technologies={technologies}
                                    title={title}
                                    website={website}
                                />
                            </SwiperSlide>
                        )
                    )}
            </Swiper>
        </section>
    );
};
export default Projects;
