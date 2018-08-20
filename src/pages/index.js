import React from 'react'
import Link from 'gatsby-link'

import Content from '../components/content'
import About from '../components/about';

const IndexPage = (props) => (
  <div>
    <Content/>
    <About aboutImg={props}/>
  </div>
)

export default IndexPage
