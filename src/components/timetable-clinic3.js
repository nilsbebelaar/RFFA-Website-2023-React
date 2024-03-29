import React from 'react'

import PropTypes from 'prop-types'

import './timetable-clinic3.css'

const TimetableClinic3 = (props) => {
  return (
    <div
      className={`timetable-clinic3-row timetable-row ${props.rootClassName} `}
    >
      <img
        alt={props.image_alt}
        src={props.image_src}
        loading="lazy"
        className="timetable-clinic3-image timetable-image"
      />
      <div className="timetable-clinic3-container">
        <span className="timetable-time">{props.Time}</span>
        <h4 className="timetable-title">{props.Title}</h4>
        <div className="timetable-clinic3-container1">
          <a
            href={props.url_1}
            target="_blank"
            rel="noreferrer noopener"
            className="timetable-clinic3-link timetable-button"
          >
            <span className="">{props.name_1}</span>
          </a>
          <h4 className="timetable-clinic3-title1 timetable-title">
            {props.by_1}
          </h4>
        </div>
        <div className="timetable-clinic3-container2">
          <a
            href={props.url_2}
            target="_blank"
            rel="noreferrer noopener"
            className="timetable-clinic3-link1 timetable-button"
          >
            <span className="">{props.name_2}</span>
          </a>
          <h4 className="timetable-clinic3-title2 timetable-title">
            {props.by_2}
          </h4>
        </div>
        <div className="timetable-clinic3-container3">
          <a
            href={props.url_3}
            target="_blank"
            rel="noreferrer noopener"
            className="timetable-clinic3-link2 timetable-button"
          >
            <span className="">{props.name_3}</span>
          </a>
          <h4 className="timetable-clinic3-title3 timetable-title">
            {props.by_3}
          </h4>
        </div>
      </div>
    </div>
  )
}

TimetableClinic3.defaultProps = {
  url_2: 'https://www.atletiek.nu/wedstrijd/chronoloog/38027/',
  name_1: 'Clinic',
  Title: '100 Meter',
  name_3: 'Clinic',
  Time: 'Time',
  image_src: '/events/sprint.svg',
  rootClassName: '',
  by_3: 'Trainer',
  name_2: 'Clinic',
  url_1: 'https://www.atletiek.nu/wedstrijd/chronoloog/38027/',
  by_2: 'Trainer',
  image_alt: 'Clinic icoon',
  by_1: 'Trainer',
  url_3: 'https://www.atletiek.nu/wedstrijd/chronoloog/38027/',
}

TimetableClinic3.propTypes = {
  url_2: PropTypes.string,
  name_1: PropTypes.string,
  Title: PropTypes.string,
  name_3: PropTypes.string,
  Time: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  by_3: PropTypes.string,
  name_2: PropTypes.string,
  url_1: PropTypes.string,
  by_2: PropTypes.string,
  image_alt: PropTypes.string,
  by_1: PropTypes.string,
  url_3: PropTypes.string,
}

export default TimetableClinic3
