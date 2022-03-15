import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion'
import React, { HTMLAttributes, useState } from 'react'
import AccordionContent, { ContentType } from './AccordionContent'

interface AccordionType extends ContentType, HTMLMotionProps<'div'> {
  header: string
}

const Accordion = ({ header, variant, ...props }: AccordionType) => {
  const [active, setActive] = useState(false)

  return (
    <div className="accordion-wrapper">
      <motion.div {...props} onClick={() => setActive(!active)}>
        <h4>{header}</h4>
        <p></p>
      </motion.div>
      <AnimatePresence> {active && <AccordionContent variant={variant} {...props} />} </AnimatePresence>
    </div>
  )
}

export default Accordion
