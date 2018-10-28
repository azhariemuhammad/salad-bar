import React from 'react'
import Img from 'gatsby-image'

import './carousel.css'

class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.slideIndex = 1
    this.getImage = this.getImage.bind(this)
    this.showSlides = this.showSlides.bind(this)
  }

  getImage() {
    let images = this.props.carousels.map((img, i) => (
      <Img
        key={i}
        className="sb-carousel-image"
        title="Header image"
        alt="Greek food laid out on table"
        sizes={img.childImageSharp.sizes}
        style={{ width: '404px', display: 'flex' }}
      />
    ))
    return images
  }

  showSlides(n) {
    const slides = document.getElementsByClassName("sb-carousel-image")
    if (n > slides.length) {
      this.setState({slideIndex: 1})
    }
    if (n < 1) {
      this.setState({slideIndex: slides.length})
    }
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"
      
    }
    
    if (slides.length) {
      try {
        slides[this.slideIndex - 1].style.display = "block"
      } catch(e) {
        slides[0].style.display = "block"
      }
    }
  }

  handleNextSlide(n) {
    this.setState({slideIndex: this.slideIndex += 1}, this.showSlides(this.slideIndex))
    
  }

  handlePrevSlide(n) {
    this.setState({slideIndex: this.slideIndex += n}, this.showSlides(this.slideIndex))
  }


  render() {
    this.showSlides(1);
    return (
      <div className="slide-container">
          {this.getImage()}
        <button onClick={() => this.handlePrevSlide(-1)} className="prev sb-display-left">
          &#10094;
        </button>
        <button onClick={() => this.handleNextSlide(1)} className="next sb-display-right">
          &#10095;
        </button>
      </div>
    )
  }
  
}

export default Carousel
