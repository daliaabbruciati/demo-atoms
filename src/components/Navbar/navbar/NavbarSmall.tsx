import React, { useState } from 'react'
import Icon, { IconName } from '@/components/ui/Icon'
import Tag from '@/components/ui/Tag'
import { categories } from '@/mocks/data/categories'

const NavbarSmall = () => {
  const [isSelected, setIsSelected] = useState('')

  const handleSelected = (category: string) => {
    setIsSelected(category)
  }

  return (
    <div className="w-full flex-col gap-3 px-4 py-6">
      <button className="flex items-center gap-3">
        <h2 className="text-3xl font-bold">Tutti i temi</h2>
        <Icon alt="arrow-down" className="h-5 w-5" name={IconName.ArrowDown} />
      </button>
      <div className="mt-2 flex flex-wrap items-center gap-3">
        {categories.map((category, key) => (
          <Tag
            category={category}
            isSelected={isSelected === category}
            key={key}
            onClick={() => handleSelected(category)}
            text={category}
            variant="large"
          />
        ))}
      </div>
    </div>
  )
}

export default NavbarSmall
