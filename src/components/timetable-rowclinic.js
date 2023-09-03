import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './timetable-rowclinic.css'

const TimetableRowclinic = (props) => {
  const [show4, setShow4] = useState(false)
  const [show3, setShow3] = useState(true)
  const [show2, setShow2] = useState(true)
  return (
    <div
      className={`timetable-rowclinic-row timetable-row ${props.rootClassName} `}
    >
      <img
        alt={props.image_alt}
        src={props.image_src}
        loading="lazy"
        className="timetable-rowclinic-image timetable-image"
      />
      <div className="timetable-rowclinic-container">
        <span className="timetable-time">{props.Time}</span>
        <h4 className="timetable-title">{props.Title}</h4>
        <div className="timetable-rowclinic-container1">
          <a
            href={props.url_1}
            target="_blank"
            rel="noreferrer noopener"
            className="timetable-rowclinic-link timetable-button"
          >
            <span className="">{props.name_1}</span>
          </a>
          <h4 className="timetable-title">{props.by_1}</h4>
        </div>
        {show2 && (
          <div className="timetable-rowclinic-container2">
            <a
              href={props.url_2}
              target="_blank"
              rel="noreferrer noopener"
              className="timetable-rowclinic-link1 timetable-button"
            >
              <span className="">{props.name_2}</span>
            </a>
            <h4 className="timetable-title">{props.by_2}</h4>
          </div>
        )}
        {show3 && (
          <div className="timetable-rowclinic-container3">
            <a
              href={props.url_3}
              target="_blank"
              rel="noreferrer noopener"
              className="timetable-rowclinic-link2 timetable-button"
            >
              <span className="">{props.name_3}</span>
            </a>
            <h4 className="timetable-title">{props.by_3}</h4>
          </div>
        )}
        {show4 && (
          <div className="timetable-rowclinic-container4">
            <a
              href={props.url_4}
              target="_blank"
              rel="noreferrer noopener"
              className="timetable-rowclinic-link3 timetable-button"
            >
              <span className="">{props.name_4}</span>
            </a>
            <h4 className="timetable-title">{props.by_4}</h4>
          </div>
        )}
      </div>
    </div>
  )
}

TimetableRowclinic.defaultProps = {
  url_2: 'https://www.atletiek.nu/wedstrijd/chronoloog/38027/',
  name_1: 'Clinic',
  Title: '100 Meter',
  name_3: 'Clinic',
  Time: 'Time',
  image_src: '/events/sprint.svg',
  rootClassName: '',
  url_4: 'https://www.atletiek.nu/wedstrijd/chronoloog/38027/',
  by_3: 'Trainer',
  name_2: 'Clinic',
  url_1: 'https://www.atletiek.nu/wedstrijd/chronoloog/38027/',
  by_4: 'Trainer',
  by_2: 'Trainer',
  image_alt: 'Clinic icoon',
  name_4: 'Clinic',
  by_1: 'Trainer',
  url_3: 'https://www.atletiek.nu/wedstrijd/chronoloog/38027/',
}

TimetableRowclinic.propTypes = {
  url_2: PropTypes.string,
  name_1: PropTypes.string,
  Title: PropTypes.string,
  name_3: PropTypes.string,
  Time: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  url_4: PropTypes.string,
  by_3: PropTypes.string,
  name_2: PropTypes.string,
  url_1: PropTypes.string,
  by_4: PropTypes.string,
  by_2: PropTypes.string,
  image_alt: PropTypes.string,
  name_4: PropTypes.string,
  by_1: PropTypes.string,
  url_3: PropTypes.string,
}

export default TimetableRowclinic
