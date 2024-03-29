import React from 'react';
import PropTypes from 'prop-types';

import styles from './EventContent.module.scss';

/*
Needs <a href>: https://github.com/fullcalendar/fullcalendar/issues/6133
Also, actual link opening is handled in EventCalendar's eventClick
see https://fullcalendar.io/docs/eventClick
*/

const EventContent = ({ url, title, description, location }) => (
  <a
    className={styles.eventContent}
    href={url}
    target="_blank"
    rel="noopener noreferrer"
  >
    <span className={styles.eventContent__title}>{title}</span>
    <p>{description}</p>
    <i>{location}</i>
  </a>
);

EventContent.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  location: PropTypes.string,
};

EventContent.defaultProps = {
  url: '',
  title: '',
  description: '',
  location: '',
};

export default EventContent;
