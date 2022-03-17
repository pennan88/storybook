import Image from 'next/image'
import React, { HTMLAttributes } from 'react'
import brand from '../../public/images/images.jpg'
import { Button } from '../Button'
import logo from '../../public/images/Logo.webp'

export interface Props extends HTMLAttributes<HTMLDivElement> {
  alt: string
}
const Navbar = ({ alt, ...props }: Props) => {
  return (
    <div {...props} className="navbar">
      <div className="container">
        <h1 className="site-title">
          <Image height={50} width={200} src={logo} />
        </h1>
        <ul className="display-f">
          <li className="ml-2 font-lg text-hover-green">Products</li>
          <li className="ml-2 font-lg text-hover-green">Screen surfaces</li>
          <li className="ml-2 font-lg text-hover-green">Projector lifts</li>
          <li className="ml-2 font-lg text-hover-green">Support</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
