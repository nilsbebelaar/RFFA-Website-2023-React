import React from 'react'

import PropTypes from 'prop-types'

import './timetable-clinic2.css'

const TimetableClinic2 = (props) => {
  return (
    <div
      className={`timetable-clinic2-row timetable-row ${props.rootClassName} `}
    >
      <img
        alt={props.image_alt}
        src={props.image_src}
        loading="lazy"
        className="timetable-clinic2-image timetable-image"
      />
      <div className="timetable-clinic2-container">
        <span className="timetable-time">{props.Time}</span>
        <h4 className="timetable-title">{props.Title}</h4>
        <div className="timetable-clinic2-container1">
          <a
            href={props.url_1}
            target="_blank"
            rel="noreferrer noopener"
            className="timetable-clinic2-link timetable-button"
          >
            <span className="">{props.name_1}</span>
          </a>
          <h4 className="timetable-clinic2-title1 timetable-title">
            {props.by_1}
          </h4>
        </div>
        <div className="timetable-clinic2-container2">
          <a
            href={props.url_2}
            target="_blank"
            rel="noreferrer noopener"
            className="timetable-clinic2-link1 timetable-button"
          >
            <span className="">{props.name_2}</span>
          </a>
          <h4 className="timetable-clinic2-title2 timetable-title">
            {props.by_2}
          </h4>
        </div>
      </div>
    </div>
  )
}

TimetableClinic2.defaultProps = {
  image_src: '/events/sprint.svg',
  by_1: 'Trainer',
  rootClassName: '',
  name_1: 'Clinic',
  name_2: 'Clinic',
  url_2: 'https://www.atletiek.nu/wedstrijd/chronoloog/38027/',
  Time: 'Time',
  by_2: 'Trainer',
  Title: '100 Meter',
  url_1: 'https://www.atletiek.nu/wedstrijd/chronoloog/38027/',
  image_alt: 'Clinic icoon',
}

TimetableClinic2.propTypes = {
  image_src: PropTypes.string,
  by_1: PropTypes.string,
  rootClassName: PropTypes.string,
  name_1: PropTypes.string,
  name_2: PropTypes.string,
  url_2: PropTypes.string,
  Time: PropTypes.string,
  by_2: PropTypes.string,
  Title: PropTypes.string,
  url_1: PropTypes.string,
  image_alt: PropTypes.string,
}

export default TimetableClinic2
