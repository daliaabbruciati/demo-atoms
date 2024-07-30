import React from 'react'

const NavbarSmall = () => {
  return (
    <div className="w-full">
      <div className="h-11 w-full" />
      <div className="flex w-full items-center justify-center">
        <button className="w-full border border-solid border-y-black border-r-black py-2">
          <p className="text-sm">Contribuisci</p>
        </button>
        <button className="w-full border border-solid border-y-black py-2">
          <p className="text-sm">Abbonati</p>
        </button>
      </div>
    </div>
  )
}

export default NavbarSmall
