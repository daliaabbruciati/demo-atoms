'use client'
import React from 'react'
import NavbarSmall from '@/components/Navbar/navbar/NavbarSmall'
import NavbarLarge from '@/components/Navbar/navbar/NavbarLarge'
import useWindowSize from '@/hooks/useWindowSize'
import { DESKTOP_SIZE } from '@/mocks/data/constants'

const Navbar = () => {
  const size = useWindowSize()

  return (
    <div className="w-full">
      {size.width >= DESKTOP_SIZE ? <NavbarLarge /> : <NavbarSmall />}
    </div>
  )
}

export default Navbar
