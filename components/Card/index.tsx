import React, { ReactNode } from 'react'
import Image from 'next/image'

interface cardTypes {
  image: StaticImageData
  title: string
  children: ReactNode
  className: string
}
const Card = ({ image, title, children, className }: cardTypes) => {
  return (
    <div className={className}>
      <div className="card">
        <h3 className="font-lg n-1 mb-2">{title}</h3>
        <Image src={image} alt="dasdsa" />
        {children}
      </div>
    </div>
  )
}

export default Card
