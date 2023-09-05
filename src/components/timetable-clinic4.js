import React from 'react'

import PropTypes from 'prop-types'

import './timetable-clinic4.css'

const TimetableClinic4 = (props) => {
  return (
    <div
      className={`timetable-clinic4-row timetable-row ${props.rootClassName} `}
    >
      <img
        alt={props.image_alt}
        src={props.image_src}
        loading="lazy"
        className="timetable-clinic4-image timetable-image"
      />
      <div className="timetable-clinic4-container">
        <span className="timetable-time">{props.Time}</span>
        <h4 className="timetable-title">{props.Title}</h4>
        <div className="timetable-clinic4-container1">
          <a
            href={props.url_1}
            target="_blank"
            rel="noreferrer noopener"
            className="timetable-clinic4-link timetable-button"
          >
            <span className="">{props.name_1}</span>
          </a>
          <h4 className="timetable-clinic4-title1 timetable-title">
            {props.by_1}
          </h4>
        </div>
        <div className="timetable-clinic4-container2">
          <a
            href={props.url_2}
            target="_blank"
            rel="noreferrer noopener"
            className="timetable-clinic4-link1 timetable-button"
          >
            <span className="">{props.name_2}</span>
          </a>
          <h4 className="timetable-clinic4-title2 timetable-title">
            {props.by_2}
          </h4>
        </div>
        <div className="timetable-clinic4-container3">
          <a
            href={props.url_3}
            target="_blank"
            rel="noreferrer noopener"
            className="timetable-clinic4-link2 timetable-button"
          >
            <span className="">{props.name_3}</span>
          </a>
          <h4 className="timetable-clinic4-title3 timetable-title">
            {props.by_3}
          </h4>
        </div>
        <div className="timetable-clinic4-container4">
          <a
            href={props.url_4}
            target="_blank"
            rel="noreferrer noopener"
            className="timetable-clinic4-link3 timetable-button"
          >
            <span className="">{props.name_4}</span>
          </a>
          <h4 className="timetable-clinic4-title4 timetable-title">
            {props.by_4}
          </h4>
        </div>
      </div>
    </div>
  )
}

TimetableClinic4.defaultProps = {
  rootClassName: '',
  image_src: '/events/sprint.svg',
  image_alt: 'Clinic icoon',
  Time: 'Time',
  Title: '100 Meter',
  url_1: 'https://www.atletiek.nu/wedstrijd/chronoloog/38027/',
  by_1: 'Trainer',
  url_2: 'https://www.atletiek.nu/wedstrijd/chronoloog/38027/',
  by_2: 'Trainer',
  url_3: 'https://www.atletiek.nu/wedstrijd/chronoloog/38027/',
  by_3: 'Trainer',
  url_4: 'https://www.atletiek.nu/wedstrijd/chronoloog/38027/',
  by_4: 'Trainer',
  name_1: 'Clinic',
  name_2: 'Clinic',
  name_3: 'Clinic',
  name_4: 'Clinic',
}

TimetableClinic4.propTypes = {
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  Time: PropTypes.string,
  Title: PropTypes.string,
  url_1: PropTypes.string,
  by_1: PropTypes.string,
  url_2: PropTypes.string,
  by_2: PropTypes.string,
  url_3: PropTypes.string,
  by_3: PropTypes.string,
  url_4: PropTypes.string,
  by_4: PropTypes.string,
  name_1: PropTypes.string,
  name_2: PropTypes.string,
  name_3: PropTypes.string,
  name_4: PropTypes.string,
}

export default TimetableClinic4
