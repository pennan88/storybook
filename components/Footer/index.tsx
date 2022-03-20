import React from 'react'
import { toast, ToastContainer } from 'react-toastify'
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
    <footer className="bg-green-light-5 mt-5 pt-2 pb-2">
      <div className="container">
        <div className="row gap-2 justify-center">
          <div className="col-12-xs col-6-md col-3-lg text-black ">
            <h1 className="font-lg mb-1">Contact</h1>
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
          <div className="col-12-xs col-6-md col-3-lg text-black">
            <h1 className="font-lg mb-1">Draper Europe AB</h1>
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur incidunt tempore quam, dolorem
                facere iusto dolore recusandae! Incidunt, vero? Nobis mollitia expedita debitis laudantium sapiente quas
                repellendus delectus vel minima?
              </li>
            </ul>
          </div>
          <div className="col-12-xs col-6-md col-3-lg text-black">
            <h1 className="font-lg mb-1">Subscribe to Our Newsletter</h1>

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
        </div>
      </div>
      <ToastContainer />
    </footer>
  )
}

export default Footer
