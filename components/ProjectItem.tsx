import React from 'react'
import {Project} from '@/hooks/useProjects'
import Image from 'next/image'

const ProjectItem: React.FC<Project> = ({name, description, image, link}) => {
  return (
    <div
      className='
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
      '
    >
      <p className='text-violet-600 dark:text-violet-400 font-medium text-lg'>
        {name}
      </p>
      <p className='text-neutral-400'>{description}</p>
      <div className='relative h-[420px]'>
        <Image fill src={image.src} alt='project' className='rounded-lg z-[0]' />
      </div>
      <a
        href={link}
        target='_blank'
        rel='noopener noreferrer'
        className='w-full text-center text-violet-600 dark:text-violet-400 underline'
      >
        Ссылка тут
      </a>
    </div>
  )
}

export default ProjectItem