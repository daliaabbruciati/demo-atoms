'use client'
import Label from '@/components/ui/Label'
import React, { useState } from 'react'
import { categories } from '@/mocks/data/categories'

const NavbarLarge = () => {
  const [isSelected, setIsSelected] = useState('Tutti i temi')

  const handleSelected = (category: string) => {
    setIsSelected(category)
  }

  return (
    <div className="flex h-24 w-full gap-2.5 border border-t-0 border-solid border-b-black px-10 py-6">
      {categories.map((category) => (
        <Label
          isActive={isSelected === category}
          key={category}
          onClick={() => handleSelected(category)}
          text={category}
        />
      ))}
    </div>
  )
}

export default NavbarLarge
