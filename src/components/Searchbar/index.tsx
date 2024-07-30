import React from 'react'
import Icon from '@/components/ui/Icon'

const Searchbar = () => {
  return (
    <div className="flex w-full items-center justify-between border border-solid border-b-black xl:h-24">
      <button className="flex items-center justify-center border border-solid border-r-black p-5 xl:h-full xl:w-24">
        <Icon
          alt="hamburger-menu"
          height={20}
          src="Iconhamburger.png"
          width={20}
        />
      </button>
      <input className="w-full cursor-pointer bg-inherit" />
      <button className="flex items-center justify-center border border-solid border-l-black p-5 xl:h-full xl:w-24">
        <Icon alt="search" height={20} src="Vectorsearch.png" width={20} />
      </button>
    </div>
  )
}

export default Searchbar
