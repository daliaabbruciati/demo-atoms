import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavbarLarge = () => {
  return (
    <div className="flex w-full items-center justify-between border border-solid border-b-black px-10 py-4">
      <div className="flex gap-6">
        <Link className="text-sm" href="#">
          Contribuisci
        </Link>
        <Link className="text-sm" href="#">
          Abbonati
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <Image
          alt="account"
          height="16"
          src="/assets/Iconaccount.png"
          width="16"
        />
        <Link className="text-sm" href="#">
          Accedi
        </Link>
      </div>
    </div>
  )
}

export default NavbarLarge
