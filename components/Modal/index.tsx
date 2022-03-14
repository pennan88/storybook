import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import Backdrop from '../Backdrop'
import brand from '../../public/images/images.jpg'

export interface ModalTypes {
  data?: any // Byt till youmomo
  handleClose?: any
  variant: 'article' | 'image'
}

const Modal = ({ handleClose, variant, data }: ModalTypes) => {
  switch (variant) {
    case 'article':
      return (
        <Backdrop onClick={handleClose}>
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className={`modal ${variant}`}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <h3>DEMO MODAL</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur ipsa officiis odit voluptas dolore
              error ullam sed consequatur temporibus dignissimos, atque quisquam obcaecati placeat nam accusantium!
              Officiis voluptate quibusdam accusantium. Quia tempora nobis cupiditate perferendis repellat corrupti esse
              recusandae accusantium est maiores nam, voluptates incidunt natus aut? Dolor iusto quae, minima vero
              voluptatum autem. Animi maxime iure laborum maiores assumenda? Accusamus doloremque omnis, voluptates sed
              eius facilis a reiciendis quasi quibusdam qui quidem consectetur cumque asperiores nostrum similique sunt
              explicabo cupiditate repudiandae sint magni totam, maiores eaque? Nihil, et adipisci! Incidunt fugit
              nesciunt dolorum! Animi doloribus quo illo praesentium, doloremque expedita inventore ex ducimus dolores
              incidunt beatae, cumque facere veritatis officia tempora possimus nostrum repellat tenetur quidem corporis
              sint! Distinctio. Consequuntur perspiciatis quis eos delectus, perferendis at quae dicta quasi quibusdam
              error consectetur vel voluptates eius, earum quam maiores libero doloremque necessitatibus voluptatem
              ducimus magnam modi. Perferendis accusantium dignissimos doloremque? Earum magni facere qui laudantium et,
              soluta beatae, a ut
            </p>
          </motion.div>
        </Backdrop>
      )
    case 'image':
      return (
        <Backdrop onClick={handleClose}>
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className={`modal ${variant}`}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Image src={brand} height="90%" width="90%" />
            <p>SUSSY BAKA</p>
          </motion.div>
        </Backdrop>
      )
    default:
      return null
  }
}

export default Modal
