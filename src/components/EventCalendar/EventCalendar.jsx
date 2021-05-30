import React from 'react';
import PropTypes from 'prop-types';
import FullCalendar from '@fullcalendar/react';
import listPlugin from '@fullcalendar/list';
import googleCalendarPlugin from '@fullcalendar/google-calendar';

import EventContent from './EventContent';

import styles from './EventCalendar.module.scss';

import '@fullcalendar/common/main.css';
import '@fullcalendar/list/main.css';

const EventCalendar = ({ duration }) => {
  const renderEventContent = (eventInfo) => {
    const {
      event: {
        url,
        title,
        extendedProps: { description, location },
      },
      isToday,
    } = eventInfo;

    return (
      <EventContent
        url={url}
        title={title}
        description={description}
        location={location}
        isToday={isToday}
      />
    );
  };

  const handleEventClick = (info) => {
    info.jsEvent.preventDefault();
    if (info.event.url) {
      window.open(info.event.url, '_blank', 'noopener noreferrer');
    }
  };

  return (
    <div className={styles.calendar}>
      <FullCalendar
        timeZone="CST"
        plugins={[googleCalendarPlugin, listPlugin]}
        googleCalendarApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
        eventContent={renderEventContent}
        height="100%"
        contentHeight="auto"
        stickyHeaderDates={false}
        events={{
          googleCalendarId:
            '1o3frgsjo8jsfgreuq8d8nq9j0@group.calendar.google.com',
        }}
        eventClick={handleEventClick}
        initialView="list"
        duration={duration}
        titleFormat={{
          month: 'long',
          year: 'numeric',
          day: 'numeric',
        }}
        listDaySideFormat={false}
        listDayFormat={{
          weekday: 'long',
          month: 'short',
          day: 'numeric',
        }}
      />
    </div>
  );
};

EventCalendar.propTypes = {
  duration: PropTypes.objectOf(PropTypes.number),
};

EventCalendar.defaultProps = {
  duration: { weeks: 2 },
};

export default EventCalendar;
