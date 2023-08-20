import React from 'react'

import PropTypes from 'prop-types'

import './timetable-row0.css'

const TimetableRow0 = (props) => {
  return (
    <div className={`timetable-row0-row timetable-row ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        loading="lazy"
        className="timetable-row0-image timetable-image"
      />
      <div className="timetable-row0-container">
        <span className="timetable-time">{props.Time}</span>
        <div className="timetable-row0-container1">
          <h4 className="timetable-title">{props.Title}</h4>
        </div>
      </div>
    </div>
  )
}

TimetableRow0.defaultProps = {
  Title: '100 Meter',
  image_src: '/events/sprint.svg',
  Time: 'Time',
  image_alt: 'onderdeel icon',
  rootClassName: '',
}

TimetableRow0.propTypes = {
  Title: PropTypes.string,
  image_src: PropTypes.string,
  Time: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default TimetableRow0
