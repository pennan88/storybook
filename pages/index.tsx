import type { NextPage } from 'next'
import Image from 'next/image'
import house from '../public/images/scaled-house.webp'
import av from '../public/images/av.webp'
import solskydd from '../public/images/solskydd.webp'
import Card from '../components/Card'
import { Button } from '../components/Button'

const Home: NextPage = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row justify-center">
          <div className="col-12-xs col-6-md">
            <h2>
              <div className="font-xxl"></div>
              <div className="font-xxl text-green">Your Website</div>
            </h2>
            <p className="text-black mt-2 mb-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque vero maiores veniam dicta, sunt rerum
              exercitationem minus impedit corporis omnis nobis, repellat, eaque ea quam inventore! Mollitia optio animi
              natus.
            </p>
            <a className="btn-outlined-green text-green text-hover-white" href="#work">
              View Our Work
            </a>
          </div>
          <div className="col-12-xs col-5-md">
            <Image src={house} alt="dasdsa" />
          </div>
        </div>
      </div>
      <section id="about" className="bg-green-light-3 mt-5 pt-4 pb-4">
        <div className="container text-black">
          <h2 className="mb-2">About Draper Sheesh</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptatem facilis inventore rem
            distinctio quisquam unde totam iste, id voluptatibus ad atque quia dicta animi dolores labore reprehenderit
            nam incidunt? Dolore ipsam distinctio consectetur id sint at animi eius vero pariatur, adipisci ea omnis
            debitis iusto explicabo praesentium neque aliquam, illum perspiciatis repudiandae facere! Neque possimus
            assumenda repudiandae repellat exercitationem. Quos, deleniti. Quidem maxime unde doloremque illo
            dignissimos eaque qui accusamus enim quam, blanditiis nihil error magni veniam veritatis aut architecto esse
            impedit. Rem aut consequuntur at soluta expedita eius. Quod natus doloremque excepturi repudiandae soluta ut
            hic nemo, odit aperiam repellat nisi earum cupiditate impedit illo necessitatibus deserunt non rem dolorem
            repellendus nesciunt architecto nihil consequuntur expedita! Doloribus, recusandae. Ad quisquam fugit error
            repellat vero, aperiam et recusandae similique placeat non repellendus ipsum tenetur sequi, id amet nulla
            modi, reiciendis laboriosam iure deleniti corrupti voluptates accusamus numquam. Corporis, exercitationem!
          </p>
          <p className="mt-1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error magnam sit quo, facere eos iusto, ipsum
            maxime autem, ex eum suscipit animi eius quidem cumque. Recusandae ipsa quia inventore iusto! Ducimus
            consequatur sequi ex architecto ipsam accusantium veritatis, vel nobis exercitationem necessitatibus. Atque
            iure asperiores beatae blanditiis quod consequuntur assumenda voluptatibus laudantium quia repudiandae aut
            eaque, ea numquam officiis et! Fugiat similique accusantium sapiente voluptatibus, laudantium itaque facere
            eum est molestiae beatae delectus consequatur, laboriosam sed! Magnam tempora repellat id vel quasi
            consectetur aliquam nostrum odit. Neque numquam dolore optio?
          </p>
        </div>
      </section>

      <section id="work" className="mt-5">
        <div className="container">
          <h2 className="mb-2">Some of Our Work</h2>
          <div className="row gap-2">
            <Card className="col-12-xs col-6-md col-3-lg" title="AV" image={av}>
              <p className="m-1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto enim at rerum porro corrupti cumque
                dicta, modi nam illum itaque soluta officiis non minus totam eum deserunt unde dolor nobis.
              </p>
            </Card>
            <Card className="col-12-xs col-6-md col-3-lg" title="Solskydd" image={solskydd}>
              <p className="m-1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto enim at rerum porro corrupti cumque
                dicta, modi nam illum itaque soluta officiis non minus totam eum deserunt unde dolor nobis.
              </p>
            </Card>
          </div>
          <div className="row justify-flex-start mt-2">
            <Button className="btn-green text-white text-hover-white" children="View All" variant={'Small'} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
