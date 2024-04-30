import React, {useMemo} from 'react'
import {SlSocialVkontakte} from 'react-icons/sl'
import {BsTelegram} from 'react-icons/bs'
import SocialItem from '@/components/SocialItem'
import {AiOutlineMail} from 'react-icons/ai'

const Footer = () => {
  const socials = useMemo(
    () => [
      {
        icon: SlSocialVkontakte,
        label: 'ВКонтакте',
        href: 'https://vk.com/mmativ',
      },
      {
        icon: BsTelegram,
        label: 'Телеграм',
        href: 'https://t.me/mativ_12',
      },
      {
        icon: AiOutlineMail,
        label: 'ivan_m146@mail.ru',
        href: 'mailto:ivan_m146@mail.ru',
      },
    ],
    []
  )

  return (
    <footer
      className='
        flex
        flex-col
        gap-y-4
        w-full
        bg-violet-600
        dark:bg-violet-800
        text-white
        p-4

      '
      id='contacts'
    >
      <p className='text-lg font-medium'>Мои контакты</p>
      {socials.map((social) => {
        return <SocialItem key={social.label} {...social} />
      })}
      <p className='text-center'>@ {new Date().getFullYear()} mativ</p>
    </footer>
  )
}

export default Footer
