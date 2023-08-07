import React from 'react'
import Link from 'next/link'
import {Icon} from 'react-icons'

export interface NavbarItemProps {
  icon: Icon
  label: string
  href: string
}

const isBrowser = () => typeof window !== 'undefined' //The approach recommended by Next.js

const scrollToTop = () => {
  if (!isBrowser()) return
  window.scrollTo({top: 0, behavior: 'smooth'})
}

const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  // first prevent the default behavior
  e.preventDefault()
  // get the href and remove everything before the hash (#)
  const href = e.currentTarget.href
  const targetId = href.replace(/.*\#/, '')
  // get the element by id and use scrollIntoView
  const elem = document.getElementById(targetId)
  elem?.scrollIntoView({
    behavior: 'smooth',
  })
}

export const NavbarItem: React.FC<NavbarItemProps> = ({
  icon: Icon,
  href,
  label,
}) => {
  return (
    <Link
      href={href}
      onClick={handleScroll}
      className='
        flex
        items-center
        justify-center
        gap-x-2
        group
        relative
        overflow-hidden
        rounded
        border
        border-transparent
        px-3
        py-3
        text-lg
        dark:text-white
        dark:hover:text-violet-400
        font-medium
        text-slate-800
        hover:text-violet-600
        outline-none
      '
    >
      <Icon size={26} />
      <span
        className='
        ease
        absolute
        left-0
        top-0
        h-0
        w-0
        border-t-2
        border-violet-600
        dark:border-violet-400
        transition-all
        duration-200
        group-hover:w-full
       '
      ></span>

      <span
        className='
        ease
        absolute
        right-0
        top-0
        h-0
        w-0
        border-r-2
        border-violet-600
        dark:border-violet-400
        transition-all
        duration-200
        group-hover:h-full
       '
      ></span>
      <span
        className='
        ease
        absolute
        bottom-0
        right-0
        h-0
        w-0
        border-b-2
        border-violet-600
        dark:border-violet-400
        transition-all
        duration-200
        group-hover:w-full
       '
      ></span>
      <span
        className='
        ease
        absolute
        bottom-0
        left-0
        h-0
        w-0
        border-l-2
        border-violet-600
        dark:border-violet-400
        transition-all
        duration-200
        group-hover:h-full'
      ></span>
      <p>{label}</p>
    </Link>
  )
}
