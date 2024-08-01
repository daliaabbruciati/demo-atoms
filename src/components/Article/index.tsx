import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Tag from '@/components/ui/Tag'

interface ArticleProps {
  author: string
  avatar: StaticImageData
  cover: StaticImageData
  date: string
  tag: string
  title: string
}

const Article = ({ author, avatar, cover, date, tag, title }: ArticleProps) => {
  return (
    <div className="relative">
      <Image
        alt="hero"
        className="h-80 object-cover xl:h-[506px]"
        src={cover}
      />
      <div className="absolute bottom-0 px-4 py-6 xl:px-10 xl:py-11">
        <Tag text={tag} variant="small" />
        <h2 className="mt-4 text-2xl font-bold text-white">{title}</h2>
        <div className="mt-4 flex gap-4">
          <Image
            alt="avatar"
            className="h-8 w-8 rounded-full object-cover"
            src={avatar}
          />
          <div className="flex-col">
            <h6 className="text-sm text-white">Di {author}</h6>
            <p className="text-[10px] uppercase text-white">{date}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article
