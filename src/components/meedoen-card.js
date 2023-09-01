import React from 'react'

import PropTypes from 'prop-types'

import './meedoen-card.css'

const MeedoenCard = (props) => {
  return (
    <div className={`meedoen-card-gallery-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        loading="lazy"
        className="meedoen-card-image"
      />
      <div className="meedoen-card-container">
        <h2 className="meedoen-card-text">{props.Title}</h2>
        <span className="meedoen-card-text1">{props.Description}</span>
        <a
          href="https://www.atletiek.nu/wedstrijd/inschrijven/38027/"
          target="_blank"
          rel="noreferrer noopener"
          className="meedoen-card-link"
        >
          <img
            alt="atletiek.nu"
            src="https://www.atletiek.nu/favicon.ico"
            loading="lazy"
            className="meedoen-card-image1"
          />
          <span className="">Inschrijven</span>
        </a>
      </div>
    </div>
  )
}

MeedoenCard.defaultProps = {
  image_alt: 'image',
  rootClassName: '',
  Description: 'Lorem ipsum dolor sit amet',
  image_src:
    'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxmb3Jlc3R8ZW58MHx8fHwxNjI2MjUxMjg4&ixlib=rb-1.2.1&w=1500',
  Title: 'Project Title',
}

MeedoenCard.propTypes = {
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  Description: PropTypes.string,
  image_src: PropTypes.string,
  Title: PropTypes.string,
}

export default MeedoenCard
