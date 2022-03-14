import type { NextPage } from 'next'
import { useState } from 'react'
import Grid from '../components/Grid'
import Modal from '../components/Modal'

const Home: NextPage = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const close = () => setModalOpen(false)
  const open = () => setModalOpen(true)
  return (
    <>
      <div className="btn"></div>
      <Grid className="gridContainer grid-col-5 grid-row-5">
        <button onClick={() => (modalOpen ? close() : open())}>DEMO OPEN MODAL</button>
      </Grid>
      {modalOpen && <Modal handleClose={close} variant={'article'} />}
    </>
  )
}

export default Home
