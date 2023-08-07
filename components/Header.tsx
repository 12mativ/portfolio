'use client'

import React, {useEffect, useMemo, useState} from 'react'
import {NavbarItem} from '@/components/NavbarItem'
import {AiOutlineHome, AiOutlineLaptop} from 'react-icons/ai'
import {MdOutlineDescription} from 'react-icons/md'
import Footer from '@/components/Footer'
import {BiSolidContact} from 'react-icons/bi'
import {useTheme} from 'next-themes'
import {FiSun} from 'react-icons/fi'
import {BsFillMoonFill} from 'react-icons/bs'

export interface HeaderProps {
  children: React.ReactNode
}

const Header: React.FC<HeaderProps> = ({children}) => {
  const [mounted, setMounted] = useState(false)
  const {theme, setTheme} = useTheme()

  const links = useMemo(
    () => [
      {
        icon: AiOutlineHome,
        label: 'Домой',
        href: '#top',
      },
      {
        icon: MdOutlineDescription,
        label: 'Обо мне',
        href: '#about',
      },
      {
        icon: AiOutlineLaptop,
        label: 'Работы',
        href: '#projects',
      },
      {
        icon: BiSolidContact,
        label: 'Контакты',
        href: '#contacts',
      },
    ],
    []
  )

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div>
      <div className='flex flex-col p-4 relative'>
        <div
          className='
            flex
            pb-4
            items-center
            justify-between
            bg-neutral-50
            dark:bg-gray-800
            fixed
            top-0
            left-0
            w-full
            px-4
            pt-4
          '
        >
          <p
            className='
              text-2xl
              text-violet-600
              dark:text-violet-400
              border
              border-transparent
              border-b-4
              border-b-violet-600
              dark:border-b-violet-400
            '
          >
            Mativ dev
          </p>
          <div className='flex items-center'>
            {theme === 'light' ? (
              <BsFillMoonFill
                size={23}
                onClick={() =>
                  theme == 'dark' ? setTheme('light') : setTheme('dark')
                }
                role='button'
                className='md:mr-4'
              />
            ) : (
              <FiSun
                size={23}
                onClick={() =>
                  theme == 'dark' ? setTheme('light') : setTheme('dark')
                }
                role='button'
                className='md:mr-4'
              />
            )}
            <nav
              className='
              hidden
              md:flex
              items-center
              gap-x-2
            '
            >
              {links.map((route) => {
                return <NavbarItem key={route.label} {...route} />
              })}
            </nav>
          </div>

        </div>
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default Header
