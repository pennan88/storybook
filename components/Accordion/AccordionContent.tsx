import { AnimatePresence, motion } from 'framer-motion'
import React, { ReactNode } from 'react'
import Submenu from '../Submenu'

export interface ContentType {
  variant: 'default' | 'media' | 'list'
  children?: ReactNode
  src?: string
}

const AccordionContent = ({ variant, children, src }: ContentType) => {
  switch (variant) {
    case 'default':
      return (
        <AnimatePresence>
          <motion.div
            layout
            initial={{ height: 0 }}
            animate={{
              height: 'auto',
            }}
            exit={{ height: 0 }}
            className={`accordion-content ${variant}`}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      )
    case 'list':
      return (
        <motion.div
          initial={{ height: 0 }}
          animate={{
            height: 'auto',
          }}
          exit={{ height: 0 }}
        >
          {children}
        </motion.div>
      )
    case 'media':
      return <motion.img src={src!} className={`accordion-content ${variant}`} />
    default:
      return null
  }
}

export default AccordionContent
