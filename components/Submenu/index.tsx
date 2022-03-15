import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion'
import React, { useState } from 'react'
import Submenuitem, { ContentType } from './Submenuitem'

interface SubmenuType extends ContentType, HTMLMotionProps<'div'> {
  title: string
}

const Submenu = ({ title, ...props }: SubmenuType) => {
  const [active, setActive] = useState(false)
  return (
    <div className="submenu-wrapper">
      <motion.dt className="submenu" onClick={() => setActive(!active)}>
        {title}
      </motion.dt>
      <AnimatePresence>{active && <Submenuitem {...props} />}</AnimatePresence>
    </div>
  )
}

export default Submenu
