import Image from 'next/image'
import React, { HTMLAttributes, useState } from 'react'
import brand from '../../public/images/images.jpg'
import { Button } from '../Button'
import logo from '../../public/images/Logo.webp'
import { AnimatePresence } from 'framer-motion'
import Submenu from '../Submenu'
import Submenuitem from '../Submenu/Submenuitem'
import Link from 'next/link'

export interface Props extends HTMLAttributes<HTMLDivElement> {
  alt: string
}
const Navbar = ({ alt, ...props }: Props) => {
  const [active, setActive] = useState(false)
  return (
    <div {...props} className="navbar">
      <div className="container">
        <h1 className="site-title">
          <Link href="/">
            <Image height={50} width={200} src={logo} alt="dasdsa" />
          </Link>
        </h1>
        <ul className="display-f position-rel">
          <Link href="/products">
            <a className="ml-2 font-lg text-hover-green">Products</a>
          </Link>
          <Link href="/screens">
            <a className="ml-2 font-lg text-hover-green">Screen surfaces</a>
          </Link>
          <Link href="/projects">
            <a className="ml-2 font-lg text-hover-green">Projector lifts</a>
          </Link>
          <Link href="/support">
            <a className="ml-2 font-lg text-hover-green">Support</a>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
