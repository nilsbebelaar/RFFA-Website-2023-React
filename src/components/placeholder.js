import React from 'react'

import PropTypes from 'prop-types'

import './placeholder.css'

const Placeholder = (props) => {
  return (
    <div className="placeholder-container">
      <img
        src={props.image_src}
        alt={props.image_alt}
        className="placeholder-image"
      />
      <img
        src={props.image_src1}
        alt={props.image_alt1}
        className="placeholder-image1"
      />
      <img
        src={props.image_src2}
        alt={props.image_alt2}
        className="placeholder-image2"
      />
    </div>
  )
}

Placeholder.defaultProps = {
  image_src: '/rffa_logo_website.png',
  image_alt: 'image',
  image_src1: '/favicon_192.png',
  image_alt1: 'image',
  image_src2: '/favicon_512.png',
  image_alt2: 'image',
}

Placeholder.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src2: PropTypes.string,
  image_alt2: PropTypes.string,
}

export default Placeholder
