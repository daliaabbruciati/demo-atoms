'use client'
import HeaderLarge from '@/components/Header/header/HeaderLarge'
import HeaderSmall from '@/components/Header/header/HeaderSmall'
import useWindowSize from '@/hooks/useWindowSize'
import { DESKTOP_SIZE } from '@/mocks/data/constants'

const Header = () => {
  const size = useWindowSize()

  return (
    <div className="flex w-full">
      {size.width >= DESKTOP_SIZE ? <HeaderLarge /> : <HeaderSmall />}
    </div>
  )
}

export default Header
