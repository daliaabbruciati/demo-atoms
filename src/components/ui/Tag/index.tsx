import React from 'react'
import { cva, VariantProps } from 'class-variance-authority'

interface TagProps extends VariantProps<typeof buildClass> {
  category: string
  isSelected: boolean

  onClick?(): void

  text?: string
}

enum ColorName {
  'blue' = 'bg-blue-100',
  'gray' = 'bg-gray-200',
  'green' = 'bg-green-100',
  'orange' = 'bg-orange-100',
  'pink' = 'bg-pink-100',
  'purple' = 'bg-purple-100',
  'sky' = 'bg-sky-100',
  'yellow' = 'bg-yellow-100',
}

const tagColorMapping = new Map([
  ['Tutti i temi', ColorName.gray],
  ['Ambiente', ColorName.green],
  ['Economia', ColorName.blue],
  ['Mondo', ColorName.orange],
  ['Non Profit', ColorName.purple],
  ['Politica', ColorName.yellow],
  ['Società', ColorName.sky],
  ['Welfare', ColorName.pink],
])

const buildClass = cva(
  'flex rounded border border-solid border-black shadow font-bold uppercase',
  {
    variants: {
      variant: {
        extraLarge: ['py-3 px-6 text-lg'],
        large: ['py-3 px-4 text-[10px]'],
        medium: ['py-2 px-3 text-[10px]'],
        small: ['py-1 px-3 text-[10px]'],
      },
    },
  }
)

const Tag = ({ category, isSelected, onClick, text, variant }: TagProps) => {
  return (
    <button
      className={
        isSelected
          ? buildClass({ variant }) + ` ${tagColorMapping.get(category)}`
          : buildClass({ variant }) + ' hover:text-gray-400'
      }
      onClick={onClick}
    >
      <p>{text}</p>
    </button>
  )
}

export default Tag
