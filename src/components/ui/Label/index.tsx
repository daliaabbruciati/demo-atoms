import React from 'react'

interface LabelProps {
  isActive: boolean

  onClick?(): void

  text: string
}

const Label = ({ isActive, onClick, text }: LabelProps) => {
  return (
    <button
      className={`cursor-pointer gap-1 text-2xl font-bold underline decoration-8 ${isActive ? 'decoration-red-600 underline-offset-[31px]' : 'decoration-transparent underline-offset-[26px]'} `}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Label
