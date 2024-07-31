import React from 'react'

interface LabelProps {
  isActive: boolean

  onClick?(): void

  text: string
}

const Label = ({ isActive, onClick, text }: LabelProps) => {
  return (
    <>
      {isActive && (
        <button
          className="cursor-pointer gap-1 text-2xl font-bold underline decoration-red-600 decoration-8 underline-offset-[31px]"
          onClick={onClick}
        >
          {text}
        </button>
      )}
      {!isActive && (
        <button
          className="cursor-pointer gap-1 text-2xl font-bold underline decoration-transparent decoration-8 underline-offset-[26px]"
          onClick={onClick}
        >
          {text}
        </button>
      )}
    </>
  )
}

export default Label
