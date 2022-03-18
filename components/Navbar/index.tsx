import Image from 'next/image'
import React, { HTMLAttributes, useState } from 'react'
import brand from '../../public/images/images.jpg'
import { Button } from '../Button'
import logo from '../../public/images/Logo.webp'
import { AnimatePresence } from 'framer-motion'
import Submenu from '../Submenu'
import Submenuitem from '../Submenu/Submenuitem'

export interface Props extends HTMLAttributes<HTMLDivElement> {
  alt: string
}
const Navbar = ({ alt, ...props }: Props) => {
  const [active, setActive] = useState(false)
  return (
    <div {...props} className="navbar">
      <div className="container">
        <h1 className="site-title">
          <Image height={50} width={200} src={logo} alt="dasdsa" />
        </h1>
        <ul className="display-f position-rel">
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
