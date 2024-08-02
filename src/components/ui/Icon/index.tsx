import React from 'react'
import Account from '@/assets/Account.svg'
import ArrowDown from '@/assets/VectorarrowDown.svg'
import HamburgerMenu from '@/assets/HamburgerMenu.svg'
import Image from 'next/image'
import Search from '@/assets/Vectorsearch.svg'

export enum IconName {
  Account,
  HamburgerMenu,
  ArrowDown,
  Search,
}

interface IconProps extends React.HTMLAttributes<HTMLElement> {
  name: IconName
  alt: string
}

const Icon = ({ alt, name, ...rest }: IconProps) => {
  const iconMapping = new Map([
    [IconName.Account, Account],
    [IconName.HamburgerMenu, HamburgerMenu],
    [IconName.ArrowDown, ArrowDown],
    [IconName.Search, Search],
  ])

  const IconComponent = iconMapping.get(name)

  return <Image alt={alt} src={IconComponent} {...rest} />
}

export default Icon
