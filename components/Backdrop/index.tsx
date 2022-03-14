import { HTMLMotionProps, motion } from 'framer-motion'
import React from 'react'

interface BackdropTypes extends HTMLMotionProps<'div'> {
  children: React.ReactNode
}

const Backdrop = ({ children, ...props }: BackdropTypes) => {
  return (
    <motion.div className="backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} {...props}>
      {children}
    </motion.div>
  )
}
export default Backdrop
