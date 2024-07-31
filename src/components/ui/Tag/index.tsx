import React from 'react'
import { cva, VariantProps } from 'class-variance-authority'

interface TagProps extends VariantProps<typeof buildClass> {
  category: string
  isSelected: boolean

  onClick?(): void

  text?: string
}

export const tagColorMapping = new Map([
  ['Tutti i temi', 'bg-gray-200'],
  ['Ambiente', 'bg-green-100'],
  ['Economia', 'bg-blue-100'],
  ['Mondo', 'bg-orange-100'],
  ['Non Profit', 'bg-purple-100'],
  ['Politica', 'bg-yellow-100'],
  ['Società', 'bg-sky-100'],
  ['Welfare', 'bg-pink-100'],
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
