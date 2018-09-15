import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Banner from '../components/banner'
import './index.css'

class Layout extends React.PureComponent {
  render() {
    const { children, data } = this.props
    const aboutImg = data.aboutImage
    return (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        <Banner />
        <div>{children({...this.props, ...aboutImg})}</div>
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query aboutImageQueryAndSiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
    aboutImage: imageSharp(id: { regex: "/food-image/" }) {
      sizes(maxWidth: 410) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
