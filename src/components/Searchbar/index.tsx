import React from 'react'
import Icon, { IconName } from '@/components/ui/Icon'

const Searchbar = () => {
  return (
    <div className="flex w-full items-center justify-between border border-solid border-b-black xl:h-24">
      <button className="flex items-center justify-center border border-solid border-r-black p-5 xl:h-full xl:w-24">
        <Icon
          alt="hamburger-menu"
          className="h-5 w-5"
          name={IconName.HamburgerMenu}
        />
      </button>
      <input className="w-full cursor-pointer bg-inherit" />
      <button className="flex items-center justify-center border border-solid border-l-black p-5 xl:h-full xl:w-24">
        <Icon alt="search" className="h-5 w-5" name={IconName.Search} />
      </button>
    </div>
  )
}

export default Searchbar
