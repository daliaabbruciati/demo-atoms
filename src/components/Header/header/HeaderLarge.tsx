import React from 'react'
import Icon, { IconName } from '@/components/ui/Icon'
import Link from 'next/link'

const HeaderLarge = () => {
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
        <Icon alt="account" className="h-5 w-5" name={IconName.Account} />
        <Link className="text-sm" href="#">
          Accedi
        </Link>
      </div>
    </div>
  )
}

export default HeaderLarge
