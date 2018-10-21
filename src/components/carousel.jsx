import React from 'react'
import Img from 'gatsby-image'

const Carousel = props => {
  console.log('yoi', props)
  console.log(props.carousels[0].childImageSharp.sizes)
  const flickityOptions = {
    initialIndex: 0,
  }
  let images = props.carousels.map(img => (
    <Img
      title="Header image"
      alt="Greek food laid out on table"
      sizes={img.childImageSharp.sizes}
      style={{ width: '500px', display: 'flex' }}
    />
  ))
  return (
    <div>
    
    </div>
      
  )
}

export default Carousel
