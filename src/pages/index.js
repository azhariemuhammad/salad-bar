import React from 'react'
import Link from 'gatsby-link'

import Content from '../components/content';
import FlashSale from '../components/flash-sale';
import About from '../components/about';

const IndexPage = (props) => (
  <div>
    <Content />
    <FlashSale />
    <About aboutImg={props}/>
  </div>
)

export default IndexPage
