'use client'

import {useEffect, useState} from 'react'
import {BiArrowFromBottom} from 'react-icons/bi'
import {twMerge} from "tailwind-merge";
import {BsArrowUpCircle, BsArrowUpCircleFill, BsFillArrowUpCircleFill} from "react-icons/bs";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div className={twMerge(`
       fixed 
       bottom-2 
       right-2
       text-black
       dark:text-white
    `, isVisible ? 'md:hidden' : 'hidden md:hidden')}
    >
      <button
        type='button'
        onClick={scrollToTop}
      >
        <BsArrowUpCircle size={30} />
      </button>
    </div>
  )
}

export default ScrollToTop