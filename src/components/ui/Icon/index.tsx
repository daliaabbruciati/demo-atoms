import React from 'react'
import Image from 'next/image'

interface IconProps {
  alt: string
  className?: string
  height?: number
  src: string
  width?: number
}

const Icon = ({ alt, className, height = 16, src, width = 16 }: IconProps) => {
  return (
    <div className={className}>
      <Image alt={alt} height={height} src={`/assets/${src}`} width={width} />
    </div>
  )
}

export default Icon
