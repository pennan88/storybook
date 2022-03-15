import React from 'react'
import { toast } from 'react-toastify'
import Grid from '../Grid'

const Footer = () => {
  const notify = () =>
    toast.success('Thank you =)', {
      position: 'bottom-right',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    })
  return (
    <Grid className={'gridContainer grid-col-3'}>
      <footer className="footer col-start-1 col-end-4 ">
        <div className="col col1">
          <h1>Contact</h1>
          <ul>
            <li>
              <a href="mailto:yeet@yeeted.com">yeet@yeeted.com</a>
            </li>
            <li>
              <a href="tel:0707077407">0707077407</a>
            </li>
            <li>
              <a href="#">Västervallvägen 6, 302 50 Halmstad</a>
            </li>
          </ul>
        </div>
        <div className="col col2">
          <h1>Draper Europe AB</h1>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur incidunt tempore quam, dolorem facere
              iusto dolore recusandae! Incidunt, vero? Nobis mollitia expedita debitis laudantium sapiente quas
              repellendus delectus vel minima?
            </li>
          </ul>
        </div>
        <div className="col col3">
          <h2>Subscribe to Our Newsletter</h2>

          <ul>
            <li>
              <h5>Make sure to always receive the latest news from us!</h5>
            </li>

            <form action="" onSubmit={(e) => e.preventDefault()}>
              <li>
                <input type="text" placeholder="Write your e-mailadress"></input>
                <button onClick={() => notify()} type="submit">
                  Send
                </button>
              </li>
            </form>
          </ul>
        </div>
      </footer>
    </Grid>
  )
}

export default Footer
