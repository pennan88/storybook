import type { NextPage } from 'next'
import { useState } from 'react'
import Accordion from '../components/Accordion'
import Grid from '../components/Grid'
import Modal from '../components/Modal'
import Submenu from '../components/Submenu'

const Home: NextPage = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const close = () => setModalOpen(false)
  const open = () => setModalOpen(true)
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', height: '100vh' }}>
      <Accordion className="accordion" header={'Sheesh'} variant="default">
        <h1>deez</h1>
      </Accordion>

      <Accordion className="accordion" header={'Sheesh'} variant="list">
        <Submenu title="Felsökning">
          <Submenu title="AV">
            <p>Sheesh</p>
          </Submenu>
          <Submenu title="SOLSKYDD">
            <p>TEHShf</p>
          </Submenu>
        </Submenu>
      </Accordion>

      <Submenu title={'Guider'}>
        <p>22</p>
        <p>22</p>
        <p>22</p>
        <p>22</p>
      </Submenu>
    </div>
  )
}

export default Home
