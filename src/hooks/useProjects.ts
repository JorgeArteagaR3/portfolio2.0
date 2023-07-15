import { useEffect, useState } from "react";
import sanityClient from "../client";
import { Project as ProjectType } from "../types";

export const useProjects = () => {
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
                setProjects(data);
            });
    }, []);

    return { projects };
};
