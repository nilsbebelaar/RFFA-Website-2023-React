import React from 'react'

import PropTypes from 'prop-types'

import './timetable-row4.css'

const TimetableRow4 = (props) => {
  return (
    <div className={`timetable-row4-row timetable-row ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        loading="lazy"
        className="timetable-row4-image timetable-image"
      />
      <div className="timetable-row4-container">
        <span className="timetable-time">{props.Time}</span>
        <div className="timetable-row4-container1">
          <h4 className="timetable-title">{props.Title}</h4>
          <div className="timetable-row4-container2">
            <a
              href={props.link_url_1}
              target="_blank"
              rel="noreferrer noopener"
              className="timetable-row4-link timetable-button"
            >
              <span className="">{props.Link_text_1}</span>
            </a>
            <a
              href={props.link_url_2}
              target="_blank"
              rel="noreferrer noopener"
              className="timetable-row4-link1 timetable-button"
            >
              <span className="">{props.Link_text_2}</span>
            </a>
            <a
              href={props.link_url_3}
              target="_blank"
              rel="noreferrer noopener"
              className="timetable-row4-link2 timetable-button"
            >
              <span className="">{props.Link_text_3}</span>
            </a>
            <a
              href={props.link_url_4}
              target="_blank"
              rel="noreferrer noopener"
              className="timetable-row4-link3 timetable-button"
            >
              <span className="">{props.Link_text_4}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

TimetableRow4.defaultProps = {
  Link_text_2: 'Link',
  Link_text_4: 'Link',
  link_url_4: 'https://www.atletiek.nu/wedstrijd/chronoloog/38027/',
  Title: '100 Meter',
  image_alt: 'onderdeel icon',
  link_url_1: 'https://www.atletiek.nu/wedstrijd/chronoloog/38027/',
  link_url_2: 'https://www.atletiek.nu/wedstrijd/chronoloog/38027/',
  link_url_3: 'https://www.atletiek.nu/wedstrijd/chronoloog/38027/',
  rootClassName: '',
  Link_text_3: 'Link',
  Link_text_1: 'Link',
  image_src: '/events/sprint.svg',
  Time: 'Time',
}

TimetableRow4.propTypes = {
  Link_text_2: PropTypes.string,
  Link_text_4: PropTypes.string,
  link_url_4: PropTypes.string,
  Title: PropTypes.string,
  image_alt: PropTypes.string,
  link_url_1: PropTypes.string,
  link_url_2: PropTypes.string,
  link_url_3: PropTypes.string,
  rootClassName: PropTypes.string,
  Link_text_3: PropTypes.string,
  Link_text_1: PropTypes.string,
  image_src: PropTypes.string,
  Time: PropTypes.string,
}

export default TimetableRow4
