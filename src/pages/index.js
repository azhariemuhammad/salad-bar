import React from 'react'
import Link from 'gatsby-link'

import Content from '../components/content';
import FlashSale from '../components/flash-sale';
import About from '../components/about';

const IndexPage = (props) => {
  console.log(props)
  return (
    <div>
      <Content />
      <FlashSale 
        carousels={[props.carousel1, props.carousel2, props.carousel3]}
      />
      <About aboutImg={props.aboutImage}/>
    </div>
  )
  
}

export default IndexPage
