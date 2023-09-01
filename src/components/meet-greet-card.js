import React from 'react'

import PropTypes from 'prop-types'

import './meet-greet-card.css'

const MeetGreetCard = (props) => {
  return (
    <div className={`meet-greet-card-gallery-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        loading="lazy"
        className="meet-greet-card-image"
      />
      <div className="meet-greet-card-container">
        <h2 className="meet-greet-card-text">{props.Title}</h2>
        <span className="meet-greet-card-text1">Specialisaties:</span>
        <span className="meet-greet-card-text2">{props.Description}</span>
      </div>
    </div>
  )
}

MeetGreetCard.defaultProps = {
  rootClassName: '',
  image_alt: 'image',
  image_src:
    'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxmb3Jlc3R8ZW58MHx8fHwxNjI2MjUxMjg4&ixlib=rb-1.2.1&w=1500',
  Title: 'Project Title',
  Description: 'Lorem ipsum dolor sit amet',
}

MeetGreetCard.propTypes = {
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  Title: PropTypes.string,
  Description: PropTypes.string,
}

export default MeetGreetCard
