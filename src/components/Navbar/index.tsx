'use client'
import NavbarLarge from '@/components/Navbar/navbar/NavbarLarge'
import NavbarSmall from '@/components/Navbar/navbar/NavbarSmall'
import useWindowSize from '@/hooks/useWindowSize'

const DESKTOP_SIZE = 1440

const Navbar = () => {
  const size = useWindowSize()

  return (
    <div className="flex w-full">
      {size.width >= DESKTOP_SIZE ? <NavbarLarge /> : <NavbarSmall />}
    </div>
  )
}

export default Navbar
