import { motion } from 'framer-motion'
import React, { ReactNode } from 'react'

export interface ContentType {
  children?: ReactNode
}

const Submenuitem = ({ children }: ContentType) => {
  return <motion.dd className="submenu-item">{children}</motion.dd>
}

export default Submenuitem
