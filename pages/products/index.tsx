import React from 'react'
import Accordion from '../../components/Accordion'
import Card from '../../components/Card'
import Submenu from '../../components/Submenu'
import Submenuitem from '../../components/Submenu/Submenuitem'
import image from '../../public/images/av.webp'

const Products = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="col-12-xs col-6-md">
          <h1 className="text-green font-xxl">Our Products</h1>
          <p className="text-black mt-2 mb-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod accusamus neque ad a quaerat modi ex
            exercitationem facere dolor, beatae deleniti sunt quae harum veniam, quasi aut at optio! Accusantium.
          </p>
        </div>
        <div className="row gap-2 justify-center">
          <div className="col-12-xs col-6-md col-3-lg">
            <Card image={image} title={'Prod'} className={''}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta ducimus quidem recusandae sequi aut,
              alias perferendis qui earum, autem, iusto eligendi veritatis aliquam distinctio eos harum iste animi
              obcaecati velit!
            </Card>
          </div>
          <div className="col-12-xs col-6-md col-3-lg">
            <Card image={image} title={'Prod'} className={''}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta ducimus quidem recusandae sequi aut,
              alias perferendis qui earum, autem, iusto eligendi veritatis aliquam distinctio eos harum iste animi
              obcaecati velit!
            </Card>
          </div>
          <div className="col-12-xs col-6-md col-3-lg">
            <Card image={image} title={'Prod'} className={''}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta ducimus quidem recusandae sequi aut,
              alias perferendis qui earum, autem, iusto eligendi veritatis aliquam distinctio eos harum iste animi
              obcaecati velit!
            </Card>
          </div>
        </div>
      </div>
      <section className="bg-green">
        <div className="container text-black">
          <h2 className="mb-2">Accordion</h2>
          <div className="row gap-2">
            <Accordion header={'Press'} variant={'list'} className="accordion ">
              <Submenu title="Sheesh">
                <Submenuitem children="test" />
              </Submenu>
            </Accordion>
          </div>
        </div>
      </section>
    </>
  )
}

export default Products
