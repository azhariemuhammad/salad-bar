import React from 'react'
import Img from 'gatsby-image'

import './about.css'

const About = props => {
  console.log(props.aboutImg)
  return (
    <div className="full-width">
      <section className="sb-about">
        <div className="sb-section-title">
          <h2>About Our Store</h2>
          <figure>
            <picture className="sb-about-img">
              <Img
                title="Header image"
                alt="Greek food laid out on table"
                sizes={props.aboutImg.sizes}
              />
            </picture>
          </figure>
        </div>
      </section>
    </div>
  )
}

export default About
