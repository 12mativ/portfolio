import React from 'react'
import {IconType} from "react-icons";
import Link from "next/link";

interface SocialItemProps {
  icon: IconType
  label: string
  href: string
}

const SocialItem:React.FC<SocialItemProps> = ({icon: Icon, href, label}) => {
  return (
    <Link href={href} className='flex items-center gap-x-4 w-fit'>
      <Icon size={26} />
      <p>{label}</p>
    </Link>
  )
}

export default SocialItem