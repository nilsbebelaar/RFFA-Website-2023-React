import React from 'react'

import PropTypes from 'prop-types'

import './timetable-clinic5.css'

const TimetableClinic5 = (props) => {
  return (
    <div
      className={`timetable-clinic5-row timetable-row ${props.rootClassName} `}
    >
      <img
        alt={props.image_alt}
        src={props.image_src}
        loading="lazy"
        className="timetable-clinic5-image timetable-image"
      />
      <div className="timetable-clinic5-container">
        <span className="timetable-time">{props.Time}</span>
        <h4 className="timetable-title">{props.Title}</h4>
        <div className="timetable-clinic5-container1">
          <a
            href={props.url_1}
            target="_blank"
            rel="noreferrer noopener"
            className="timetable-clinic5-link timetable-button"
          >
            <span className="">{props.name_1}</span>
          </a>
          <h4 className="timetable-clinic5-title1 timetable-title">
            {props.by_1}
          </h4>
        </div>
        <div className="timetable-clinic5-container2">
          <a
            href={props.url_2}
            target="_blank"
            rel="noreferrer noopener"
            className="timetable-clinic5-link1 timetable-button"
          >
            <span className="">{props.name_2}</span>
          </a>
          <h4 className="timetable-clinic5-title2 timetable-title">
            {props.by_2}
          </h4>
        </div>
        <div className="timetable-clinic5-container3">
          <a
            href={props.url_3}
            target="_blank"
            rel="noreferrer noopener"
            className="timetable-clinic5-link2 timetable-button"
          >
            <span className="">{props.name_3}</span>
          </a>
          <h4 className="timetable-clinic5-title3 timetable-title">
            {props.by_3}
          </h4>
        </div>
        <div className="timetable-clinic5-container4">
          <a
            href={props.url_4}
            target="_blank"
            rel="noreferrer noopener"
            className="timetable-clinic5-link3 timetable-button"
          >
            <span className="">{props.name_4}</span>
          </a>
          <h4 className="timetable-clinic5-title4 timetable-title">
            {props.by_4}
          </h4>
        </div>
        <div className="timetable-clinic5-container5">
          <a
            href={props.url_5}
            target="_blank"
            rel="noreferrer noopener"
            className="timetable-clinic5-link4 timetable-button"
          >
            <span className="">{props.name_5}</span>
          </a>
          <h4 className="timetable-clinic5-title5 timetable-title">
            {props.by_5}
          </h4>
        </div>
      </div>
    </div>
  )
}

TimetableClinic5.defaultProps = {
  name_2: 'Clinic',
  by_4: 'Trainer',
  url_4: 'https://www.atletiek.nu/wedstrijd/chronoloog/38027/',
  name_3: 'Clinic',
  url_5: 'https://www.atletiek.nu/wedstrijd/chronoloog/38027/',
  image_src: '/events/sprint.svg',
  url_3: 'https://www.atletiek.nu/wedstrijd/chronoloog/38027/',
  rootClassName: '',
  name_1: 'Clinic',
  by_2: 'Trainer',
  by_1: 'Trainer',
  url_1: 'https://www.atletiek.nu/wedstrijd/chronoloog/38027/',
  by_3: 'Trainer',
  Title: '100 Meter',
  by_5: 'Trainer',
  url_2: 'https://www.atletiek.nu/wedstrijd/chronoloog/38027/',
  image_alt: 'Clinic icoon',
  name_5: 'Clinic',
  Time: 'Time',
  name_4: 'Clinic',
}

TimetableClinic5.propTypes = {
  name_2: PropTypes.string,
  by_4: PropTypes.string,
  url_4: PropTypes.string,
  name_3: PropTypes.string,
  url_5: PropTypes.string,
  image_src: PropTypes.string,
  url_3: PropTypes.string,
  rootClassName: PropTypes.string,
  name_1: PropTypes.string,
  by_2: PropTypes.string,
  by_1: PropTypes.string,
  url_1: PropTypes.string,
  by_3: PropTypes.string,
  Title: PropTypes.string,
  by_5: PropTypes.string,
  url_2: PropTypes.string,
  image_alt: PropTypes.string,
  name_5: PropTypes.string,
  Time: PropTypes.string,
  name_4: PropTypes.string,
}

export default TimetableClinic5
