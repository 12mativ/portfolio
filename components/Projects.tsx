'use client'

import React from 'react'
import ProjectItem from '@/components/ProjectItem'
import useProjects from '@/hooks/useProjects'

const Projects = () => {
  const {projects} = useProjects()

  return (
    <div className='w-full flex flex-col items-center'>
      <p
        className='
          pt-22
          text-violet-600
          dark:text-violet-400
          text-xl
          font-medium
          border-2
          border-transparent
          border-b-violet-600
          dark:border-b-violet-400
          pb-6
          mb-6
          scroll-m-24
        '
        id='projects'
      >
        Мои работы
      </p>
      <div
        className='
          flex
          flex-col
          gap-y-4
          w-full
          items-center
        '
      >
        {projects.map((project) => {
          return <ProjectItem key={project.id} {...project} />
        })}
      </div>
    </div>
  )
}

export default Projects
