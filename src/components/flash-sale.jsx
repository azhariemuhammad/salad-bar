import React from 'react'

import './flash-sale.css'
import Carousel from './carousel.jsx'

const FlashSale = (props) => {
  return (
    <div>
      <section className=" full-width sb-flash-sale sb-flex">
        <div className="sb-left">
          <Carousel className="sb-carousel" carousels={props.carousels} />
        </div>
        <div className="sb-right">Deals</div>
      </section>
    </div>
  )
}

export default FlashSale
