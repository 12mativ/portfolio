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
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab amet
        atque delectus dolor facilis impedit labore maiores nobis nostrum
        officiis perspiciatis possimus, quam saepe sequi similique tenetur ullam
        voluptatem.
      </p>
    </div>
  )
}

export default About