import React from 'react'

import PropTypes from 'prop-types'

import './gallery-card1.css'

const GalleryCard1 = (props) => {
  return (
    <div className={`gallery-card1-gallery-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        loading="lazy"
        className="gallery-card1-image"
      />
      <div className="gallery-card1-container">
        <h2 className="gallery-card1-text">{props.Title}</h2>
        <span className="gallery-card1-text1">{props.Description}</span>
        <a
          href="https://www.atletiek.nu/wedstrijd/inschrijven/38027/"
          target="_blank"
          rel="noreferrer noopener"
          className="gallery-card1-link"
        >
          <img
            src="https://www.atletiek.nu/favicon.ico"
            alt="atletiek.nu"
            loading="lazy"
            className="gallery-card1-image1"
          />
          <span className="">Inschrijven</span>
        </a>
      </div>
    </div>
  )
}

GalleryCard1.defaultProps = {
  image_alt: 'image',
  rootClassName: '',
  Description: 'Lorem ipsum dolor sit amet',
  image_src:
    'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxmb3Jlc3R8ZW58MHx8fHwxNjI2MjUxMjg4&ixlib=rb-1.2.1&w=1500',
  Title: 'Project Title',
}

GalleryCard1.propTypes = {
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  Description: PropTypes.string,
  image_src: PropTypes.string,
  Title: PropTypes.string,
}

export default GalleryCard1
