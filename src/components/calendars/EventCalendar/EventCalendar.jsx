import React from 'react';
import PropTypes from 'prop-types';
import FullCalendar from '@fullcalendar/react';
import listPlugin from '@fullcalendar/list';
import googleCalendarPlugin from '@fullcalendar/google-calendar';

import {
  googleCalendarApiKey,
  googleCalendarId,
  timeZone,
  titleFormat,
  listDayFormat,
  handleEventClick,
} from '../calendarUtils';

import { renderEventContent } from '../EventContent';

import styles from './EventCalendar.module.scss';

import '@fullcalendar/common/main.css';
import '@fullcalendar/list/main.css';

const EventCalendar = ({ duration }) => (
  <div className={styles.calendar}>
    <FullCalendar
      duration={duration}
      timeZone={timeZone}
      plugins={[googleCalendarPlugin, listPlugin]}
      googleCalendarApiKey={googleCalendarApiKey}
      events={{
        googleCalendarId,
      }}
      eventClick={handleEventClick}
      eventContent={renderEventContent}
      height="100%"
      contentHeight="auto"
      stickyHeaderDates={false}
      initialView="list"
      titleFormat={titleFormat}
      listDaySideFormat={false}
      listDayFormat={listDayFormat}
    />
  </div>
);

EventCalendar.propTypes = {
  duration: PropTypes.objectOf(PropTypes.number),
};

EventCalendar.defaultProps = {
  duration: { weeks: 2 },
};

export default EventCalendar;
