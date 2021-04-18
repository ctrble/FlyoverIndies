import React from 'react';
import PropTypes from 'prop-types';

/*
Needs <a href>: https://github.com/fullcalendar/fullcalendar/issues/6133
Also, actual link opening is handled in EventCalendar's eventClick
see https://fullcalendar.io/docs/eventClick
*/

const EventContent = ({ url, timeText, title, description, location }) => (
  <>
    <a href={url} target="_blank" rel="noopener noreferrer">
      <b>{timeText}</b>
      <span>{title}</span>
      <p>{description}</p>
      <i>{location}</i>
    </a>
  </>
);

EventContent.propTypes = {
  url: PropTypes.string,
  timeText: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  location: PropTypes.string,
};

EventContent.defaultProps = {
  url: '',
  timeText: '',
  title: '',
  description: '',
  location: '',
};

export default EventContent;
