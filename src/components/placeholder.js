import React from 'react'

import PropTypes from 'prop-types'

import './placeholder.css'

const Placeholder = (props) => {
  return (
    <div className="placeholder-container">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="placeholder-image"
      />
      <img
        alt={props.image_alt1}
        src={props.image_src1}
        className="placeholder-image1"
      />
      <img
        alt={props.image_alt2}
        src={props.image_src2}
        className="placeholder-image2"
      />
    </div>
  )
}

Placeholder.defaultProps = {
  image_alt2: 'image',
  image_src2: '/favicon_512.png',
  image_src1: '/favicon_192.png',
  image_alt: 'image',
  image_alt1: 'image',
  image_src: '/rffa_logo_website.png',
}

Placeholder.propTypes = {
  image_alt2: PropTypes.string,
  image_src2: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src: PropTypes.string,
}

export default Placeholder
