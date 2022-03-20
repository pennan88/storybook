import { motion } from 'framer-motion'
import React, { ReactNode } from 'react'

export interface ContentType {
  children?: ReactNode
}

const Submenuitem = ({ children }: ContentType) => {
  return <motion.div className="submenu-item">{children}</motion.div>
}

export default Submenuitem
