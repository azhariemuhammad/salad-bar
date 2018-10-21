import React from 'react'

import './flash-sale.css'
import Carousel from './carousel.jsx'

const FlashSale = (props) => {
  console.log('ini flashae', props.carousels)
  return (
    <div>
      <section className=" full-width sb-flash-sale sb-flex">
        <div className="sb-left">
          <Carousel carousels={props.carousels} />
        </div>
        <div className="sb-right">Deals</div>
      </section>
    </div>
  )
}

export default FlashSale
