import React from 'react'
import Img from 'gatsby-image'

import './about.css'

const About = props => {
  console.log(props)
  return (
    <div className="full-width">
      <section className="sb-section-title">
        <h2>About Our Store</h2>
        <div className="sb-content">
          <div className="sb-flex">
            <div className="sb-about-left">
              <figure>
                <picture className="sb-about-img">
                  <Img
                    title="Header image"
                    alt="Greek food laid out on table"
                    sizes={props.aboutImg.sizes}
                    style={{ width: '410px' }}
                  />
                </picture>
              </figure>
            </div>
            <div className="sb-about-right">
              <div className="title">
                <h4 style={{'marginBottom': "0px"}}>Discover</h4>
                <h2 style={{'margin': "8px", 'marginBottom': "0px"}}>Our Story</h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                distinctio, modi labore minima in maiores quidem molestiae
                quibusdam illo magni alias dolor, quos saepe quia! Laudantium
                esse cumque provident quidem.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
