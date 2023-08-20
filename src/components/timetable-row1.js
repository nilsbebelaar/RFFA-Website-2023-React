import React from 'react'

import PropTypes from 'prop-types'

import './timetable-row1.css'

const TimetableRow1 = (props) => {
  return (
    <div className={`timetable-row1-row timetable-row ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        loading="lazy"
        className="timetable-row1-image timetable-image"
      />
      <div className="timetable-row1-container">
        <span className="timetable-time">{props.Time}</span>
        <div className="timetable-row1-container1">
          <h4 className="timetable-title">{props.Title}</h4>
          <a
            href={props.link_url}
            target="_blank"
            rel="noreferrer noopener"
            className="timetable-row1-link timetable-button"
          >
            <span className="">{props.Link_text}</span>
          </a>
        </div>
      </div>
    </div>
  )
}

TimetableRow1.defaultProps = {
  link_url: 'https://www.atletiek.nu/wedstrijd/chronoloog/38027/',
  image_src: '/events/sprint.svg',
  rootClassName: '',
  Link_text: 'Link',
  image_alt: 'onderdeel icon',
  Title: '100 Meter',
  Time: 'Time',
}

TimetableRow1.propTypes = {
  link_url: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  Link_text: PropTypes.string,
  image_alt: PropTypes.string,
  Title: PropTypes.string,
  Time: PropTypes.string,
}

export default TimetableRow1
