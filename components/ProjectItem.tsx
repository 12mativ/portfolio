import React from "react";
import {Project} from "@/hooks/useProjects";

const ProjectItem: React.FC<Project> = ({name, description, image }) => {
    return (
      <div className='
        flex
        flex-col
        gap-y-2
        p-4
        rounded-lg
        w-auto
        md:w-[500px]
        border-2
        border-violet-600
        dark:border-violet-400
        m-0
        md:even:ml-[200px]
        md:odd:mr-[200px]
      '>
        <p className='text-violet-600 dark:text-violet-400 font-medium text-lg'>{name}</p>
        <p className='text-neutral-400'>{description}</p>
        <img src={image.src} alt="project" className='rounded-lg'/>
      </div>
    )
}

export default ProjectItem