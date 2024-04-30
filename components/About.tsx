import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center w-auto md:w-[400px] h-[100vh] mt-auto scroll-m-6' id='about'>
      <p className='
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
      '>
        Кто я?
      </p>
      <p className='text-center'>
        Я - программист.
      </p>
    </div>
  )
}

export default About