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
    <div className="container">
      {/* <Accordion className="accordion" header={'Sheesh'} variant="default">
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
      </Accordion> */}

      <h2 className="mb-2">Grid System</h2>
      <div className="row gap-2 justify-center">
        <Accordion className="accordion col-12-xs col-5-sm col-3-xl" header={'Accordion'} variant={'list'}>
          <Submenu title="test">
            <p>test</p>
          </Submenu>
        </Accordion>
        <Accordion className="accordion col-12-xs col-5-sm col-3-xl" header={'Accordion'} variant={'list'}>
          <Submenu title="test">
            <p>test</p>
          </Submenu>
        </Accordion>
        <Accordion className="accordion col-12-xs col-5-sm col-3-xl" header={'Accordion'} variant={'list'}>
          <Submenu title="test">
            <p>test</p>
          </Submenu>
        </Accordion>
        <Accordion className="accordion col-12-xs col-5-sm col-3-xl" header={'Accordion'} variant={'list'}>
          <Submenu title="test">
            <p>test</p>
          </Submenu>
        </Accordion>
        <Accordion className="accordion col-12-xs col-5-sm col-3-xl" header={'Accordion'} variant={'list'}>
          <Submenu title="test">
            <p>test</p>
          </Submenu>
        </Accordion>
        <Accordion className="accordion col-12-xs col-5-sm col-3-xl" header={'Accordion'} variant={'list'}>
          <Submenu title="test">
            <p>test</p>
          </Submenu>
        </Accordion>
        <Accordion className="accordion col-12-xs col-5-sm col-3-xl" header={'Accordion'} variant={'list'}>
          <Submenu title="test">
            <p>test</p>
          </Submenu>
        </Accordion>
        <Accordion className="accordion col-12-xs col-5-sm col-3-xl" header={'Accordion'} variant={'list'}>
          <Submenu title="test">
            <p>test</p>
          </Submenu>
        </Accordion>
      </div>
    </div>
  )
}

export default Home
